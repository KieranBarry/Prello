var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
var cors = require('cors');
var session = require('client-sessions');
// var Sequelize = require('sequelize');
var sequelize = require('./db.js'); //runs it at beginning
var User = require('./models/user_model');

var index = require('./routes/index');
var users = require('./routes/users');
var board = require('./routes/board');

// mongoose.connect('mongodb://localhost/prello');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("connected to mongo!");
// });

// var sequelize = new Sequelize('postgres://prello:prello@localhost:5432/prello');
// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(session({
  cookieName: 'session',
  secret: 'kldamzncuwoq9374kxsdkx92020239d',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

// app.use(function(req, res, next) {
//   if (req.session && req.session.user) {
//     // User.findOne({ email: req.session.user.email }, function(err, user) {
//     //   if (user) {
//     //     req.user = user;
//     //     delete req.user.password; // delete the password from the session
//     //     req.session.user = user;  //refresh the session value
//     //     res.locals.user = user;
//     //   }
//     //   next();
//     // });
//   } else {
//     next();
//   }
// });

app.use('/', index);
app.use('/users', users);
app.use('/board', board);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
