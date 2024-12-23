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

            if (fs.existsSync(resolvedPath) && fs.existsSync(`${resolvedPath}/__index__.runa`)) {
                fullPath = `${resolvedPath}/__index__.runa`;
            } else if (fs.existsSync(`${resolvedPath}.runa`)) {
                fullPath = `${resolvedPath}.runa`;
            } else {
                fullPath = resolvedPath;
            }

            if (!fs.existsSync(fullPath)) {
                throw new Error(`Could not find module at path: ${path}`);
            }

            this.variables.set(alias, executeFile(fullPath));
        }

        let currentWeight = 0;
        const selectedRecord = records.find(record => {
            currentWeight += record.weight;
            return randomValue <= currentWeight;
        });

        let result = []
        for (const block of selectedRecord.children) {
            switch (block.type) {
                case "text":
                    result.push(block.text);
                    break;
                case "variable":
                    result.push(this.variables.get(block.name));
                    break;
            }
        }

        return result.map(r => r.trim()).join(" ");

        // return {
        //     type: "file",
        //     imports: imports,
        //     records: records,
        // };
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
            text: ctx.getText(),
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
}

export function execute(code, path = undefined) {
    if (path === undefined) {
        path = process.cwd();
    }

    const input = new antlr4.InputStream(code);
    const lexer = new RunaLexer(input);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new RunaParser(tokens);
    const tree = parser.file();

    const interpreter = new RunaInterpreter(path);
    return interpreter.visit(tree);
}

export function executeFile(path) {
    const code = fs.readFileSync(path, "utf8");
    return execute(code, path);
}

