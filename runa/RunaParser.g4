parser grammar RunaParser;
options { tokenVocab=RunaLexer; }

file: importAsStatement* record* EOF;

importAsStatement: importStatement (IMPORT_AS IMPORT_IDENTIFIER)? IMPORT_NEWLINE;
importStatement: IMPORT IMPORT_PATH;

record: recordWeight? recordBlock+ NEWLINE?;
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
