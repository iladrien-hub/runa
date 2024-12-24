// Generated from runa/RunaParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import RunaParserListener from './RunaParserListener.js';
import RunaParserVisitor from './RunaParserVisitor.js';

const serializedATN = [4,1,20,80,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,0,
1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,1,0,1,1,1,1,1,1,3,1,38,8,1,1,1,1,1,1,
2,1,2,1,2,1,3,3,3,46,8,3,1,3,4,3,49,8,3,11,3,12,3,50,1,3,3,3,54,8,3,1,4,
1,4,1,4,3,4,59,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,0,77,0,23,1,
0,0,0,2,34,1,0,0,0,4,41,1,0,0,0,6,45,1,0,0,0,8,58,1,0,0,0,10,60,1,0,0,0,
12,64,1,0,0,0,14,67,1,0,0,0,16,69,1,0,0,0,18,77,1,0,0,0,20,22,3,2,1,0,21,
20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,29,1,0,0,0,25,23,
1,0,0,0,26,28,3,6,3,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,
0,0,0,30,32,1,0,0,0,31,29,1,0,0,0,32,33,5,0,0,1,33,1,1,0,0,0,34,37,3,4,2,
0,35,36,5,12,0,0,36,38,5,16,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,39,1,0,0,
0,39,40,5,14,0,0,40,3,1,0,0,0,41,42,5,1,0,0,42,43,5,15,0,0,43,5,1,0,0,0,
44,46,3,12,6,0,45,44,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,49,3,8,4,0,48,
47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,53,1,0,0,0,52,54,
5,7,0,0,53,52,1,0,0,0,53,54,1,0,0,0,54,7,1,0,0,0,55,59,3,10,5,0,56,59,3,
16,8,0,57,59,3,14,7,0,58,55,1,0,0,0,58,56,1,0,0,0,58,57,1,0,0,0,59,9,1,0,
0,0,60,61,5,3,0,0,61,62,5,9,0,0,62,63,5,11,0,0,63,11,1,0,0,0,64,65,3,18,
9,0,65,66,5,4,0,0,66,13,1,0,0,0,67,68,5,8,0,0,68,15,1,0,0,0,69,70,5,5,0,
0,70,71,5,2,0,0,71,72,5,18,0,0,72,73,5,17,0,0,73,74,5,18,0,0,74,75,5,19,
0,0,75,76,5,20,0,0,76,17,1,0,0,0,77,78,5,6,0,0,78,19,1,0,0,0,7,23,29,37,
45,50,53,58];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RunaParser extends antlr4.Parser {

    static grammarFileName = "RunaParser.g4";
    static literalNames = [ null, "'@import'", "'lora'", "'{'", null, "'<'", 
                            null, null, null, null, null, "'}'", "'as'", 
                            null, null, null, null, null, null, null, "'>'" ];
    static symbolicNames = [ null, "IMPORT", "LORA", "LBRACE", "COLON", 
                             "LANGLE", "NUMBER", "NEWLINE", "TEXT", "VAR_IDENTIFIER", 
                             "VAR_WS", "RBRACE", "IMPORT_AS", "IMPORT_WS", 
                             "IMPORT_NEWLINE", "IMPORT_PATH", "IMPORT_IDENTIFIER", 
                             "LORA_IDENTIFIER", "LORA_COLON", "LORA_NUMBER", 
                             "RANGLE" ];
    static ruleNames = [ "file", "importAsStatement", "importStatement", 
                         "record", "recordBlock", "recordVariable", "recordWeight", 
                         "recordText", "lora", "number" ];

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
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 20;
	            this.importAsStatement();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 360) !== 0)) {
	            this.state = 26;
	            this.record();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 32;
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
	        this.state = 34;
	        this.importStatement();
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 35;
	            this.match(RunaParser.IMPORT_AS);
	            this.state = 36;
	            this.match(RunaParser.IMPORT_IDENTIFIER);
	        }

	        this.state = 39;
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
	        this.state = 41;
	        this.match(RunaParser.IMPORT);
	        this.state = 42;
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



	record() {
	    let localctx = new RecordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RunaParser.RULE_record);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 44;
	            this.recordWeight();
	        }

	        this.state = 48; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 47;
	        		this.recordBlock();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 50; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 52;
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
	    this.enterRule(localctx, 8, RunaParser.RULE_recordBlock);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.recordVariable();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.lora();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 57;
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
	    this.enterRule(localctx, 10, RunaParser.RULE_recordVariable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(RunaParser.LBRACE);
	        this.state = 61;
	        this.match(RunaParser.VAR_IDENTIFIER);
	        this.state = 62;
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
	    this.enterRule(localctx, 12, RunaParser.RULE_recordWeight);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.number();
	        this.state = 65;
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
	    this.enterRule(localctx, 14, RunaParser.RULE_recordText);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
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



	lora() {
	    let localctx = new LoraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RunaParser.RULE_lora);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(RunaParser.LANGLE);
	        this.state = 70;
	        this.match(RunaParser.LORA);
	        this.state = 71;
	        this.match(RunaParser.LORA_COLON);
	        this.state = 72;
	        this.match(RunaParser.LORA_IDENTIFIER);
	        this.state = 73;
	        this.match(RunaParser.LORA_COLON);
	        this.state = 74;
	        this.match(RunaParser.LORA_NUMBER);
	        this.state = 75;
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
	    this.enterRule(localctx, 18, RunaParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
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


}

RunaParser.EOF = antlr4.Token.EOF;
RunaParser.IMPORT = 1;
RunaParser.LORA = 2;
RunaParser.LBRACE = 3;
RunaParser.COLON = 4;
RunaParser.LANGLE = 5;
RunaParser.NUMBER = 6;
RunaParser.NEWLINE = 7;
RunaParser.TEXT = 8;
RunaParser.VAR_IDENTIFIER = 9;
RunaParser.VAR_WS = 10;
RunaParser.RBRACE = 11;
RunaParser.IMPORT_AS = 12;
RunaParser.IMPORT_WS = 13;
RunaParser.IMPORT_NEWLINE = 14;
RunaParser.IMPORT_PATH = 15;
RunaParser.IMPORT_IDENTIFIER = 16;
RunaParser.LORA_IDENTIFIER = 17;
RunaParser.LORA_COLON = 18;
RunaParser.LORA_NUMBER = 19;
RunaParser.RANGLE = 20;

RunaParser.RULE_file = 0;
RunaParser.RULE_importAsStatement = 1;
RunaParser.RULE_importStatement = 2;
RunaParser.RULE_record = 3;
RunaParser.RULE_recordBlock = 4;
RunaParser.RULE_recordVariable = 5;
RunaParser.RULE_recordWeight = 6;
RunaParser.RULE_recordText = 7;
RunaParser.RULE_lora = 8;
RunaParser.RULE_number = 9;

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

	TEXT() {
	    return this.getToken(RunaParser.TEXT, 0);
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




RunaParser.FileContext = FileContext; 
RunaParser.ImportAsStatementContext = ImportAsStatementContext; 
RunaParser.ImportStatementContext = ImportStatementContext; 
RunaParser.RecordContext = RecordContext; 
RunaParser.RecordBlockContext = RecordBlockContext; 
RunaParser.RecordVariableContext = RecordVariableContext; 
RunaParser.RecordWeightContext = RecordWeightContext; 
RunaParser.RecordTextContext = RecordTextContext; 
RunaParser.LoraContext = LoraContext; 
RunaParser.NumberContext = NumberContext; 
