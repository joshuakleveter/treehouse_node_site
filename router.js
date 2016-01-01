////////////
//Imports //
////////////

var Profile = require("./profile.js");



////////////////
//App Routing //
////////////////

function home(request, response) {
    if(request.url === "/") {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Header\n");
        response.write("Search\n");
        response.end("Footer\n");
    }
}


function user(request, response) {
    var username = request.url.replace("/", "");
    if(username.length > 0) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Header\n");

        var studentProfile = new Profile(username);
        studentProfile.on("end", function parseProfileJSON(profileJSON) {
            var profileData = {
                avatarURL: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badgeCount: profileJSON.badges.length,
                javaScriptPoints: profileJSON.points.JavaScript
            };
            response.write(profileData.username + " has " + profileData.badgeCount + " badges\n");
            response.end("Footer\n");
        });
        studentProfile.on("error", function profileErrorHandler(error) {
            response.write(error.message + "\n");
            response.end("Footer\n");
        });
    }
}



///////////////////
//Module Exports //
///////////////////

module.exports.home = home;
module.exports.user = user;
