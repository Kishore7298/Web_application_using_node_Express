var express = require('express')
var chalk = require('chalk')
var debug = require('debug')

var app = express();

app.get('/',function(req,res){
    res.send("Hello!");
});

app.listen('3000',()=>{
    debug(`listening from port ${chalk.green('3000')}`)
});
