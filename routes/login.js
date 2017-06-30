var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Prello Login', stylesheet: 'stylesheets/reg_login.css', javascript: 'javascripts/reg_login.js' });
});

module.exports = router;
