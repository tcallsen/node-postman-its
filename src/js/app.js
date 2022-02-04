var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const basicAuth = require('express-basic-auth')

var usersRouter = require('./routes/hikes');
var notFoundRouter = require('./routes/notFound');
var notAllowedRouter = require('./routes/notAllowed');

var app = express();

// configure http basic auth
app.use(basicAuth({
  users: { 'admin': 'admin' }
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/hikes', usersRouter);
app.use('/', notFoundRouter);
app.use('/', notAllowedRouter);

module.exports = app;
