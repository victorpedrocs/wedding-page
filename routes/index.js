var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let then = new Date(2017,9,12);
  let now = new Date();
  days = Math.round(((then-now)/(1000*60*60*24)));
  res.render('index', { title: 'Liliane e Victor', days });
});

module.exports = router;
