Compiles EJS templates (or raw html) into functions as they are require()'d in your CommonJS code, using Browserify.

For instance:




#API

##\#create(opts)
returns a transformer object that can be passed to browserify's #transform method.

"opts" is an object that is passed to EJS's #compile() method.


#Programmatic Usage:

    var browserify = require('browserify');

    var ejsTransformFactory = require('ejs-browserify-transformer');


    var builder = browserify('index');

    builder.transform(ejsTransformFactory.create({
        rmWhiteSpace: true
    }));