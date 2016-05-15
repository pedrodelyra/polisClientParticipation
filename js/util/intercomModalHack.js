/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

module.exports = {
  init: function() {

    function setCss() {
      $("#IModalOverlay")
        .css("background-color", "rgba(0, 0, 0, 0.35)")
        .css("opacity", "1");
    }

    // gray out the Intercom overlay
    function addMutationObserver() {

      setCss();

      // var el = document.body;
      var el = $("#IModalOverlay")[0];
      if (el && mo.observe) {
        mo.observe(el, {
          attributes: true,
          characterData: false,
          childList: false,
        });
      }
    }

    if (window.MutationObserver && window.MutationObserver) {
      var mo = new MutationObserver(function() {
        console.log("setting intercom modal css");
        setCss();
        mo.disconnect();
        addMutationObserver();
      });
      setTimeout(addMutationObserver, 100);
      setTimeout(addMutationObserver, 500);
      setTimeout(addMutationObserver, 1000);
    }
  }
};
