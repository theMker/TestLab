const http=require('http');
const os=require('os');

console.log("Node Http server is starting...");
var httpHandler=function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("This is V1 running in pod " + os.hostname() + "\n");

};

var server=http.createServer(httpHandler);
server.listen(80);
