import antlr4 from "antlr4";
import RunaLexer from "./runa/JavaScript/RunaLexer.js";
import RunaParser from "./runa/JavaScript/RunaParser.js";
import RunaParserVisitor from "./runa/JavaScript/RunaParserVisitor.js";

import fs from "fs";
import path from "path";

class RunaInterpreter extends RunaParserVisitor {

    constructor(filePath) {
        super();
        this.variables = new Map();
        this.path = filePath;
    }

    visitFile(ctx) {
        const data = this.visitChildren(ctx).filter(d => d);

        const imports = data.filter(d => d.type == "import" || d.type == "importAs");   
        const records = data.filter(d => d.type == "record");

        if (records.length == 0) {
            return "";
        }

        // Select a random record based on weights
        const totalWeight = records.reduce((sum, record) => sum + record.weight, 0);
        const randomValue = Math.random() * totalWeight;
        
        for (const import_ of imports) {
            const modulePath = import_.path;
            const alias = import_.alias ?? modulePath.split("/").pop();

            let fullPath;
            const basePath = path.dirname(this.path);
            const resolvedPath = path.join(basePath, modulePath);

            const variants = [
                path.join(resolvedPath, '__index__.runa'),
                `${resolvedPath}.runa`,
                resolvedPath,
            ].filter(fs.existsSync);

            if (variants.length == 0) {
                throw new Error(`Could not find module at path: ${resolvedPath}`);
            } else if (variants.length > 1) {
                throw new Error(`Ambiguous module at path: ${resolvedPath}`);
            }

            this.variables.set(alias, executeFile(fullPath));
        }

        let currentWeight = 0;
        const selectedRecord = records.find(record => {
            currentWeight += record.weight;
            return randomValue <= currentWeight;
        });

        let result = []
        let loras = new Map();

        for (const block of selectedRecord.children) {
            switch (block.type) {
                case "text":
                    result.push(block.text);
                    break;
                case "variable":
                    const varData = this.variables.get(block.name);
                    for (const lora of varData.loras.values()) {
                        if (!loras.has(lora.name) || loras.get(lora.name).value < lora.value) {
                            loras.set(lora.name, lora);
                        }
                    }
                    result.push(varData.text);
                    break;
                case "lora":
                    if (!loras.has(block.name) || loras.get(block.name).value < block.value) {
                        loras.set(block.name, block);
                    }
                    break;
            }
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

        if (ctx.children.length == 2) {
            return import_
        }

        return {
            type: "importAs",
            path: import_.path,
            alias: ctx.children[2].getText(),
        }
    }

    visitRecord(ctx) {
        const data = this.visitChildren(ctx).filter(d => d);

        let weight = 1;
        if (data[0].type == "weight") {
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

export function execute(code, path = undefined, debug = false) {
    if (path === undefined) {
        path = process.cwd();
    }

    const input = new antlr4.InputStream(code);
    const lexer = new RunaLexer(input);
    const tokens = new antlr4.CommonTokenStream(lexer);

    if (debug) {
        // Print generated tokens for debugging
        tokens.fill();
        for (let i = 0; i < tokens.tokens.length; i++) {
            console.log(`Token ${i}: Type=${RunaLexer.symbolicNames[tokens.tokens[i].type]}, Text=${JSON.stringify(tokens.tokens[i].text)}`);
        }
        console.log();
    }
    
    const parser = new RunaParser(tokens);
    const tree = parser.file();

    const interpreter = new RunaInterpreter(path);
    return interpreter.visit(tree);
}

export function executeFile(path, debug = false) {
    const code = fs.readFileSync(path, "utf8");
    return execute(code, path, debug);
}

