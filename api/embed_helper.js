/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

(function() {
  var firstRun = !window.polis;
  window.polis = window.polis || {};

  function cookiesEnabledAtTopLevel() {
    // create a temporary cookie 
    var soon = new Date(Date.now() + 1000).toUTCString();
    var teststring = "_polistest_cookiesenabled";
    document.cookie = teststring + "=1; expires=" + soon;  
    // see if it worked
    var cookieEnabled = document.cookie.indexOf(teststring) != -1;
    // clear the cookie
    document.cookie = teststring + "=; expires=" + (new Date(0)).toUTCString();  
    return cookieEnabled;
  }

  function encodeReturnUrl(str) {
    var x, i;
    var result = "";
    for (i=0; i<str.length; i++) {
      x = str.charCodeAt(i).toString(16);
      result += ("000"+x).slice(-4);
    }
    return result;
  }

  if (firstRun) {
    window.addEventListener("message", function(event) {
  
      if (!event.origin.match(/pol.is$/)) {
        return;
      } 
    
      if (event.data === "cookieRedirect" && cookiesEnabledAtTopLevel()) {
        // temporarily redirect to polis, which will set a cookie and redirect back
        window.location = "https://embed.pol.is/api/v3/launchPrep?dest=" + encodeReturnUrl(window.location+"");
      }
    }, false);
  }

}());



