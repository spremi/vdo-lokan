// vdo-lokan
//
// Implements the ExpressJS application.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (https://spdx.org/licenses/BSD-3-Clause.html)
//

'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config');

const app = express();

if (config.env === 'production') {
  app.use(logger('common', {
    skip: function(req, res) {
      return res.statusCode < 400
    },
    stream: fs.createWriteStream(path.join(config.base + '/access.log'), { flags: 'a'})
  }));
} else {
  app.use(logger('dev'));
}

app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//
// Set static 'root' path to use Angular application
//
app.use(express.static(path.join(config.base , 'dist')));

//
// Allow Cross-Origin (during development only)
// Required to accept requests from port 4200 - used (default) by 'ng serve'
//
if (config.env === 'development') {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
  });
}

//
// Set routes
//
app.use ('/api', require('./api'));

/**
 * Error handler
 */
function appErrorHandler(err, req, res, next) {
  //
  // Provide error in 'development' mode only
  //
  if (req.app.get('env') === 'development') {
    res.locals.message = err.message;
    res.locals.error = err;
  }

  res.sendStatus(err.status || 500);
}

app.use(appErrorHandler);

module.exports = app;
