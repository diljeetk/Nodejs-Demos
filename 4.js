var http = require('http');
var uc = require('upper-case');
/*Use our upper-case module to upper case a string:*/
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc("Hello World!"));
  res.end();
}).listen(8080);
