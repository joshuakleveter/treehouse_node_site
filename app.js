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



////////////
//Routing //
////////////

function homeRoute(request, response) {
    if(request.url === "/") {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Header\n");
        response.write("Search\n");
        response.end("Footer\n");
    }
}


function userRoute(request, response) {
    var username = request.url.replace("/", "");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Header\n");
    response.write(username + "\n");
    response.end("Footer\n");
}
