/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

var URLs = require("../util/url");

var urlPrefix = URLs.urlPrefix;

var api_version = "v3";

var originalAjax = Backbone.ajax;
Backbone.ajax = function(url, options) {
  // this block is from jQuery.ajax
  // If url is an object, simulate pre-1.5 signature
  if (typeof url === "object") {
    options = url;
    url = options.url; // this part is different than jQuery.ajax (it would set url to null)
  }

  var base_url = urlPrefix + "api/" + api_version + "/";

  //var base_url = "http://localhost:5000/" + api_version;
  url = base_url + url;

  var request = {
    //data
    contentType: "application/json",
    processData: false,
    dataType: "json",
    data: options.data,

    //authentication
    headers: {
      "Cache-Control": "max-age=0"
        //"Cache-Control": "no-cache"
        //"X-Parse-Application-Id": application_id,
        //"X-Parse-REST-API-Key": rest_api_key
    },
    // crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
  };

  return originalAjax(url, $.extend(true, options, request));
};
