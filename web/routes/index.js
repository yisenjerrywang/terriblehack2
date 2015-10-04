var express = require('express');
var router = express.Router();
var saurus = require('../saurus');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Essay Better Maker' });
});

router.post('/essayParse', function(req, res, next){
  saurus.maxSaurus(req.body.inputTxt, function(outputText){
  	res.render('essayOutput', { title: 'Essay Better Maker' , output: JSON.stringify({code:0, text: outputText})})
  });
})

module.exports = router;

function makeFrontendFitIntoBackend(x){
  //return x.replace('\s',)
  return x.replace(/(?:\r\n|\r|\n)/g, '<br />')
}
