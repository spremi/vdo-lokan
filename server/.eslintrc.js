// vdo-lokan
//
// ESlint configuration for server code.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (https://spdx.org/licenses/BSD-3-Clause.html)
//

module.exports = {
    "extends": "standard",
    "rules": {
      "semi": [
        "error",
        "always"
      ],
      "comma-dangle": [
        "error",
        "always-multiline"
      ],
      "space-before-function-paren": [
        "error",
        {
          "anonymous": "always",
          "named": "never"
        }
      ],
      "no-multi-spaces": [
        "error",
        {
          "ignoreEOLComments": true
        }
      ],
      "brace-style": [
        "error",
        "1tbs",
        {
          "allowSingleLine": true
        }
      ],
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 2,
          "maxBOF": 0,
          "maxEOF": 0
        }
      ],
    }
};
