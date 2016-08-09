/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

var preloadHelper = require("./util/preloadHelper");

var en_us = require("./strings/en_us.js");
// var ja = require("./strings/ja.js");

// zh-Hant is Traditional Chinese (TW, MO and HK can use the same file.)
var zh_Hant = require("./strings/zh_Hant.js");

// zh-Hans is Simplified Chinese. (CN, SG and MY can use the same file.)
var zh_Hans = require("./strings/zh_Hans.js");

// Spanish
var es = require("./strings/es_la.js");

// Italian
var it = require("./strings/it.js");

var strings = en_us;

preloadHelper.acceptLanguagePromise.then(function() {
  var acceptLanguage = preload.acceptLanguage || "";

  var prioritized = acceptLanguage.split(";");
  prioritized = prioritized[0].split(",");
  prioritized = prioritized || [];
  prioritized.reverse();


  prioritized.forEach(function(languageCode) {
    if (languageCode.match(/^en/)) {
      _.extend(strings, en_us);
    }
    // else if (languageCode.match(/^ja/)) {
    //   strings = _.extend(strings, ja);
    // }
    else if (
      languageCode.match(/^zh-CN/) ||
      languageCode.match(/^zh-SG/) ||
      languageCode.match(/^zh-MY/)) {
      _.extend(strings, zh_Hans);
    }
    else if (languageCode.match(/^zh/)) { // TW, MO and HK
      _.extend(strings, zh_Hant);
    }
    else if (languageCode.match(/^it/)) {
      _.extend(strings, it);
    }
    else if (languageCode.match(/^es/)) {
      _.extend(strings, es);
    }
  });
});


module.exports = strings;
