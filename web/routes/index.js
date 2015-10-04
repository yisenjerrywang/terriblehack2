var express = require('express');
var router = express.Router();
var saurus = require('../saurus');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Essay Better Maker' });
});

router.post('/essayParse', function(req, res, next){
  saurus.maxSaurus(req.body.inputTxt, function(outputText){
  	res.render('essayOutput', { title: 'Essay Better Maker', original: req.body.inputTxt, output: outputText,
    originalCount: req.body.inputTxt.length, finalCount: outputText.length})
  });
})

module.exports = router;