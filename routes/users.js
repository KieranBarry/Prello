var express = require('express');
var mongoose = require('mongoose');

var User = require('../models/user_model');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('reg_login', { title: 'Prello Login', stylesheet: 'stylesheets/reg_login.css', javascript: 'javascripts/reg_login.js', error: "" });
});

router.get('/all', function(req, res, next) {
	User.find(function(err, users) {
		if(err) {
			console.log(err);
		} else {
			res.json(users);
		}
	});
})

router.post('/register', function(req, res, next) {
	var newUser = new User({
		email: req.body.email,
		password: req.body.password
	});

	newUser.save(function (err, user) {
		if (err) {
	    	console.log(err);
	  	} else {
	  		req.session.user = user;
	  		// res.send("complete");
	  		res.redirect('/');
		}
	});
});


router.post('/login', function(req, res) {
	console.log('login request sent');
  	User.findOne({ email: req.body.email }, function(err, user) {
    	if (!user) {
      		res.json({msg: "Invalid email or password."});
    	} else {
      		if (req.body.password === user.password) {
        		// sets a cookie with the user's info
        		req.session.user = user;
        		// res.end();
        		res.redirect('/');
      		} else {
      			res.json({msg: "Invalid email or password."});
      		}
    	}
  	});
});


module.exports = router;

