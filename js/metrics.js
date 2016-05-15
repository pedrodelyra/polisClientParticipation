/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

var PolisStorage = require("./util/polisStorage");

function useIntercom() {
  return PolisStorage.hasEmail();
}

function boot() {
  if (window.Intercom && useIntercom()) {

    /*eslint-disable */
    /* jshint ignore:start */
    Intercom('boot', {
      app_id: 'nb5hla8s',
      created_at: Date.now(),
      user_id: PolisStorage.uid()
    });
    /* jshint ignore:end */
    /*eslint-enable */
  }
}

// Return the {x: {min: #, max: #}, y: {min: #, max: #}}
module.exports = {
  boot: boot
};
