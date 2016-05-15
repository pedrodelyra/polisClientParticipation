/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */


var _ = require("underscore");
var $ = require("jquery");

// bootstrap initial bulk ajax call.
// we don't have promises until main bundle loads, so this is going to be crappy.
var p = window.preload;


function makeListener(dfd) {
  return function(err, data) {
    if (err) {
      dfd.reject();
    } else {
      dfd.resolve(data);
    }
  };
}

var firstCommentPromise = p.firstComment ?
  $.Deferred().resolve(p.firstComment) :
  (function() {
    var dfd = $.Deferred();
    p.firstCommentListener = makeListener(dfd);
    return dfd.promise();
  }());

var firstConvPromise = p.firstConv ?
  $.Deferred().resolve(p.firstConv) :
  (function() {
    var dfd = $.Deferred();
    p.firstConvListener = makeListener(dfd);
    return dfd.promise();
  }());

var firstUserPromise = p.firstUser ?
  $.Deferred().resolve(p.firstUser) :
  (function() {
    var dfd = $.Deferred();
    p.firstUserListener = makeListener(dfd);
    return dfd.promise();
  }());


var firstPtptPromise = p.firstPtpt ?
  $.Deferred().resolve(p.firstPtpt) :
  (function() {
    var dfd = $.Deferred();
    p.firstPtptListener = makeListener(dfd);
    return dfd.promise();
  }());

var firstVotesByMePromise = p.firstVoteByMe ?
  $.Deferred().resolve(p.firstVoteByMe) :
  (function() {
    var dfd = $.Deferred();
    p.firstVotesByMeListener = makeListener(dfd);
    return dfd.promise();
  }());

var firstMathPromise = _.isObject(p.firstMath) ?
  $.Deferred().resolve(p.firstMath) :
  (function() {
    var dfd = $.Deferred();
    p.firstMathListener = makeListener(dfd);
    return dfd.promise();
  }());

var firstFamousPromise = p.firstFamous ?
  $.Deferred().resolve(p.firstFamous) :
  (function() {
    var dfd = $.Deferred();
    p.firstFamousListener = makeListener(dfd);
    return dfd.promise();
  }());

var acceptLanguagePromise = p.acceptLanguage ?
  $.Deferred().resolve(p.acceptLanguage) :
  (function() {
    var dfd = $.Deferred();
    p.acceptLanguageListener = makeListener(dfd);
    return dfd.promise();
  }());


module.exports = {
  firstCommentPromise: firstCommentPromise,
  firstConvPromise: firstConvPromise,
  firstUserPromise: firstUserPromise,
  firstPtptPromise: firstPtptPromise,
  firstVotesByMePromise: firstVotesByMePromise,
  firstMathPromise: firstMathPromise,
  firstFamousPromise: firstFamousPromise,
  acceptLanguagePromise: acceptLanguagePromise,
};
