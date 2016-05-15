/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

var Model = require("../model");

module.exports = Model.extend({
    name: "user",
    urlRoot: "users",
    defaults: {
      uid: undefined,  // user id
      hname: "", // human name (the token "name" returns too many results when grepped)
      created: 0,
      username: "",
      email: ""
    }
  });
