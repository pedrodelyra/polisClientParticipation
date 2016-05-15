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
    name: "vote",
    idAttribute: "tid", // assumes it is used in a context where conversation_id=current conversation and pid=self
    defaults: {
      commentText: "",
      tid: undefined, // commenTTTT id... must be provided by the view, because multiple are sent over at a time...
      pid: undefined, // PPPParticipant id -- this is a unique id every participant has in every convo that starts at 0
      conversation_id: undefined, // converSation id
      votes: undefined, // agree = -1, pass = 0, disagree = 1
      participantStarred: false
    }
  });
