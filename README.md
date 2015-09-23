Compiles EJS templates (or raw html) into functions as they are require()'d in your CommonJS code, using Browserify.

Defaults to utf-8 encoding.


#Installation

    $ npm install ejs-browserify-transformer --save-dev



#Programmatic Usage:

    var browserify = require('browserify');

    var ejsTransformFactory = require('ejs-browserify-transformer');


    var builder = browserify('foo');

    builder.transform(ejsTransformFactory.create({
        rmWhiteSpace: true
    }));

#Command Line
    $ browserify --transform ejs-browserify-transformer foo.js

#API

##\#create(opts)
returns a transformer object that can be passed to browserify's #transform method.

"opts" is an object that is passed to EJS's #compile() method.
