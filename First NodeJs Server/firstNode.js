var http = require('http');
var port = 8080;
var hostname = '127.0.0.1';
var fs = require('fs');
var url = require('url');

const server = http.createServer((req, res) => {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  if(filename!='index.html'){
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
  else{
    fs.readFile('index.html',(err,data)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      res.end();
    });
  }
});

server.listen(port,hostname,() => {
  console.log("Server running at http://" + hostname + ":" + port);
});
