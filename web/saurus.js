var thesaurus = require('thesaurus');

var saurus = module.exports;

saurus.split = function(text, callback) {
    if(typeof text != "string" ) {
        callback(null);
    }

    callback(text.split(" "));
}

saurus.maxSaurus = function(word, callback) {
    var synonyms = thesaurus.find(word);

    if (synonyms.length == 0) {
        callback(null);
    }

    synonyms.sort(function(a, b) { 
        return b.length - a.length; 
    });

    console.log(synonyms[0]);
}


saurus.maxSaurus("cheese");
