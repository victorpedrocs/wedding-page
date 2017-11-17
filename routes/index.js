const express = require('express');
const router = express.Router();
const moment = require('moment');
moment.locale('pt-BR');

/* GET home page. */
router.get('/', function(req, res, next) {
  // let then = moment([2017,9,12]);
  // let days = then.diff(moment(), 'days') +1; // +1 to include the start, this means 'today'
  let days = moment([2017, 9, 12]).fromNow();
  res.render('index', { title: 'Liliane e Victor', days });
});

module.exports = router;
