// Generated from runa/RunaParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import RunaParserListener from './RunaParserListener.js';
import RunaParserVisitor from './RunaParserVisitor.js';

const serializedATN = [4,1,35,137,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,5,0,40,
8,0,10,0,12,0,43,9,0,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,5,0,52,8,0,10,0,
12,0,55,9,0,1,0,5,0,58,8,0,10,0,12,0,61,9,0,1,0,1,0,1,1,1,1,1,1,3,1,68,8,
1,1,1,3,1,71,8,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,
1,5,5,5,88,8,5,10,5,12,5,91,9,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,3,8,
102,8,8,1,8,4,8,105,8,8,11,8,12,8,106,1,8,1,8,1,9,1,9,1,9,3,9,114,8,9,1,
10,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,14,1,14,1,15,1,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,0,1,1,1,10,10,132,0,35,1,0,0,0,2,64,1,0,0,0,4,74,1,0,0,0,6,77,
1,0,0,0,8,79,1,0,0,0,10,84,1,0,0,0,12,92,1,0,0,0,14,96,1,0,0,0,16,101,1,
0,0,0,18,113,1,0,0,0,20,115,1,0,0,0,22,119,1,0,0,0,24,122,1,0,0,0,26,124,
1,0,0,0,28,132,1,0,0,0,30,134,1,0,0,0,32,34,5,10,0,0,33,32,1,0,0,0,34,37,
1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,41,1,0,0,0,37,35,1,0,0,0,38,40,3,
2,1,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,47,1,0,
0,0,43,41,1,0,0,0,44,46,3,14,7,0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,
0,47,48,1,0,0,0,48,53,1,0,0,0,49,47,1,0,0,0,50,52,3,16,8,0,51,50,1,0,0,0,
52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,59,1,0,0,0,55,53,1,0,0,0,56,
58,5,10,0,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,62,
1,0,0,0,61,59,1,0,0,0,62,63,5,0,0,1,63,1,1,0,0,0,64,65,5,1,0,0,65,67,3,6,
3,0,66,68,3,8,4,0,67,66,1,0,0,0,67,68,1,0,0,0,68,70,1,0,0,0,69,71,3,4,2,
0,70,69,1,0,0,0,70,71,1,0,0,0,71,72,1,0,0,0,72,73,5,18,0,0,73,3,1,0,0,0,
74,75,5,15,0,0,75,76,5,20,0,0,76,5,1,0,0,0,77,78,5,19,0,0,78,7,1,0,0,0,79,
80,5,16,0,0,80,81,5,23,0,0,81,82,3,10,5,0,82,83,5,24,0,0,83,9,1,0,0,0,84,
89,3,12,6,0,85,86,5,22,0,0,86,88,3,12,6,0,87,85,1,0,0,0,88,91,1,0,0,0,89,
87,1,0,0,0,89,90,1,0,0,0,90,11,1,0,0,0,91,89,1,0,0,0,92,93,5,27,0,0,93,94,
5,21,0,0,94,95,5,25,0,0,95,13,1,0,0,0,96,97,5,2,0,0,97,98,5,34,0,0,98,99,
5,33,0,0,99,15,1,0,0,0,100,102,3,22,11,0,101,100,1,0,0,0,101,102,1,0,0,0,
102,104,1,0,0,0,103,105,3,18,9,0,104,103,1,0,0,0,105,106,1,0,0,0,106,104,
1,0,0,0,106,107,1,0,0,0,107,108,1,0,0,0,108,109,7,0,0,0,109,17,1,0,0,0,110,
114,3,20,10,0,111,114,3,26,13,0,112,114,3,24,12,0,113,110,1,0,0,0,113,111,
1,0,0,0,113,112,1,0,0,0,114,19,1,0,0,0,115,116,5,4,0,0,116,117,5,12,0,0,
117,118,5,14,0,0,118,21,1,0,0,0,119,120,3,28,14,0,120,121,5,5,0,0,121,23,
1,0,0,0,122,123,3,30,15,0,123,25,1,0,0,0,124,125,5,6,0,0,125,126,5,3,0,0,
126,127,5,29,0,0,127,128,5,28,0,0,128,129,5,29,0,0,129,130,5,30,0,0,130,
131,5,31,0,0,131,27,1,0,0,0,132,133,5,7,0,0,133,29,1,0,0,0,134,135,5,11,
0,0,135,31,1,0,0,0,11,35,41,47,53,59,67,70,89,101,106,113];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RunaParser extends antlr4.Parser {

    static grammarFileName = "RunaParser.g4";
    static literalNames = [ null, "'@import'", "'@use'", "'lora'", null, 
                            null, "'<'", null, null, null, null, null, null, 
                            null, null, "'as'", "'with'", null, null, null, 
                            null, null, "','", null, null, null, null, null, 
                            null, null, null, "'>'" ];
    static symbolicNames = [ null, "IMPORT", "USE", "LORA", "LBRACE", "COLON", 
                             "LANGLE", "NUMBER", "BOOLEAN", "COMMENT", "NEWLINE", 
                             "TEXT", "VAR_IDENTIFIER", "VAR_WS", "RBRACE", 
                             "IMPORT_AS", "IMPORT_WITH", "IMPORT_WS", "IMPORT_NEWLINE", 
                             "IMPORT_PATH", "IMPORT_IDENTIFIER", "IMPORT_WITH_COLON", 
                             "IMPORT_WITH_COMMA", "IMPORT_WITH_LBRACE", 
                             "IMPORT_WITH_RBRACE", "IMPORT_WITH_VALUE", 
                             "IMPORT_WITH_WS", "IMPORT_WITH_IDENTIFIER", 
                             "LORA_IDENTIFIER", "LORA_COLON", "LORA_NUMBER", 
                             "RANGLE", "USE_WS", "USE_NEWLINE", "USE_IDENTIFIER", 
                             "USE_NAME" ];
    static ruleNames = [ "file", "importStatement", "importAsPart", "importPathPart", 
                         "importWithPart", "importWithVariables", "importWithVariablePart", 
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
	        this.state = 35;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 32;
	                this.match(RunaParser.NEWLINE); 
	            }
	            this.state = 37;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 38;
	            this.importStatement();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 44;
	            this.useStatement();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2256) !== 0)) {
	            this.state = 50;
	            this.record();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 56;
	            this.match(RunaParser.NEWLINE);
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 62;
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



	importStatement() {
	    let localctx = new ImportStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RunaParser.RULE_importStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(RunaParser.IMPORT);
	        this.state = 65;
	        this.importPathPart();
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 66;
	            this.importWithPart();
	        }

	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 69;
	            this.importAsPart();
	        }

	        this.state = 72;
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



	importAsPart() {
	    let localctx = new ImportAsPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RunaParser.RULE_importAsPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(RunaParser.IMPORT_AS);
	        this.state = 75;
	        this.match(RunaParser.IMPORT_IDENTIFIER);
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



	importPathPart() {
	    let localctx = new ImportPathPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RunaParser.RULE_importPathPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
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



	importWithPart() {
	    let localctx = new ImportWithPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RunaParser.RULE_importWithPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(RunaParser.IMPORT_WITH);
	        this.state = 80;
	        this.match(RunaParser.IMPORT_WITH_LBRACE);
	        this.state = 81;
	        this.importWithVariables();
	        this.state = 82;
	        this.match(RunaParser.IMPORT_WITH_RBRACE);
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



	importWithVariables() {
	    let localctx = new ImportWithVariablesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RunaParser.RULE_importWithVariables);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.importWithVariablePart();
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 85;
	            this.match(RunaParser.IMPORT_WITH_COMMA);
	            this.state = 86;
	            this.importWithVariablePart();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	importWithVariablePart() {
	    let localctx = new ImportWithVariablePartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RunaParser.RULE_importWithVariablePart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(RunaParser.IMPORT_WITH_IDENTIFIER);
	        this.state = 93;
	        this.match(RunaParser.IMPORT_WITH_COLON);
	        this.state = 94;
	        this.match(RunaParser.IMPORT_WITH_VALUE);
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
	    this.enterRule(localctx, 14, RunaParser.RULE_useStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(RunaParser.USE);
	        this.state = 97;
	        this.match(RunaParser.USE_IDENTIFIER);
	        this.state = 98;
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
	    this.enterRule(localctx, 16, RunaParser.RULE_record);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 100;
	            this.recordWeight();
	        }

	        this.state = 104; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 103;
	            this.recordBlock();
	            this.state = 106; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2128) !== 0));
	        this.state = 108;
	        _la = this._input.LA(1);
	        if(!(_la===-1 || _la===10)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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
	    this.enterRule(localctx, 18, RunaParser.RULE_recordBlock);
	    try {
	        this.state = 113;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.recordVariable();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 111;
	            this.lora();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 112;
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
	    this.enterRule(localctx, 20, RunaParser.RULE_recordVariable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(RunaParser.LBRACE);
	        this.state = 116;
	        this.match(RunaParser.VAR_IDENTIFIER);
	        this.state = 117;
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
	    this.enterRule(localctx, 22, RunaParser.RULE_recordWeight);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.number();
	        this.state = 120;
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
	    this.enterRule(localctx, 24, RunaParser.RULE_recordText);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
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
	    this.enterRule(localctx, 26, RunaParser.RULE_lora);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(RunaParser.LANGLE);
	        this.state = 125;
	        this.match(RunaParser.LORA);
	        this.state = 126;
	        this.match(RunaParser.LORA_COLON);
	        this.state = 127;
	        this.match(RunaParser.LORA_IDENTIFIER);
	        this.state = 128;
	        this.match(RunaParser.LORA_COLON);
	        this.state = 129;
	        this.match(RunaParser.LORA_NUMBER);
	        this.state = 130;
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
	    this.enterRule(localctx, 28, RunaParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
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
	    this.enterRule(localctx, 30, RunaParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
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
RunaParser.BOOLEAN = 8;
RunaParser.COMMENT = 9;
RunaParser.NEWLINE = 10;
RunaParser.TEXT = 11;
RunaParser.VAR_IDENTIFIER = 12;
RunaParser.VAR_WS = 13;
RunaParser.RBRACE = 14;
RunaParser.IMPORT_AS = 15;
RunaParser.IMPORT_WITH = 16;
RunaParser.IMPORT_WS = 17;
RunaParser.IMPORT_NEWLINE = 18;
RunaParser.IMPORT_PATH = 19;
RunaParser.IMPORT_IDENTIFIER = 20;
RunaParser.IMPORT_WITH_COLON = 21;
RunaParser.IMPORT_WITH_COMMA = 22;
RunaParser.IMPORT_WITH_LBRACE = 23;
RunaParser.IMPORT_WITH_RBRACE = 24;
RunaParser.IMPORT_WITH_VALUE = 25;
RunaParser.IMPORT_WITH_WS = 26;
RunaParser.IMPORT_WITH_IDENTIFIER = 27;
RunaParser.LORA_IDENTIFIER = 28;
RunaParser.LORA_COLON = 29;
RunaParser.LORA_NUMBER = 30;
RunaParser.RANGLE = 31;
RunaParser.USE_WS = 32;
RunaParser.USE_NEWLINE = 33;
RunaParser.USE_IDENTIFIER = 34;
RunaParser.USE_NAME = 35;

RunaParser.RULE_file = 0;
RunaParser.RULE_importStatement = 1;
RunaParser.RULE_importAsPart = 2;
RunaParser.RULE_importPathPart = 3;
RunaParser.RULE_importWithPart = 4;
RunaParser.RULE_importWithVariables = 5;
RunaParser.RULE_importWithVariablePart = 6;
RunaParser.RULE_useStatement = 7;
RunaParser.RULE_record = 8;
RunaParser.RULE_recordBlock = 9;
RunaParser.RULE_recordVariable = 10;
RunaParser.RULE_recordWeight = 11;
RunaParser.RULE_recordText = 12;
RunaParser.RULE_lora = 13;
RunaParser.RULE_number = 14;
RunaParser.RULE_text = 15;

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

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RunaParser.NEWLINE);
	    } else {
	        return this.getToken(RunaParser.NEWLINE, i);
	    }
	};


	importStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportStatementContext);
	    } else {
	        return this.getTypedRuleContext(ImportStatementContext,i);
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

	importPathPart() {
	    return this.getTypedRuleContext(ImportPathPartContext,0);
	};

	IMPORT_NEWLINE() {
	    return this.getToken(RunaParser.IMPORT_NEWLINE, 0);
	};

	importWithPart() {
	    return this.getTypedRuleContext(ImportWithPartContext,0);
	};

	importAsPart() {
	    return this.getTypedRuleContext(ImportAsPartContext,0);
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



class ImportAsPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_importAsPart;
    }

	IMPORT_AS() {
	    return this.getToken(RunaParser.IMPORT_AS, 0);
	};

	IMPORT_IDENTIFIER() {
	    return this.getToken(RunaParser.IMPORT_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterImportAsPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitImportAsPart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitImportAsPart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportPathPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_importPathPart;
    }

	IMPORT_PATH() {
	    return this.getToken(RunaParser.IMPORT_PATH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterImportPathPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitImportPathPart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitImportPathPart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportWithPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_importWithPart;
    }

	IMPORT_WITH() {
	    return this.getToken(RunaParser.IMPORT_WITH, 0);
	};

	IMPORT_WITH_LBRACE() {
	    return this.getToken(RunaParser.IMPORT_WITH_LBRACE, 0);
	};

	importWithVariables() {
	    return this.getTypedRuleContext(ImportWithVariablesContext,0);
	};

	IMPORT_WITH_RBRACE() {
	    return this.getToken(RunaParser.IMPORT_WITH_RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterImportWithPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitImportWithPart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitImportWithPart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportWithVariablesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_importWithVariables;
    }

	importWithVariablePart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportWithVariablePartContext);
	    } else {
	        return this.getTypedRuleContext(ImportWithVariablePartContext,i);
	    }
	};

	IMPORT_WITH_COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RunaParser.IMPORT_WITH_COMMA);
	    } else {
	        return this.getToken(RunaParser.IMPORT_WITH_COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterImportWithVariables(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitImportWithVariables(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitImportWithVariables(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportWithVariablePartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RunaParser.RULE_importWithVariablePart;
    }

	IMPORT_WITH_IDENTIFIER() {
	    return this.getToken(RunaParser.IMPORT_WITH_IDENTIFIER, 0);
	};

	IMPORT_WITH_COLON() {
	    return this.getToken(RunaParser.IMPORT_WITH_COLON, 0);
	};

	IMPORT_WITH_VALUE() {
	    return this.getToken(RunaParser.IMPORT_WITH_VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.enterImportWithVariablePart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RunaParserListener ) {
	        listener.exitImportWithVariablePart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RunaParserVisitor ) {
	        return visitor.visitImportWithVariablePart(this);
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

	NEWLINE() {
	    return this.getToken(RunaParser.NEWLINE, 0);
	};

	EOF() {
	    return this.getToken(RunaParser.EOF, 0);
	};

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
RunaParser.ImportStatementContext = ImportStatementContext; 
RunaParser.ImportAsPartContext = ImportAsPartContext; 
RunaParser.ImportPathPartContext = ImportPathPartContext; 
RunaParser.ImportWithPartContext = ImportWithPartContext; 
RunaParser.ImportWithVariablesContext = ImportWithVariablesContext; 
RunaParser.ImportWithVariablePartContext = ImportWithVariablePartContext; 
RunaParser.UseStatementContext = UseStatementContext; 
RunaParser.RecordContext = RecordContext; 
RunaParser.RecordBlockContext = RecordBlockContext; 
RunaParser.RecordVariableContext = RecordVariableContext; 
RunaParser.RecordWeightContext = RecordWeightContext; 
RunaParser.RecordTextContext = RecordTextContext; 
RunaParser.LoraContext = LoraContext; 
RunaParser.NumberContext = NumberContext; 
RunaParser.TextContext = TextContext; 
