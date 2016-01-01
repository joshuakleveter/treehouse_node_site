////////////
//Imports //
////////////

var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");



////////////////
//App Routing //
////////////////


var commonHeader = {"Content-Type": "text/html"};


function home(request, response) {
    if(request.url === "/") {
        if(request.method.toLowerCase() === "get") {
            response.writeHead(200, commonHeader);
            renderer.view("header", {}, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
        } else {
            var postBody = "";
            request.on("data", function postRequestHandler(postBuffer) {
                postBody += postBuffer;
            });
            request.on("end", function parsePostRequest() {
                var query = querystring.parse(postBody);
                response.write(query.username);
                response.end();
            });
        }
    }
}


function user(request, response) {
    var username = request.url.replace("/", "");
    if(username.length > 0) {
        response.writeHead(200, commonHeader);
        renderer.view("header", {}, response);

        var studentProfile = new Profile(username);
        studentProfile.on("end", function parseProfileJSON(profileJSON) {
            var profileData = {
                avatarURL: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badgeCount: profileJSON.badges.length,
                javaScriptPoints: profileJSON.points.JavaScript
            };
            renderer.view("profile", profileData, response);
            renderer.view("footer", {}, response);
            response.end();
        });
        studentProfile.on("error", function profileErrorHandler(error) {
            renderer.view("error", {errorMessage: error.message}, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
        });
    }
}



///////////////////
//Module Exports //
///////////////////

module.exports.home = home;
module.exports.user = user;
