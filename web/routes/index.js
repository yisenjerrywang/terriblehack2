var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Essay Better Maker' });
});

router.post('/sendSurvey', function(req, res, next){
  console.log(req.body.inputTxt)
  res.render('index', { title: 'Essay Better Maker' , output: 'testOutput'})
})

module.exports = router;
