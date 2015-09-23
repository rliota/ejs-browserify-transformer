var ejs = require('ejs'),
    through = require('through'),
    path = require('path');


function wrap(templateFn){
    return 'module.exports=(function(){var t=' + templateFn + '; return function(l){ return t(l);}}())'; // Simen Brekken <simen@unfold.no>
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

module.exports = transformerFactory;