var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const basicAuth = require('express-basic-auth')

var indexRouter = require('./routes/default');
var usersRouter = require('./routes/hikes');

var app = express();

// configure http basic auth
app.use(basicAuth({
  users: { 'admin': 'admin' }
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
