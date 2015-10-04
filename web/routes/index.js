var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Essay Better Maker' });
});

router.post('/essayParse', function(req, res, next){
  var x = makeFrontendFitIntoBackend(req.body.inputTxt)
  res.render('essayOutput', { title: 'Essay Better Maker' , output: JSON.stringify({code:0, text:x})})
})

module.exports = router;

function makeFrontendFitIntoBackend(x){
  //return x.replace('\s',)
  return x.replace(/(?:\r\n|\r|\n)/g, '<br />')
}
