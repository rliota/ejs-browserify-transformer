
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
