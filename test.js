import { execute, executeFile } from './index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe('Runa Interpreter', () => {
    test('basic text record', () => {
        const code = `
            Hello World
        `;
        const result = execute(code);
        expect(result.text).toBe('Hello World');
        expect(result.loras.size).toBe(0);
    });

    test('weighted records', () => {
        const code = `
            9:High weight\n
            Low weight
        `;
        // Run multiple times to ensure weighted randomization works
        const results = new Array(100).fill(0).map(() => execute(code));
        const highWeightCount = results.filter(r => r.text === 'High weight').length;
        
        // With weights 9:1, expect roughly 90% high weight
        expect(highWeightCount).toBeGreaterThan(80);
    });

    test('variables from context', () => {
        const code = `
            @use test
            { test }
        `;
        const context = new Map([['test', 'Context value']]);
        const result = execute(code, undefined, context);
        expect(result.text).toBe('Context value');
    });

    test('lora definitions', () => {
        const code = `
            Test <lora:test:0.7>
        `;
        const result = execute(code);
        expect(result.text).toBe('Test');
        expect(result.loras.get('test').value).toBe(0.7);
    });

    test('import statement', () => {
        const code = `
            @import ./examples/basic
            { basic }
        `;
        const result = execute(code, path.join(__dirname, 'test.runa'));
        expect([
            "This is a basic example with no weights.",
            "This is another line of text."
        ]).toContain(result.text);
    });

    test('import as statement', () => {
        const code = `
            @import ./examples/basic as var
            {var}
        `;
        const result = execute(code, path.join(__dirname, 'test.runa'));
        expect([
            "This is a basic example with no weights.",
            "This is another line of text."
        ]).toContain(result.text);
    });

    test('escaped characters in text', () => {
        const code = `
            Test colon\\: Hello World
        `;
        const result = execute(code);
        expect(result.text).toBe('Test colon: Hello World');
    });

    test('consecutive variables', () => {
        const code = `
            @use first
            @use second
            {first}{second}
        `;
        const context = new Map([
            ['first', 'Hello'],
            ['second', 'World']
        ]);
        const result = execute(code, undefined, context);
        expect(result.text).toBe('HelloWorld');
    });

    test('lora inheritance from variables', () => {
        const code = `
            @use contextValue
            {contextValue}
        `;
        const context = new Map([
            ['contextValue', 'Test']
        ]);
        const result = execute(code, undefined, context);
        expect(result.text).toBe('Test');
    });

    test('error on missing import', () => {
        const code = `
            @import ./non-existent
            Test
        `;
        expect(() => {
            execute(code, path.join(__dirname, 'test.runa'));
        }).toThrow('Could not find module');
    });

    test('context import with', () => {
        // Without context
        let code = `
            @import ./examples/contextSimple
            @use name
            My name is {name}, yours is {contextSimple}
        `;
        let result = execute(code, path.join(__dirname, 'test.runa'));
        expect(result.text).toBe('My name is , yours is');

        // With default context
        code = `
            @import ./examples/contextSimple
            @use name
            My name is {name}, yours is {contextSimple}
        `;
        result = execute(code, path.join(__dirname, 'test.runa'), new Map([['name', 'John']]));
        expect(result.text).toBe('My name is John, yours is John');

        // With override context
        code = `
            @import ./examples/contextSimple with { name: "Jennifer" }
            @use name
            My name is {name}, yours is {contextSimple}
        `;
        result = execute(code, path.join(__dirname, 'test.runa'), new Map([['name', 'John']]));
        expect(result.text).toBe('My name is John, yours is Jennifer');

    });
});


