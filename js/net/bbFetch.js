/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

function makeOpt(o, opt, dfd) {
  return $.extend(opt, {
    success: _.bind(dfd.resolveWith, o),
    error: _.bind(dfd.rejectWith, o)
  });
}
// o is a backbone object
function bbFetch(o, opt) {
  var dfd = $.Deferred();
  o.fetch(makeOpt(o, opt, dfd));
  return dfd.promise();
}

module.exports = bbFetch;
