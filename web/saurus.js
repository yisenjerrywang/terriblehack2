var thesaurus = require('moby');
var pluralize = require('pluralize');

var saurus = module.exports;

saurus.maxSaurus = maxSaurus;

function maxSaurus(text, callback) {
    if(typeof text != "string" ) {
        console.error("Input isn't a string?");
    }
    else {
        var words = text.split(" ");
        var newText = "";
        for(i in words) {
            var word = words[i];
            var lowerWord = words[i].toLowerCase();
            var synonyms = thesaurus.search(lowerWord);
            if (synonyms.length == 0) {
                console.error("No synonyms found for " + lowerWord);
                newText = newText + " " + word;
            }
            else {
                synonyms.sort(function(a, b) {
                    return b.length - a.length;
                });
                newText = newText + " " + synonyms[0];
            }
        }
    }
    console.log(newText);
}


saurus.maxSaurus("cheese");
