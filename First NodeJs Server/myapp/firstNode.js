var http = require('http');
var express = require('express');
var app = express();
var port = 8080;
var hostname = '127.0.0.1';
var fs = require('fs');
var url = require('url');
/* Stopping for now
const server = http.createServer((app),{
    app.get('/',(res,req) =>{
      var q = url.parse(req.url, true);
      var filename = "." + q.pathname;
      console.log(filename);
      res.redirect("http://127.0.0.1:8080/index.html");
      fs.readFile(filename, function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
          console.log("404 Not Found");
        }
          console.log("something else");
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          return res.end();
      });
    });
});
server.listen(port,hostname,() => {
  console.log("Server running at http://" + hostname + ":" + port);
});
*/
app.use(express.static(__dirname + '/public'));
app.engine('html', engines.hogan);
//Testing
app.get('/public',(req,res)=>{
  res.render('index.html');
});

app.listen(port, (err,res) =>{
  console.log("boom");
});
