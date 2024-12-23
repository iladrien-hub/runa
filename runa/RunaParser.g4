parser grammar RunaParser;
options { tokenVocab=RunaLexer; }

file: importAsStatement* record* EOF;

importAsStatement: importStatement (IMPORT_AS IMPORT_IDENTIFIER)? IMPORT_NEWLINE;
importStatement: IMPORT IMPORT_PATH;

record: recordWeight? recordBlock+ NEWLINE?;
recordBlock
    : recordVariable
    | recordText
;
recordVariable: LBRACE VAR_IDENTIFIER RBRACE;
recordWeight: number COLON;
recordText: TEXT;

number: NUMBER;
