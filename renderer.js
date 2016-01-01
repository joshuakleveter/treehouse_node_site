////////////
//Imports //
////////////

var fs = require("fs");



/////////////////////////////
//Template Renderer Module //
/////////////////////////////


function renderTemplate(values, content) {

    for (var key in values) {
        var regExp = new RegExp("\\{{2}\\s*" + key + "\\s*\\}{2}", "i");
        content = content.replace(regExp, values[key]);
    }

    return content;

}


function view(templateName, values, response) {

    var fileContents = fs.readFileSync("./views/" + templateName + ".html", "utf8");
    fileContents = renderTemplate(values, fileContents);
    response.write(fileContents);

}



///////////////////
//Module Exports //
///////////////////

module.exports.view = view;
