////////////
//Imports //
////////////

var fs = require("fs");



/////////////////////////////
//Template Renderer Module //
/////////////////////////////

function view(templateName, values, response) {

    var fileContents = fs.readFileSync("./views/" + templateName + ".html");
    response.write(fileContents);

}



///////////////////
//Module Exports //
///////////////////

module.exports.view = view;
