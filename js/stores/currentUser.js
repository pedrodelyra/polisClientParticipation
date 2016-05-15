/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

var Backbone = require("backbone");

var preloadHelper = require("../util/preloadHelper");
var currentUserModel = new Backbone.Model();

currentUserModel.update = function() {
  var that = this;
  return preloadHelper.firstUserPromise.then(function(user) {
    // set up global userObject
    window.userObject = $.extend(window.userObject, user);

    window.userObject.uid = void 0;

    // migrating to a singleton model instead.
    that.set(user);
    return user;
  });
};

module.exports = currentUserModel;
