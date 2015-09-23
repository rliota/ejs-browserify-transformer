var assert = require('assert');

var build = require('./build');
var test = require("./build/test");


describe('ejs-transformer', function() {


    describe('#getTemplate()', function () {
        it('should return a compiled template function representing the contents of slipsum.html', function () {
            var template = test.getTemplate();
            assert.equal((template instanceof Function), true);
        });
    });
    describe('#renderTemplate()', function () {
        it('should return a string representing the data-bound contents of slipsum.html', function () {
            var html = test.renderTemplate();
            assert.equal((typeof html), 'string');
            assert.notEqual(-1, html.indexOf('http://slipsum.com'));
        });
    });



});