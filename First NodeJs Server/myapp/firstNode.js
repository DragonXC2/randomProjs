var express = require('express');
var app = express();
var port = 8080;
var fs = require('fs');
var url = require('url');
app.disable('x-powered-by');


app.use(express.static(__dirname + '/'));


app.get('/',(req,res)=>{
  res.redirect('/Index/index.html');
});

app.listen(port,() =>{
  console.log("boom");
});
