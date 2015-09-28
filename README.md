Compiles EJS templates (or raw html) into functions as they are require()'d in your CommonJS code, using Browserify.


# Installation

    $ npm install ejs-browserify-transformer --save-dev



# Programmatic Usage:

    var browserify = require('browserify');

    var ejsTransformFactory = require('ejs-browserify-transformer');


    var builder = browserify('foo');

    builder.transform(ejsTransformFactory.create());

    builder.bundle(function(err, buffer){
        fs.writeFile('bar.js', buffer);
    });

# Command Line
    $ browserify --transform ejs-browserify-transformer foo.js

# API

# #create(opts)
returns a transformer object that can be passed to browserify's #transform method.

"opts" is an object that is passed to EJS's #compile() method.
For a list of all the option names and what they do, consult the EJS section: https://github.com/tj/ejs#options
