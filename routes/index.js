var express = require('express');
var authCheck = require('../authCheck');
var router = express.Router();

/* GET home page. */
router.get('/', authCheck, function(req, res, next) {
	console.log(req.session.user);
  	res.render('index', { title: 'Prello Board', stylesheet: 'stylesheets/board.css', javascript: 'javascripts/board.js' });
});

router.get('/logout', function(req, res) {
  req.session.reset();
  res.redirect('/users');
});

module.exports = router;
