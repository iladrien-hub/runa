lexer grammar RunaLexer;

// Keywords
IMPORT: '@import' -> pushMode(IMPORT_MODE);

// Symbols
LBRACE: '{' -> pushMode(VARIABLE);
RBRACE: '}';
COLON: ':';

// Fragments for common character patterns
fragment LETTER: [a-zA-Z];
fragment DIGIT: [0-9];
fragment WHITESPACE: [ \t];
fragment IDENTIFIER_CHAR: LETTER | DIGIT | '_';
fragment INTEGER: DIGIT+;
fragment FLOAT: DIGIT* '.' DIGIT+;

NUMBER: INTEGER | FLOAT;

// Whitespace and newlines
NEWLINE: ('\r'? '\n' | '\r')+ ;
WS: [ \t]+ -> skip;

// Text content - anything except special characters
TEXT: ~[{}\r\n@:]+ ;

// Mode for handling variable interpolation
mode VARIABLE;
VAR_IDENTIFIER: LETTER IDENTIFIER_CHAR* -> popMode;
VAR_WS: [ \t]+ -> skip;

// Mode for handling imports
mode IMPORT_MODE;
// Keywords
IMPORT_AS: 'as';

IMPORT_WS: [ \t]+ -> skip;
IMPORT_NEWLINE: NEWLINE -> popMode;

fragment IMPORT_PATH_PART: [a-zA-Z0-9_-]+ | '.' | '..';

IMPORT_PATH: (IMPORT_PATH_PART '/')+ IMPORT_PATH_PART;
IMPORT_IDENTIFIER: LETTER IDENTIFIER_CHAR*;
