(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Test = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var template, html;

module.exports ={
    getTemplate: function(){
        return template = require('./slipsum.html');
    },
    renderTemplate: function(){
        return html = template({slipsumURL: "http://slipsum.com"});
    },
    writeTemplate: function(){
        document.body.innerHTML = html;
    },
    run:function(){
        this.getTemplate();
        this.renderTemplate();
        this.writeTemplate();
    }
};

},{"./slipsum.html":2}],2:[function(require,module,exports){
module.exports=(function(){var t=function anonymous(locals, escape, include, rethrow
/**/) {
rethrow = rethrow || function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escape = escape || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
        .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div>\n    <div id=\"content\">\n        <% include message.html %>\n        </div>\n    </div>"
  , __filename = "/Users/dev/Projects/ejs-transformer/test/src/slipsum.html";
try {
  var __output = [], __append = __output.push.bind(__output);
  with (locals || {}) {
    ; __append("<div>\n    <div id=\"content\">\n        ")
    ; __line = 3
    ; (function(){
    ; __append("\n        <!-- start slipsum code -->\n\n        Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.\n\n        <!-- please do not remove this line -->\n\n        <div style=\"display:none;\">\n            <a href=\"")
    ; __line = 9
    ; __append(escape(slipsumURL))
    ; __append("\">lorem ipsum</a></div>\n\n        <!-- end slipsum code -->\n")
    ; __line = 12
    ; })()
    ; __append("\n        </div>\n    </div>")
    ; __line = 5
  }
  return __output.join("");
} catch (e) {
  rethrow(e, __lines, __filename, __line);
}

}; return function(l){ return t(l);}}())
},{}]},{},[1])(1)
});