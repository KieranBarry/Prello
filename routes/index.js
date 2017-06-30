var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prello Board', stylesheet: 'stylesheets/board.css', javascript: 'javascripts/board.js' });
});

module.exports = router;
