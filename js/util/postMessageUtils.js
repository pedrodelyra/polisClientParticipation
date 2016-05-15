/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */


var Utils = require("./utils");

function getPolisFrameId() {
  if (window.location.search) {
    var params = Utils.parseQueryParams(window.location.search);
    if (params.site_id && params.page_id) {
      return [params.site_id, params.page_id].join("_");
    }
  }
  var parts = window.location.pathname.split("/");
  if (parts && parts.length > 1) {
    // first element is emptystring, since path starts with a "/""
    parts = parts.slice(1);
  } else {
    return "error2384";
  }
  return parts.join("_");
}

function postResizeEvent(newHeight) {
  window.top.postMessage({
    name: "resize",
    polisFrameId: getPolisFrameId(),
    height: newHeight,
  }, "*");
}

function postVoteEvent() {
  window.top.postMessage({
    name: "vote",
    polisFrameId: getPolisFrameId(),
  }, "*");
}

module.exports = {

  postResizeEvent: postResizeEvent,
  postVoteEvent: postVoteEvent,

  getPolisFrameId: getPolisFrameId,

};
