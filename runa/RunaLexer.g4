lexer grammar RunaLexer;

// Keywords
IMPORT: '@import' -> pushMode(IMPORT_MODE);
LORA: 'lora' -> pushMode(LORA_MODE);

// Symbols
LBRACE: '{' -> pushMode(VARIABLE);
COLON: ':';
LANGLE: '<';

// Fragments for common character patterns
fragment LETTER: [a-zA-Z];
fragment DIGIT: [0-9];
fragment WHITESPACE: [ \t];
fragment IDENTIFIER_CHAR: LETTER | DIGIT | '_';
fragment INTEGER: DIGIT+;
fragment FLOAT: DIGIT* '.' DIGIT+;
fragment ESCAPED_CHAR: '\\' [\\{}<>@:/];

NUMBER: INTEGER | FLOAT;

// Comments
COMMENT: WHITESPACE* '//' ~[\r\n]* (NEWLINE | EOF) -> skip;

// Whitespace and newlines
NEWLINE: WHITESPACE* ('\r'? '\n' | '\r')+ -> skip ;
WS: WHITESPACE+ -> type(TEXT);

// Text content - anything except special characters
TEXT: (ESCAPED_CHAR | ~[{}<>\r\n@:/ \\])+ ;

// Mode for handling variable interpolation
mode VARIABLE;
VAR_IDENTIFIER: LETTER IDENTIFIER_CHAR*;
VAR_WS: WHITESPACE+ -> skip;
RBRACE: '}' -> popMode;

// Mode for handling imports
mode IMPORT_MODE;
// Keywords
IMPORT_AS: 'as';

IMPORT_WS: [ \t]+ -> skip;
IMPORT_NEWLINE: NEWLINE -> popMode;

fragment IMPORT_PATH_PART: [a-zA-Z0-9_-]+ | '.' | '..';

IMPORT_PATH: (IMPORT_PATH_PART '/')+ IMPORT_PATH_PART;
IMPORT_IDENTIFIER: LETTER IDENTIFIER_CHAR*;

// Mode for handling lora
mode LORA_MODE;
LORA_IDENTIFIER: (IDENTIFIER_CHAR | '-')+;
LORA_COLON: ':';
LORA_NUMBER: NUMBER;
RANGLE: '>' -> popMode;
