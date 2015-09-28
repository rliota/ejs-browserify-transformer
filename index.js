/**

 The MIT License (MIT)

 Copyright (c) 2015 Robert Liota

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */

var ejs = require('ejs'),
    through = require('through'),
    path = require('path');


function wrap(compiled){
    return 'module.exports=( '+ compiled + ')';
}


var transformerFactory = {
    create: function(opts){
        var fileExtensionsToTraverse = ['.html', '.ejs'];
        if(!opts){
            opts = {};
        }
        if(opts.fileExtensions && opts.fileExtensions instanceof Array){
            fileExtensionsToTraverse.concat(opts.fileExtensions);
        }

        return function(fileName) {
            if (fileExtensionsToTraverse.indexOf(path.extname(fileName)) === -1){
                return through();
            }

            var inputAsString = '';
            function reader(buffer) {
                inputAsString += buffer.toString('utf8');
            }

            function done() {
                // I really can't think of any good reason to override these, but hey:
                opts.client = opts.client || true;
                opts.filename = opts.filename || fileName;
                this.queue(
                    wrap(
                        ejs.compile(inputAsString, opts)
                    )
                );
                this.queue(null);
            }

            return through(reader, done);
        }


    }
};

module.exports = transformerFactory.create();

module.exports.create = transformerFactory.create;