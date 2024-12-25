// Generated from runa/RunaParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import RunaParserListener from './RunaParserListener.js';
import RunaParserVisitor from './RunaParserVisitor.js';

const serializedATN = [4,1,26,96,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,5,0,26,8,
0,10,0,12,0,29,9,0,1,0,5,0,32,8,0,10,0,12,0,35,9,0,1,0,5,0,38,8,0,10,0,12,
0,41,9,0,1,0,1,0,1,1,1,1,1,1,3,1,48,8,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,
1,3,1,4,3,4,60,8,4,1,4,4,4,63,8,4,11,4,12,4,64,1,4,3,4,68,8,4,1,5,1,5,1,
5,3,5,73,8,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,
1,9,1,9,1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,
0,92,0,27,1,0,0,0,2,44,1,0,0,0,4,51,1,0,0,0,6,54,1,0,0,0,8,59,1,0,0,0,10,
72,1,0,0,0,12,74,1,0,0,0,14,78,1,0,0,0,16,81,1,0,0,0,18,83,1,0,0,0,20,91,
1,0,0,0,22,93,1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,
0,0,0,27,28,1,0,0,0,28,33,1,0,0,0,29,27,1,0,0,0,30,32,3,6,3,0,31,30,1,0,
0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,39,1,0,0,0,35,33,1,0,0,
0,36,38,3,8,4,0,37,36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,
40,42,1,0,0,0,41,39,1,0,0,0,42,43,5,0,0,1,43,1,1,0,0,0,44,47,3,4,2,0,45,
46,5,14,0,0,46,48,5,18,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,
50,5,16,0,0,50,3,1,0,0,0,51,52,5,1,0,0,52,53,5,17,0,0,53,5,1,0,0,0,54,55,
5,2,0,0,55,56,5,25,0,0,56,57,5,24,0,0,57,7,1,0,0,0,58,60,3,14,7,0,59,58,
1,0,0,0,59,60,1,0,0,0,60,62,1,0,0,0,61,63,3,10,5,0,62,61,1,0,0,0,63,64,1,
0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,67,1,0,0,0,66,68,5,9,0,0,67,66,1,0,
0,0,67,68,1,0,0,0,68,9,1,0,0,0,69,73,3,12,6,0,70,73,3,18,9,0,71,73,3,16,
8,0,72,69,1,0,0,0,72,70,1,0,0,0,72,71,1,0,0,0,73,11,1,0,0,0,74,75,5,4,0,
0,75,76,5,11,0,0,76,77,5,13,0,0,77,13,1,0,0,0,78,79,3,20,10,0,79,80,5,5,
0,0,80,15,1,0,0,0,81,82,3,22,11,0,82,17,1,0,0,0,83,84,5,6,0,0,84,85,5,3,
0,0,85,86,5,20,0,0,86,87,5,19,0,0,87,88,5,20,0,0,88,89,5,21,0,0,89,90,5,
22,0,0,90,19,1,0,0,0,91,92,5,7,0,0,92,21,1,0,0,0,93,94,5,10,0,0,94,23,1,
0,0,0,8,27,33,39,47,59,64,67,72];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RunaParser extends antlr4.Parser {

    static grammarFileName = "RunaParser.g4";
    static literalNames = [ null, "'@import'", "'@use'", "'lora'", "'{'", 
                            null, "'<'", null, null, null, null, null, null, 
                            "'}'", "'as'", null, null, null, null, null, 
                            null, null, "'>'" ];
    static symbolicNames = [ null, "IMPORT", "USE", "LORA", "LBRACE", "COLON", 
                             "LANGLE", "NUMBER", "COMMENT", "NEWLINE", "TEXT", 
                             "VAR_IDENTIFIER", "VAR_WS", "RBRACE", "IMPORT_AS", 
                             "IMPORT_WS", "IMPORT_NEWLINE", "IMPORT_PATH", 
                             "IMPORT_IDENTIFIER", "LORA_IDENTIFIER", "LORA_COLON", 
                             "LORA_NUMBER", "RANGLE", "USE_WS", "USE_NEWLINE", 
                             "USE_IDENTIFIER", "USE_NAME" ];
    static ruleNames = [ "file", "importAsStatement", "importStatement", 
                         "useStatement", "record", "recordBlock", "recordVariable", 
                         "recordWeight", "recordText", "lora", "number", 
                         "text" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RunaParser.ruleNames;
        this.literalNames = RunaParser.literalNames;
        this.symbolicNames = RunaParser.symbolicNames;
    }



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RunaParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 24;
	            this.importAsStatement();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 30;
	            this.useStatement();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1232) !== 0)) {
	            this.state = 36;
	            this.record();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 42;
	        this.match(RunaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importAsStatement() {
	    let localctx = new ImportAsStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RunaParser.RULE_importAsStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.importStatement();
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 45;
	            this.match(RunaParser.IMPORT_AS);
	            this.state = 46;
	            this.match(RunaParser.IMPORT_IDENTIFIER);
	        }

	        this.state = 49;
	        this.match(RunaParser.IMPORT_NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importStatement() {
	    let localctx = new ImportStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RunaParser.RULE_importStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(RunaParser.IMPORT);
	        this.state = 52;
	        this.match(RunaParser.IMPORT_PATH);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	useStatement() {
	    let localctx = new UseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RunaParser.RULE_useStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(RunaParser.USE);
	        this.state = 55;
	        this.match(RunaParser.USE_IDENTIFIER);
	        this.state = 56;
	        this.match(RunaParser.USE_NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	record() {
	    let localctx = new RecordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RunaParser.RULE_record);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 58;
	            this.recordWeight();
	        }

	        this.state = 62; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 61;
	        		this.recordBlock();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 64; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 66;
	            this.match(RunaParser.NEWLINE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	recordBlock() {
	    let localctx = new RecordBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RunaParser.RULE_recordBlock);
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.recordVariable();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.lora();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 71;
	            this.recordText();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	recordVariable() {
	    let localctx = new RecordVariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RunaParser.RULE_recordVariable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(RunaParser.LBRACE);
	        this.state = 75;
	        this.match(RunaParser.VAR_IDENTIFIER);
	        this.state = 76;
	        this.match(RunaParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	recordWeight() {
	    let localctx = new RecordWeightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RunaParser.RULE_recordWeight);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.number();
	        this.state = 79;
	        this.match(RunaParser.COLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	recordText() {
	    let localctx = new RecordTextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RunaParser.RULE_recordText);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.text();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lora() {
	    let localctx = new LoraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, RunaParser.RULE_lora);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(RunaParser.LANGLE);
	        this.state = 84;
	        this.match(RunaParser.LORA);
	        this.state = 85;
	        this.match(RunaParser.LORA_COLON);
	        this.state = 86;
	        this.match(RunaParser.LORA_IDENTIFIER);
	        this.state = 87;
	        this.match(RunaParser.LORA_COLON);
	        this.state = 88;
	        this.match(RunaParser.LORA_NUMBER);
	        this.state = 89;
	        this.match(RunaParser.RANGLE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, RunaParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(RunaParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, RunaParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(RunaParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RunaParser.EOF = antlr4.Token.EOF;
RunaParser.IMPORT = 1;
RunaParser.USE = 2;
RunaParser.LORA = 3;
RunaParser.LBRACE = 4;
RunaParser.COLON = 5;
RunaParser.LANGLE = 6;
RunaParser.NUMBER = 7;
RunaParser.COMMENT = 8;
RunaParser.NEWLINE = 9;
RunaParser.TEXT = 10;
RunaParser.VAR_IDENTIFIER = 11;
RunaParser.VAR_WS = 12;
RunaParser.RBRACE = 13;
RunaParser.IMPORT_AS = 14;
RunaParser.IMPORT_WS = 15;
RunaParser.IMPORT_NEWLINE = 16;
RunaParser.IMPORT_PATH = 17;
RunaParser.IMPORT_IDENTIFIER = 18;
RunaParser.LORA_IDENTIFIER = 19;
RunaParser.LORA_COLON = 20;
RunaParser.LORA_NUMBER = 21;
RunaParser.RANGLE = 22;
RunaParser.USE_WS = 23;
RunaParser.USE_NEWLINE = 24;
RunaParser.USE_IDENTIFIER = 25;
RunaParser.USE_NAME = 26;

RunaParser.RULE_file = 0;
RunaParser.RULE_importAsStatement = 1;
RunaParser.RULE_importStatement = 2;
RunaParser.RULE_useStatement = 3;
RunaParser.RULE_record = 4;
RunaParser.RULE_recordBlock = 5;
RunaParser.RULE_recordVariable = 6;
RunaParser.RULE_recordWeight = 7;
RunaParser.RULE_recordText = 8;
RunaParser.RULE_lora = 9;
RunaParser.RULE_number = 10;
RunaParser.RULE_text = 11;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_file;
    }

	EOF() {
	    return this.getToken(RunaParser.EOF, 0);
	};

	importAsStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportAsStatementContext);
	    } else {
	        return this.getTypedRuleContext(ImportAsStatementContext,i);
	    }
	};

	useStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UseStatementContext);
	    } else {
	        return this.getTypedRuleContext(UseStatementContext,i);
	    }
	};

	record = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RecordContext);
	    } else {
	        return this.getTypedRuleContext(RecordContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitFile(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportAsStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_importAsStatement;
    }

	importStatement() {
	    return this.getTypedRuleContext(ImportStatementContext,0);
	};

	IMPORT_NEWLINE() {
	    return this.getToken(RunaParser.IMPORT_NEWLINE, 0);
	};

	IMPORT_AS() {
	    return this.getToken(RunaParser.IMPORT_AS, 0);
	};

	IMPORT_IDENTIFIER() {
	    return this.getToken(RunaParser.IMPORT_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterImportAsStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitImportAsStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitImportAsStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_importStatement;
    }

	IMPORT() {
	    return this.getToken(RunaParser.IMPORT, 0);
	};

	IMPORT_PATH() {
	    return this.getToken(RunaParser.IMPORT_PATH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterImportStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitImportStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitImportStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UseStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_useStatement;
    }

	USE() {
	    return this.getToken(RunaParser.USE, 0);
	};

	USE_IDENTIFIER() {
	    return this.getToken(RunaParser.USE_IDENTIFIER, 0);
	};

	USE_NEWLINE() {
	    return this.getToken(RunaParser.USE_NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterUseStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitUseStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitUseStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RecordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_record;
    }

	recordWeight() {
	    return this.getTypedRuleContext(RecordWeightContext,0);
	};

	recordBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RecordBlockContext);
	    } else {
	        return this.getTypedRuleContext(RecordBlockContext,i);
	    }
	};

	NEWLINE() {
	    return this.getToken(RunaParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterRecord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitRecord(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitRecord(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RecordBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_recordBlock;
    }

	recordVariable() {
	    return this.getTypedRuleContext(RecordVariableContext,0);
	};

	lora() {
	    return this.getTypedRuleContext(LoraContext,0);
	};

	recordText() {
	    return this.getTypedRuleContext(RecordTextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterRecordBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitRecordBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitRecordBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RecordVariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_recordVariable;
    }

	LBRACE() {
	    return this.getToken(RunaParser.LBRACE, 0);
	};

	VAR_IDENTIFIER() {
	    return this.getToken(RunaParser.VAR_IDENTIFIER, 0);
	};

	RBRACE() {
	    return this.getToken(RunaParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterRecordVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitRecordVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitRecordVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RecordWeightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_recordWeight;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	COLON() {
	    return this.getToken(RunaParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterRecordWeight(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitRecordWeight(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitRecordWeight(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RecordTextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_recordText;
    }

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterRecordText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitRecordText(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitRecordText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LoraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_lora;
    }

	LANGLE() {
	    return this.getToken(RunaParser.LANGLE, 0);
	};

	LORA() {
	    return this.getToken(RunaParser.LORA, 0);
	};

	LORA_COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RunaParser.LORA_COLON);
	    } else {
	        return this.getToken(RunaParser.LORA_COLON, i);
	    }
	};


	LORA_IDENTIFIER() {
	    return this.getToken(RunaParser.LORA_IDENTIFIER, 0);
	};

	LORA_NUMBER() {
	    return this.getToken(RunaParser.LORA_NUMBER, 0);
	};

	RANGLE() {
	    return this.getToken(RunaParser.RANGLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterLora(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitLora(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitLora(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(RunaParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_text;
    }

	TEXT() {
	    return this.getToken(RunaParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitText(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RunaParser.FileContext = FileContext; 
RunaParser.ImportAsStatementContext = ImportAsStatementContext; 
RunaParser.ImportStatementContext = ImportStatementContext; 
RunaParser.UseStatementContext = UseStatementContext; 
RunaParser.RecordContext = RecordContext; 
RunaParser.RecordBlockContext = RecordBlockContext; 
RunaParser.RecordVariableContext = RecordVariableContext; 
RunaParser.RecordWeightContext = RecordWeightContext; 
RunaParser.RecordTextContext = RecordTextContext; 
RunaParser.LoraContext = LoraContext; 
RunaParser.NumberContext = NumberContext; 
RunaParser.TextContext = TextContext; 
