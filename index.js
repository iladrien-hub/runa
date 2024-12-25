import antlr4 from "antlr4";
import RunaLexer from "./runa/JavaScript/RunaLexer.js";
import RunaParser from "./runa/JavaScript/RunaParser.js";
import RunaParserVisitor from "./runa/JavaScript/RunaParserVisitor.js";
import fs from "fs";
import path from "path";

class RunaInterpreter extends RunaParserVisitor {
    constructor(filePath, contextStore) {
        super();
        this.path = filePath;
        this.contextStore = contextStore;
        this.variablesStore = new Map();
    }

    handleImports(imports) {
        for (const import_ of imports) {
            const modulePath = import_.path;
            const alias = import_.alias ?? modulePath.split("/").pop();
            const resolvedPath = this.resolveModulePath(modulePath);
            this.variablesStore.set(alias, executeFile(resolvedPath, this.contextStore));
        }
    }

    resolveModulePath(modulePath) {
        const basePath = path.dirname(this.path);
        const resolvedPath = path.join(basePath, modulePath);
        const variants = [
            path.join(resolvedPath, '__index__.runa'),
            `${resolvedPath}.runa`,
            resolvedPath,
        ].filter(fs.existsSync);

        if (variants.length === 0) {
            throw new Error(`Could not find module at path: ${resolvedPath}`);
        } 
        if (variants.length > 1) {
            throw new Error(`Ambiguous module at path: ${resolvedPath}`);
        }
        return variants[0];
    }

    handleUses(uses) {
        for (const use of uses) {
            this.variablesStore.set(use.name, {
                text: this.contextStore.get(use.name),
            });
        }
    }

    selectRandomRecord(records) {
        const totalWeight = records.reduce((sum, record) => sum + record.weight, 0);
        const randomValue = Math.random() * totalWeight;
        let currentWeight = 0;
        return records.find(record => {
            currentWeight += record.weight;
            return randomValue <= currentWeight;
        });
    }

    processBlock(block, result, loras) {
        switch (block.type) {
            case "text":
                result.push(block.text);
                break;
            case "variable":
                this.processVariableBlock(block, result, loras);
                break;
            case "lora":
                this.processLoraBlock(block, loras);
                break;
        }
    }

    processVariableBlock(block, result, loras) {
        const varData = this.variablesStore.get(block.name);
        if (varData === undefined) return;
        
        for (const lora of varData.loras?.values() ?? []) {
            this.updateLora(loras, lora);
        }
        result.push(varData.text);
    }

    processLoraBlock(block, loras) {
        this.updateLora(loras, block);
    }

    updateLora(loras, lora) {
        if (!loras.has(lora.name) || loras.get(lora.name).value < lora.value) {
            loras.set(lora.name, lora);
        }
    }

    visitFile(ctx) {
        const data = this.visitChildren(ctx).filter(d => d);
        const imports = data.filter(d => d.type === "import" || d.type === "importAs");   
        const records = data.filter(d => d.type === "record");
        const uses = data.filter(d => d.type === "use");

        if (records.length === 0) return "";
        
        this.handleImports(imports);
        this.handleUses(uses);

        const selectedRecord = this.selectRandomRecord(records);
        let result = [];
        let loras = new Map();

        for (const block of selectedRecord.children) {
            this.processBlock(block, result, loras);
        }

        return {
            text: result.join("").trim(),
            loras: loras,
        };
    }

    visitImportStatement(ctx) {
        return {
            type: "import",
            path: ctx.children[1].getText(),
        }
    }

    visitImportAsStatement(ctx) {
        const import_ = this.visitChildren(ctx)[0];
        if (ctx.children.length === 2) return import_;
        return {
            type: "importAs",
            path: import_.path,
            alias: ctx.children[2].getText(),
        }
    }

    visitUseStatement(ctx) {
        return {
            type: "use",
            name: ctx.children[1].getText(),
        }
    }

    visitRecord(ctx) {
        const data = this.visitChildren(ctx).filter(d => d);
        let weight = 1;
        if (data[0]?.type === "weight") {
            weight = data[0].value;
            data.shift();
        }
        return {
            type: "record",
            weight: weight,
            children: data.map(d => d[0]),
        };
    }

    visitRecordText(ctx) {
        return {
            type: "text",
            text: this.visitChildren(ctx)[0],
        }
    }

    visitRecordVariable(ctx) {
        return {
            type: "variable",
            name: ctx.children[1].getText(),
        }
    }

    visitRecordWeight(ctx) {
        const number = this.visitChildren(ctx)[0];
        return {
            type: "weight",
            value: number,
        }
    }

    visitNumber(ctx) {
        return Number(ctx.getText());
    }

    visitLora(ctx) {
        return {
            type: "lora",
            name: ctx.children[3].getText(),
            value: Number(ctx.children[5].getText()),
        }
    }

    visitText(ctx) {
        const text = ctx.TEXT().getText();
        return text.replace(/\\(.)/g, '$1');
    }
}

export function execute(code, path = undefined, context = undefined, debug = false) {
    if (path === undefined) path = process.cwd();
    if (context === undefined) context = new Map();
    
    const input = new antlr4.InputStream(code);
    const lexer = new RunaLexer(input);
    const tokens = new antlr4.CommonTokenStream(lexer);

    if (debug) {
        tokens.fill();
        for (let i = 0; i < tokens.tokens.length; i++) {
            console.log(`Token ${i}: Type=${RunaLexer.symbolicNames[tokens.tokens[i].type]}, Text=${JSON.stringify(tokens.tokens[i].text)}`);
        }
        console.log();
    }
    
    const parser = new RunaParser(tokens);
    const tree = parser.file();
    const interpreter = new RunaInterpreter(path, context);
    return interpreter.visit(tree);
}

export function executeFile(path, context = undefined, debug = false) {
    const code = fs.readFileSync(path, "utf8");
    return execute(code, path, context, debug);
}
