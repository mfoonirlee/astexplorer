webpackJsonp([48],{

/***/ "IJnf":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):e.jsonToAst=n()}(this,function(){"use strict";function e(e){return e>="1"&&e<="9"}function n(e){return e>="0"&&e<="9"}function t(e){return n(e)||e>="a"&&e<="f"||e>="A"&&e<="F"}function r(e){return"e"===e||"E"===e}function l(e,n,t,r){var l=e.charAt(n);if("\r"===l)n++,t++,r=1,"\n"===e.charAt(n)&&n++;else if("\n"===l)n++,t++,r=1;else{if("\t"!==l&&" "!==l)return null;n++,r++}return{index:n,line:t,column:r}}function o(e,n,t,r){var l=e.charAt(n);return l in x?{type:x[l],line:t,column:r+1,index:n+1,value:null}:null}function c(e,n,t,r){for(var l in S)if(S.hasOwnProperty(l)&&e.substr(n,l.length)===l)return{type:S[l],line:t,column:r+l.length,index:n+l.length,value:l};return null}function a(e,n,r,l){for(var o=n,c=C._START_;n<e.length;){var a=e.charAt(n);switch(c){case C._START_:if('"'!==a)return null;n++,c=C.START_QUOTE_OR_CHAR;break;case C.START_QUOTE_OR_CHAR:if("\\"===a)n++,c=C.ESCAPE;else{if('"'===a)return n++,{type:m.STRING,line:r,column:l+n-o,index:n,value:e.slice(o,n)};n++}break;case C.ESCAPE:if(!(a in k))return null;if(n++,"u"===a)for(var u=0;u<4;u++){var i=e.charAt(n);if(!i||!t(i))return null;n++}c=C.START_QUOTE_OR_CHAR}}}function u(t,l,o,c){var a=l,u=l,i=N._START_;e:for(;l<t.length;){var s=t.charAt(l);switch(i){case N._START_:if("-"===s)i=N.MINUS;else if("0"===s)u=l+1,i=N.ZERO;else{if(!e(s))return null;u=l+1,i=N.DIGIT}break;case N.MINUS:if("0"===s)u=l+1,i=N.ZERO;else{if(!e(s))return null;u=l+1,i=N.DIGIT}break;case N.ZERO:if("."===s)i=N.POINT;else{if(!r(s))break e;i=N.EXP}break;case N.DIGIT:if(n(s))u=l+1;else if("."===s)i=N.POINT;else{if(!r(s))break e;i=N.EXP}break;case N.POINT:if(!n(s))break e;u=l+1,i=N.DIGIT_FRACTION;break;case N.DIGIT_FRACTION:if(n(s))u=l+1;else{if(!r(s))break e;i=N.EXP}break;case N.EXP:if("+"===s||"-"===s)i=N.EXP_DIGIT_OR_SIGN;else{if(!n(s))break e;u=l+1,i=N.EXP_DIGIT_OR_SIGN}break;case N.EXP_DIGIT_OR_SIGN:if(!n(s))break e;u=l+1}l++}return u>0?{type:m.NUMBER,line:o,column:c+u-a,index:u,value:t.slice(a,u)}:null}function i(e,n){for(var t=1,r=1,i=0,s=[];i<e.length;){var f=[e,i,t,r],d=l.apply(void 0,f);if(d)i=d.index,t=d.line,r=d.column;else{var T=o.apply(void 0,f)||c.apply(void 0,f)||a.apply(void 0,f)||u.apply(void 0,f);if(T){var v={type:T.type,value:T.value,loc:E(t,r,i,T.line,T.column,T.index,n.source)};s.push(v),i=T.index,t=T.line,r=T.column}else y(g.unexpectedSymbol(e.charAt(i),n.source,t,r),e,n.source,t,r)}}return s}function s(e,n,t){var r=n.length>0?n[n.length-1].loc.end:{line:1,column:1};y(I.unexpectedEnd(),e,t.source,r.line,r.column)}function f(e){for(var n=0,t=0;t<4;t++)n=16*n+parseInt(e[t],16);return String.fromCharCode(n)}function d(e){for(var n="",t=0;t<e.length;t++){var r=e.charAt(t);if("\\"===r){t++;var l=e.charAt(t);if("u"===l)n+=f(e.substr(t+1,4)),t+=4;else if(-1!==U.indexOf(l))n+=l;else{if(!(l in B))break;n+=B[l]}}else n+=r}return n}function T(e,n,t,r){for(var l=void 0,o={type:"Object",children:[]},c=P._START_;t<n.length;){var a=n[t];switch(c){case P._START_:if(a.type!==m.LEFT_BRACE)return null;l=a,c=P.OPEN_OBJECT,t++;break;case P.OPEN_OBJECT:if(a.type===m.RIGHT_BRACE)return r.loc&&(o.loc=E(l.loc.start.line,l.loc.start.column,l.loc.start.offset,a.loc.end.line,a.loc.end.column,a.loc.end.offset,r.source)),{value:o,index:t+1};var u=v(e,n,t,r);o.children.push(u.value),c=P.PROPERTY,t=u.index;break;case P.PROPERTY:if(a.type===m.RIGHT_BRACE)return r.loc&&(o.loc=E(l.loc.start.line,l.loc.start.column,l.loc.start.offset,a.loc.end.line,a.loc.end.column,a.loc.end.offset,r.source)),{value:o,index:t+1};a.type===m.COMMA?(c=P.COMMA,t++):y(I.unexpectedToken(e.substring(a.loc.start.offset,a.loc.end.offset),r.source,a.loc.start.line,a.loc.start.column),e,r.source,a.loc.start.line,a.loc.start.column);break;case P.COMMA:var i=v(e,n,t,r);i?(t=i.index,o.children.push(i.value),c=P.PROPERTY):y(I.unexpectedToken(e.substring(a.loc.start.offset,a.loc.end.offset),r.source,a.loc.start.line,a.loc.start.column),e,r.source,a.loc.start.line,a.loc.start.column)}}s(e,n,r)}function v(e,n,t,r){for(var l=void 0,o={type:"Property",key:null,value:null},c=L._START_;t<n.length;){var a=n[t];switch(c){case L._START_:if(a.type!==m.STRING)return null;var u={type:"Identifier",value:d(e.slice(a.loc.start.offset+1,a.loc.end.offset-1)),raw:a.value};r.loc&&(u.loc=a.loc),l=a,o.key=u,c=L.KEY,t++;break;case L.KEY:a.type===m.COLON?(c=L.COLON,t++):y(I.unexpectedToken(e.substring(a.loc.start.offset,a.loc.end.offset),r.source,a.loc.start.line,a.loc.start.column),e,r.source,a.loc.start.line,a.loc.start.column);break;case L.COLON:var i=A(e,n,t,r);return o.value=i.value,r.loc&&(o.loc=E(l.loc.start.line,l.loc.start.column,l.loc.start.offset,i.value.loc.end.line,i.value.loc.end.column,i.value.loc.end.offset,r.source)),{value:o,index:i.index}}}}function p(e,n,t,r){for(var l=void 0,o={type:"Array",children:[]},c=M._START_,a=void 0;t<n.length;)switch(a=n[t],c){case M._START_:if(a.type!==m.LEFT_BRACKET)return null;l=a,c=M.OPEN_ARRAY,t++;break;case M.OPEN_ARRAY:if(a.type===m.RIGHT_BRACKET)return r.loc&&(o.loc=E(l.loc.start.line,l.loc.start.column,l.loc.start.offset,a.loc.end.line,a.loc.end.column,a.loc.end.offset,r.source)),{value:o,index:t+1};var u=A(e,n,t,r);t=u.index,o.children.push(u.value),c=M.VALUE;break;case M.VALUE:if(a.type===m.RIGHT_BRACKET)return r.loc&&(o.loc=E(l.loc.start.line,l.loc.start.column,l.loc.start.offset,a.loc.end.line,a.loc.end.column,a.loc.end.offset,r.source)),{value:o,index:t+1};a.type===m.COMMA?(c=M.COMMA,t++):y(I.unexpectedToken(e.substring(a.loc.start.offset,a.loc.end.offset),r.source,a.loc.start.line,a.loc.start.column),e,r.source,a.loc.start.line,a.loc.start.column);break;case M.COMMA:var i=A(e,n,t,r);t=i.index,o.children.push(i.value),c=M.VALUE}s(e,n,r)}function R(e,n,t,r){var l=n[t],o=null;switch(l.type){case m.STRING:o=d(e.slice(l.loc.start.offset+1,l.loc.end.offset-1));break;case m.NUMBER:o=Number(l.value);break;case m.TRUE:o=!0;break;case m.FALSE:o=!1;break;case m.NULL:o=null;break;default:return null}var c={type:"Literal",value:o,raw:l.value};return r.loc&&(c.loc=l.loc),{value:c,index:t+1}}function A(e,n,t,r){var l=n[t],o=R.apply(void 0,arguments)||T.apply(void 0,arguments)||p.apply(void 0,arguments);if(o)return o;y(I.unexpectedToken(e.substring(l.loc.start.offset,l.loc.end.offset),r.source,l.loc.start.line,l.loc.start.column),e,r.source,l.loc.start.line,l.loc.start.column)}var E=function(e,n,t,r,l,o,c){return{start:{line:e,column:n,offset:t},end:{line:r,column:l,offset:o},source:c||null}},_=("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,function(e,n){return n={exports:{}},e(n,n.exports),n.exports}(function(e,n){!function(n,t){e.exports=function(){function e(e,n){if("string"!=typeof e)throw new TypeError("expected a string");if(1===n)return e;if(2===n)return e+e;var t=e.length*n;if(r!==e||void 0===r)r=e,l="";else if(l.length>=t)return l.substr(0,t);for(;t>l.length&&n>1;)1&n&&(l+=e),n>>=1,e+=e;return l+=e,l=l.substr(0,t)}function n(e,n,t,r){var l=String(n),a=c(l,t," "),u=o(" ",r.tabSize);return a+" | "+e.replace(/\t/g,u)}function t(e,t,r,l,o){return e.slice(t,r).map(function(e,r){return n(e,t+r+1,l,o)}).join("\n")}var r,l="",o=e,c=function(e,n,t){if(null==e||null==n)return e;var r=String(e),l="number"==typeof n?n:parseInt(n,10);if(isNaN(l)||!isFinite(l))return r;var o=r.length;if(o>=l)return r;var c=null==t?"":String(t);""===c&&(c=" ");for(var a=l-o;c.length<a;)c+=c;return(c.length>a?c.substr(0,a):c)+r},a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u={extraLines:2,tabSize:4};return function(e,r,l,c){c=a({},u,c);var i=e.split(/\r\n?|\n|\f/),s=Math.max(1,r-c.extraLines)-1,f=Math.min(r+c.extraLines,i.length),d=String(f).length,T=t(i,s,r,d,c),v=n(i[r-1].substring(0,l-1),r,d,c);return[T,o(" ",v.length)+"^",t(i,r,f,d,c)].filter(Boolean).join("\n")}}()}()})),O=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h=(new Error).stack,b=function(e){var n=Object.create(SyntaxError.prototype);return O(n,e,{name:"SyntaxError"}),Object.defineProperty(n,"stack",{get:function(){return h?h.replace(/^(.+\n){1,3}/,String(n)+"\n"):""}}),n},y=function(e,n,t,r,l){throw b({message:r?e+"\n"+_(n,r,l):e,rawMessage:e,source:t,line:r,column:l})},I={unexpectedEnd:function(){return"Unexpected end of input"},unexpectedToken:function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return"Unexpected token <"+e+"> at "+t.filter(Boolean).join(":")}},g={unexpectedSymbol:function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return"Unexpected symbol <"+e+"> at "+t.filter(Boolean).join(":")}},m={LEFT_BRACE:0,RIGHT_BRACE:1,LEFT_BRACKET:2,RIGHT_BRACKET:3,COLON:4,COMMA:5,STRING:6,NUMBER:7,TRUE:8,FALSE:9,NULL:10},x={"{":m.LEFT_BRACE,"}":m.RIGHT_BRACE,"[":m.LEFT_BRACKET,"]":m.RIGHT_BRACKET,":":m.COLON,",":m.COMMA},S={true:m.TRUE,false:m.FALSE,null:m.NULL},C={_START_:0,START_QUOTE_OR_CHAR:1,ESCAPE:2},k={'"':0,"\\":1,"/":2,b:3,f:4,n:5,r:6,t:7,u:8},N={_START_:0,MINUS:1,ZERO:2,DIGIT:3,POINT:4,DIGIT_FRACTION:5,EXP:6,EXP_DIGIT_OR_SIGN:7},P={_START_:0,OPEN_OBJECT:1,PROPERTY:2,COMMA:3},L={_START_:0,KEY:1,COLON:2},M={_START_:0,OPEN_ARRAY:1,VALUE:2,COMMA:3},G={loc:!0,source:null},B={b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},U=['"',"\\","/"];return function(e,n){n=O({},G,n);var t=i(e,n);0===t.length&&s(e,t,n);var r=A(e,t,0,n);if(r.index===t.length)return r.value;var l=t[r.index];y(I.unexpectedToken(e.substring(l.loc.start.offset,l.loc.end.offset),n.source,l.loc.start.line,l.loc.start.column),e,n.source,l.loc.start.line,l.loc.start.column)}});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ })

});