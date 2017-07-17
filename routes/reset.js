var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var User = require('../models/user_model');

var router = express.Router();

router.get('/', function(req, res, next) {
	console.log("jere");
	res.render('reset_password_email', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reset_password_email.js', login_error: "", register_error: "", email: req.body.email, showOptions: false, boards: []});
});

router.get('/:token', function(req, res, next) {
	console.log(req.params.token);
	res.render('reset_password', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reset_password.js', login_error: "Invalid email or password", register_error: "", email: req.body.email, showOptions: false, boards: []});
})

router.post('/exists', function(req, res, next) {
	console.log("one");
	console.log(req.body);
	User.findOne({ email: req.body.email }, function(err, user) {
		if(err) {
			console.log("ERROR");
			console.log(err);
		}
		console.log("USER");
		console.log(user);
    	if (!user) {
      		res.json({"msg": "User does not exist."});
    	} else { 
    		res.json({"msg":"complete"});
    	}
    });
});

module.exports = router;