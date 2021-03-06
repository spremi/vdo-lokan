// vdo-lokan
//
// Provides application configuration.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (https://spdx.org/licenses/BSD-3-Clause.html)
//

'use strict;'

const path = require('path');

const APP_DEFAULT_IP = '0.0.0.0';
const APP_DEFAULT_PORT = '9000';

/**
 * Normalize port number into a number / string / false.
 * (Adapted from template generated by express-generator)
 */
function normalizePort(arg) {
  var port = parseInt(arg, 10);

  if (isNaN(port)) {    // When arg is a string
    return arg;
  }

  if (port >= 0) {      // When arg is a positive number
    return port;
  }

  return false;
}

/**
 * Base application configuration
 *
 * @property {string} env     Node execution environment (production | development)
 * @property {string} base    Root path of the server
 * @property {string} ip      IP address of the server
 * @property {string} port    Server port used
 */
const appConfig = {
  env: process.env.NODE_ENV,
  base: path.normalize(__dirname + '/../../..'),
  ip: process.env.IP || APP_DEFAULT_IP,
  port: normalizePort(process.env.PORT || APP_DEFAULT_PORT)
};

module.exports = appConfig;
