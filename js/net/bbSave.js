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
    success: function() {
      dfd.resolveWith(o, arguments);
    },
    error: function() {
      dfd.rejectWith(o, arguments);
    }
  });
}
// o is a backbone object
function bbSave(o, attrs, opt) {
  var dfd = $.Deferred();
  if (!o.save(attrs, makeOpt(o, opt, dfd))) {
    dfd.rejectWith(o, "validation failed");
  }
  return dfd.promise();
}

module.exports = bbSave;
