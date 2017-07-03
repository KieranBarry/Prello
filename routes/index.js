var express = require('express');
var router = express.Router();

function requireLogin (req, res, next) {
  if (!req.user) {
    res.redirect('/users');
  } else {
    next();
  }
};

/* GET home page. */
router.get('/', requireLogin, function(req, res, next) {
	console.log(req.session.user);
  	res.render('index', { title: 'Prello Board', stylesheet: 'stylesheets/board.css', javascript: 'javascripts/board.js' });
});

module.exports = router;
