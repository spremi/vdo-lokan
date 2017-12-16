// vdo-lokan
//
// Router middleware for '/api' requests.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (https://spdx.org/licenses/BSD-3-Clause.html)
//

'use strict';

const express = require('express');
const logger = require('morgan');
const router = express.Router();
const path = require('path');

const apiVersion = require('./version');

router.get('/version', apiVersion);

module.exports = router;
