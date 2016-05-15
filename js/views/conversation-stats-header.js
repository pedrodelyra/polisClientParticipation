/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

var eb = require("../eventBus");
var template = require("../tmpl/conversation-stats-header");
var Handlebones = require("handlebones");

module.exports = Handlebones.View.extend({
  name: "conversation-stats-header-view",
  template: template,
  initialize: function(options) {
    var that = this;
    eb.on(eb.participantCount, function(count) {
      that.participantCount = count;
      that.render();
    });
    eb.on(eb.commentCount, function(count) {
      that.commentCount = count;
      that.render();
    });
    eb.on(eb.voteCount, function(count) {
      that.voteCount = count;
      that.render();
    });
  }
});

