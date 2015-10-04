var thesaurus = require('moby');
var pluralize = require('pluralize');

var saurus = module.exports;

saurus.maxSaurus = maxSaurus;

function maxSaurus(text, callback) {
    if(typeof text != "string" ) {
        console.error("Input isn't a string?");
    }
    else {
        var words = text.split(/-| /);
        var newText = "";
        for(i in words) {
            var word = words[i];
            var lowerWord = word.toLowerCase();
            var filteredWord = lowerWord.replace(/[^\w\s]|_/g,"");

            var synonyms = thesaurus.search(filteredWord);
            if (synonyms.length == 0) {
                console.error("No synonyms found for " + filteredWord);
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
    callback(newText);
}