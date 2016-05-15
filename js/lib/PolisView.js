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
var Handlebones = require("handlebones");

var PolisView = Handlebones.View.extend({

  render: function() {
    eb.trigger(eb.firstRender);
    // this.trigger("beforeRender");
    Handlebones.View.prototype.render.apply(this, arguments);
    // this.trigger("afterRender");
  },

});


module.exports = PolisView;
