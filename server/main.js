// vdo-lokan
//
// Implements entry point for the server application.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (https://spdx.org/licenses/BSD-3-Clause.html)
//

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = require('./app/config');

const debug = require('debug')('vdo-lokan:server');
const http = require('http');

const app = require('./app');
app.set('port', config.port);

/**
 * Event listener for HTTP server 'error' event
 */
function onHttpError(err) {
  if (err.syscall !== 'listen') {
    throw err;
  }

  var source = (typeof port === 'string' ? 'pipe ' : 'port ') + port;

  switch(err.code) {
    case 'EACCESS':
      console.error(err.code + '[' + source + ']: Insufficent privileges.');
      process.exit(1);
      break;

    case 'EADDRINUSE':
    console.error(err.code + '[' + source + ']: Already is use.');
    process.exit(1);
    break;

    default:
      throw err;
  }
}

/**
 * Event listener for HTTP server 'listening' event
 */
function onHttpListening() {
  var addr = server.address();

  var source = (typeof addr === 'string' ? 'pipe ' + port : 'port ' + addr.port);
  console.log('Listening on ' + source);

  debug('Server listening on ' + source);
}

/**
 * Create HTTP server
 */
const server = http.createServer(app);
server.listen(config.port, config.ip);
server.on('error', onHttpError);
server.on('listening', onHttpListening);

