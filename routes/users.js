var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var User = require('../models/user_model');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var email = ""
	if (req.session.user) {
		email = req.session.user;
	}
	res.render('reg_login', { title: 'Prello Login', stylesheet: 'stylesheets/reg_login.css', javascript: 'javascripts/reg_login.js', login_error: "", register_error: "", email, showOptions: false, boards: [] });
});

router.get('/all', function(req, res, next) {
	User.find(function(err, users) {
		if(err) {
			console.log(err);
		} else {
			res.json(users);
		}
	});
});

// router.post('/exists', function(req, res, next) {
// 	console.log("one");
// 	console.log(req.body);
// 	User.findOne({ email: req.body.email }, function(err, user) {
// 		if(err) {
// 			console.log("ERROR");
// 			console.log(err);
// 		}
// 		console.log("USER");
// 		console.log(user);
//     	if (!user) {
//       		res.json({"msg": "User does not exist."});
//     	} else { 
//     		res.json({"msg":"complete"});
//     	}
//     });
// });

router.post('/register', function(req, res, next) {
	User.findOne({ email: req.body.email }, function(err, user) {
		if(user) {
      		res.render('reg_login', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reg_login.js', login_error: "", register_error: "Account already exists for this email.", email: "", showOptions: false, boards: [] });
		} else {
			var myHash;
			bcrypt.hash(req.body.password, 10, function(err, hash) {
			  // Store hash in your password DB. 
			  myHash = hash;
			  if (err) {
			  	console.log(err);
			  } else {
				  	var newUser = new User({
						email: req.body.email,
						password: hash
					});

					newUser.save(function (err, user) {
						if (err) {
					    	console.log(err);
					  	} else {
					  		req.session.user = user;
					  		res.redirect('/');
						}
					});
				}
			});
			

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
		}
	});
});


router.post('/login', function(req, res) {
  	User.findOne({ email: req.body.email }, function(err, user) {
    	if (!user) {
      		res.render('reg_login', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reg_login.js', login_error: "Invalid email or password", register_error: "", email: "", showOptions: false, boards: [] });
    	} else {
    		console.log(user.password);
    		bcrypt.compare(req.body.password, user.password, function(err, correct) {
    			if (err) {
    				console.log(err);
    			} else if (correct == true) {
			    	req.session.user = user;
        			res.redirect('/');
			    } else {
	      			res.render('reg_login', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reg_login.js', login_error: "Invalid email or password", register_error: "", email: "", showOptions: false, boards: [] });
	      		}
			});
      		// if (req.body.password === user.password) {
        // 		// sets a cookie with the user's info
        // 		req.session.user = user;
        // 		res.redirect('/');
      		// } else {
      		// 	res.render('reg_login', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reg_login.js', login_error: "Invalid email or password", register_error: "", email: "", showOptions: false, boards: [] });
      		// }
    	}
  	});
});

// router.get('/reset', function(req, res, next) {
// 	res.render('reset_password', { title: 'Prello Login', stylesheet: '/stylesheets/reg_login.css', javascript: '/javascripts/reg_login.js', login_error: "Invalid email or password", register_error: "", email: req.body.email, showOptions: false, boards: []});
// })

module.exports = router;

