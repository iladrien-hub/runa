parser grammar RunaParser;
options { tokenVocab=RunaLexer; }

file: NEWLINE* importStatement* useStatement* record* NEWLINE* EOF;

importStatement: IMPORT importPathPart importWithPart? importAsPart? IMPORT_NEWLINE;
importAsPart: IMPORT_AS IMPORT_IDENTIFIER;
importPathPart: IMPORT_PATH;
importWithPart: IMPORT_WITH IMPORT_WITH_LBRACE importWithVariables IMPORT_WITH_RBRACE;
importWithVariables: importWithVariablePart (IMPORT_WITH_COMMA importWithVariablePart)*;
importWithVariablePart: IMPORT_WITH_IDENTIFIER IMPORT_WITH_COLON IMPORT_WITH_VALUE;

useStatement: USE USE_IDENTIFIER USE_NEWLINE;

record: recordWeight? recordBlock+ (NEWLINE | EOF);
recordBlock
    : recordVariable
    | lora
    | recordText
    ;
recordVariable
    : LBRACE VAR_IDENTIFIER RBRACE
    ;
recordWeight
    : number COLON
    ;
recordText
    : text
    ;
lora
    : LANGLE LORA LORA_COLON LORA_IDENTIFIER LORA_COLON LORA_NUMBER RANGLE
    ;

number: NUMBER;
text: TEXT;
