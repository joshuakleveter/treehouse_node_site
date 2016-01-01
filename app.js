////////////
//Imports //
////////////

var http = require("http");



///////////////////
//Node.js Server //
///////////////////

var port = 3000;
http.createServer(function serverHandler(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World\n");
}).listen(port, function listenHandler() {
  console.log("Server running at http://localhost:3000");
});



////////////
//Routing //
////////////
