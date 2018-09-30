import db from './mongodb/db';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registRouter = require('./routes/regist');
var adminRouter = require('./routes/admin');
var guessLikeRouter = require('./routes/guessLike');
var recommendRouter = require('./routes/recommend');
var personalRouter = require('./routes/personal');

var app = express();

var mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost/vue-pc", function(err) {
//   if(err){
//       console.log('连接失败');
//   }else{
//     var schema = new mongoose.Schema({
//       name:String,
//       age:String
//     });  //创建新schema 
//     var temp = mongoose.model('users', schema);  //创建 or 查找model

//     temp.find(function(err,docs){
//       if(err){
//         console.log(err);
//       }
//       console.log(docs);
//     });
//     console.log('连接成功');
//   }
// });

app.all('*',function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
      console.log(req.method);
	  	res.sendStatus(200);
	} else {
	    next();
	}
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/regist', registRouter);
app.use('/admin', adminRouter);
app.use('/guessLike', guessLikeRouter);
app.use('/recommend', recommendRouter);
app.use('/personal', personalRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
