/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

var $ = require("jquery");


// not sure about these
require("bootstrap_tooltip");
require("bootstrap_popover");


var originalPopover = $.fn.popover;
var popoverTargets = [];

$.fn.popover = function() {
  if (arguments[0] === "show") {
    popoverTargets.push(this);
  }
  return originalPopover.apply(this, arguments);
};

// Pass in a popover command, like "hide" or "destroy"
function each() {
  for (var i = 0; i < popoverTargets.length; i++) {
    var el = popoverTargets[i];
    el.popover.apply(el, arguments);
  }
}


module.exports = each;
