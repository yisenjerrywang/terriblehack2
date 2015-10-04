var express = require('express');
var router = express.Router();
var saurus = require('../saurus');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Essay Better Maker' });
});

router.post('/essayParse', function(req, res, next){
  var x = makeFrontendFitIntoBackend(req.body.inputTxt)
  saurus.maxSaurus(req.body.inputTxt, null);
  res.render('essayOutput', { title: 'Essay Better Maker' , output: req.body.inputTxt})
})

module.exports = router;

function makeFrontendFitIntoBackend(x){
  //return x.replace('\s',)
  return x.replace(/(?:\r\n|\r|\n)/g, '<br />')
}
