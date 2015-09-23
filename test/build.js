var browserify = require('browserify');
var ejsTransformer = require('../index');
var fs = require('fs');

var builder = browserify('test/src/index', {
    standalone: 'Test'
});


builder.transform(ejsTransformer.create());

builder.bundle(function(err, buffer){
    fs.writeFile('test/build/test.js', buffer);
});