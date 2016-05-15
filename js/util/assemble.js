/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

function assemble() {
  var obj = {};
  for (var i = 0; i < arguments.length; i++) {
    var candidateKvPairs = arguments[i];
    for (var k in candidateKvPairs) {
      if (candidateKvPairs.hasOwnProperty(k)) {
        if (candidateKvPairs[k] !== undefined) {
          obj[k] = candidateKvPairs[k];
        }
      }
    }
  }
  return obj;
}

module.exports = assemble;
