var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var crypto = require('crypto');

var User = require('../models/user_model');

var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('reset_password_email', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reset_password_email.js', login_error: "", register_error: "", email: req.body.email, showOptions: false, boards: []});
});

router.get('/token', function(req, res, next) {
	crypto.randomBytes(48, function(err, buffer) {
	  var token = buffer.toString('hex');
	  User.findOne({email: req.body.email}, function(err, user) {
	  	if (err) {
	  		console.log(err);
	  	} else {
	  		console.log(user);
	  		user.token = token;
	  		console.log(user);
	  		user.save(function(err, user) {
	  			console.log("SAVED");
	  		})
	  	}
	  })
	  res.render('reset_password', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reset_password.js', login_error: "", register_error: "", email: token, showOptions: false, boards: []});
	});
	
})

router.post('/password', function(req, res, next) {
	console.log("HERE");
	var myHash;
	bcrypt.hash(req.body.password, 10, function(err, hash) {
	  // Store hash in your password DB. 
		myHash = hash;
		if (err) {
			console.log(err);
		} else {
			User.findOne({ email: req.body.email }, function(err, user) {
		    	if (!user) {
		      		res.render('reg_login', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reset_password.js', login_error: "", register_error: "", email: req.params.token, showOptions: false, boards: [] });
		    	} else {
		    		var myHash;
					bcrypt.hash(req.body.password, 10, function(err, hash) {
					  // Store hash in your password DB. 
						myHash = hash;
						if (err) {
						  	console.log(err);
						} else {
							console.log(user);
						  	user.password = hash;
						  	console.log(user);
							user.save(function (err, user) {
								if (err) {
							    	console.log(err);
							  	} else {
							  		req.session.user = user;
							  		console.log("worked");
							  		res.redirect('/');
								}
							});
						}
					});
		    	}
		//   	var newUser = new User({
		// 		email: req.body.email,
		// 		password: hash
		// 	});

		// 	newUser.save(function (err, user) {
		// 		if (err) {
		// 	    	console.log(err);
		// 	  	} else {
		// 	  		req.session.user = user;
		// 	  		res.redirect('/');
		// 		}
			});
		}
	});
})

router.post('/exists', function(req, res, next) {
	User.findOne({ email: req.body.email }, function(err, user) {
		if(err) {
			console.log("ERROR");
			console.log(err);
		}
		console.log(user);
    	if (!user) {
      		res.json({"msg": "User does not exist."});
    	} else { 
    		res.json({"msg":"complete"});
    	}
    });
});

module.exports = router;