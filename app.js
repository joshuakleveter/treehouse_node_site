////////////
//Imports //
////////////

var http = require("http");
var router = require("./router.js");



///////////////////
//Node.js Server //
///////////////////

var port = 3000;
http.createServer(function serverHandler(request, response) {
    router.home(request, response);
    router.user(request, response);
}).listen(port, function listenHandler() {
    process.stdout.write("Server running at http://localhost:3000\n");
});
