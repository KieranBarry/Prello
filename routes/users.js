var express = require('express');
// var mongoose = require('mongoose');
var sequelize = require('../db');
var User = require('../models/user_model');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("hello1");
	var email = ""
	if (req.session.user) {
		email = req.session.user;
	}
	console.log("hello");
	res.render('reg_login', { title: 'Prello Login', stylesheet: 'stylesheets/reg_login.css', javascript: 'javascripts/reg_login.js', login_error: "", register_error: "", email});
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
	console.log("here");
	var query = `INSERT INTO users(username, email, password) VALUES ('${req.body.email}', '${req.body.email}', '${req.body.password}');`;

	console.log(query);
	sequelize.query(query, {type: sequelize.QueryTypes.INSERT})
		.then(function(user) {
			console.log(user);
			res.status(201).json();
		})
		.catch(function(e){
			console.log(e);
			res.status(500).json();
		});
	// User.findOne({ email: req.body.email }, function(err, user) {
	// 	if(user) {
 //      		res.render('reg_login', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reg_login.js', login_error: "", register_error: "Account already exists for this email.", email: "" });
	// 	} else {}
			// var newUser = new User({
			// 	email: req.body.email,
			// 	password: req.body.password
			// });

			// newUser.save(function (err, user) {
			// 	if (err) {
			//     	console.log(err);
			//   	} else {
			//   		req.session.user = user;
			//   		res.redirect('/');
			// 	}
			// });
		// }
	// });
});


router.post('/login', function(req, res) {
	console.log("yo yo yo");
	var query = `SELECT id, email FROM users WHERE email='${req.body.email}' AND password='${req.body.password}'`;
	sequelize.query(query, {type: sequelize.QueryTypes.SELECT})
		.then(function(user) {
			req.session.user = user;
			console.log("sweet deal, brah");
			res.redirect('/');
		})
		.catch(function(e) {
			console.log(e);
			res.render('reg_login', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reg_login.js', login_error: "Invalid email or password", register_error: "", email: "" });
		});

	// console.log('login request sent');
	// console.log(req.body.email);
	// console.log(req.body.password);
 //  	User.findOne({ email: req.body.email }, function(err, user) {
 //    	if (!user) {
 //    		console.log("user not found");
 //      		res.render('reg_login', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reg_login.js', login_error: "Invalid email or password", register_error: "", email: "" });
 //    	} else {
 //      		if (req.body.password === user.password) {
 //        		// sets a cookie with the user's info
 //        		req.session.user = user;
 //        		res.redirect('/');
 //      		} else {
 //      			res.render('reg_login', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reg_login.js', login_error: "Invalid email or password", register_error: "", email: "" });
 //      		}
 //    	}
 //  	});
});


module.exports = router;

