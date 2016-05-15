/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

var Handlebones = require("handlebones");
var template = require("../tmpl/voteMore");

module.exports = Handlebones.ModelView.extend({
  name: "vote-more-view",
  template: template,
  events: {
  },
  context: function() {
    var ctx = Handlebones.ModelView.prototype.context.apply(this, arguments);
    ctx.oneMore = ctx.remaining === 1;
    ctx.twoMore = ctx.remaining === 2;
    return ctx;
  },
  initialize: function(options) {
    Handlebones.ModelView.prototype.initialize.apply(this, arguments);
  }
});
