// vdo-lokan
//
// Router middleware for '/api' requests
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (https://spdx.org/licenses/BSD-3-Clause.html)
//

'use strict';

/**
 * Returns application version
 */
function getVersion(req, res) {
  res.status(200).json({version: 1});
}

module.exports = getVersion;
