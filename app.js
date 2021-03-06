require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');


const productRouter = require('./routes/product');
const authorRouter = require('./routes/author');
const orderRouter = require('./routes/order');



const app = express();

require('./database/mongoDB');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view options', {layout: false});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

//passport
app.use(session({secret: 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/',authorRouter);
app.use('/products',productRouter);
app.use('/orders',orderRouter);

require('./passport/author')(passport);

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
