////////////
//Imports //
////////////

var http = require("http");



///////////////////
//Node.js Server //
///////////////////

var port = 3000;
http.createServer(function serverHandler(request, response) {
    homeRoute(request, response);
}).listen(port, function listenHandler() {
    process.stdout.write("Server running at http://localhost:3000\n");
});
