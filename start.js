var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("<h1>Hello, goodby world!\n</h1>");
  console.log("Request received");
});

server.listen(8000);

console.log("Server running is at http://127.0.0.1:8000/");
