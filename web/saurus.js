var thesaurus = require('moby');
var pluralize = require('pluralize');

var saurus = module.exports;

saurus.maxSaurus = function (text, callback) {
    if(typeof text != "string" ) {
        console.error("Input isn't a string?");
    }
    else {
        var words = text.split(/-| /);
        var newText = "";
        for(i in words) {
            var processedWord = "";

            var plural = false;
            var capital = false;
            var word = words[i];
            var lowerWord = word.toLowerCase();

            if(word != lowerWord) {
                capital = true;
            }

            var filteredWord = lowerWord.replace(/[^\w\s]|_/g,"");
            var finalWord = filteredWord;

            var singularWord = pluralize(filteredWord, 1);
            if(singularWord != filteredWord && filteredWord.indexOf(singularWord) >= 0) {
                console.log(finalWord + " is plural")
                plural = true;
                finalWord = singularWord;
            }

            var synonyms = thesaurus.search(finalWord);
            if(synonyms.length == 0) {
                //console.log("No synonyms found for " + finalWord);
                processedWord = word;
            }
            else {
                synonyms.sort(function(a, b) {
                    return b.length - a.length;
                });
                var count = 0;
                while(synonyms[count].indexOf(" ") > 0) {
                    count++;
                }
                var bestSynonym = synonyms[count];
                if(plural == true && bestSynonym.indexOf("-") < 0 && pluralize(bestSynonym, 1) != pluralize(bestSynonym)) {
                    console.log("pluralizing: " + bestSynonym);
                    bestSynonym = pluralize(bestSynonym);
                }
                if(capital) {
                    bestSynonym = bestSynonym.charAt(0).toUpperCase() + bestSynonym.substr(1).toLowerCase();
                }
                console.log("Lower word: " + lowerWord + " Final word: " + finalWord + " bestSynonym: " + bestSynonym);
                processedWord = lowerWord.replace(filteredWord, bestSynonym);
            }

            newText = newText + " " + processedWord;
        }
    }
    callback(newText);
}

saurus.funSaurus = function (text, callback) {
    if(typeof text != "string" ) {
        console.error("Input isn't a string?");
    }
    else {
        var words = text.split(/-| /);
        var newText = "";
        for(i in words) {
            var processedWord = "";

            var plural = false;
            var capital = false;
            var word = words[i];
            var lowerWord = word.toLowerCase();

            if(word != lowerWord) {
                capital = true;
            }

            var filteredWord = lowerWord.replace(/[^\w\s]|_/g,"");
            var finalWord = filteredWord;

            var singularWord = pluralize(filteredWord, 1);
            if(singularWord != filteredWord && filteredWord.indexOf(singularWord) >= 0) {
                console.log(finalWord + " is plural")
                plural = true;
                finalWord = singularWord;
            }

            var synonyms = thesaurus.search(finalWord);
            if(synonyms.length == 0) {
                console.log("No synonyms found for " + finalWord);
                processedWord = word;
            }
            else {
                var count = Math.floor(Math.random() * (synonyms.length));
                while(synonyms[count].indexOf(" ") > 0) {
                    count = Math.floor(Math.random() * (synonyms.length));
                }
                var bestSynonym = synonyms[count];
                if(plural == true && bestSynonym.indexOf("-") < 0 && pluralize(bestSynonym, 1) != pluralize(bestSynonym)) {
                    console.log("pluralizing: " + bestSynonym);
                    bestSynonym = pluralize(bestSynonym);
                }
                if(capital) {
                    bestSynonym = bestSynonym.charAt(0).toUpperCase() + bestSynonym.substr(1).toLowerCase();
                }
                console.log("Lower word: " + lowerWord + " Final word: " + finalWord + " bestSynonym: " + bestSynonym);
                processedWord = lowerWord.replace(filteredWord, bestSynonym);
            }

            newText = newText + " " + processedWord;
        }
    }
    callback(newText);
}