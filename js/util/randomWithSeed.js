/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

module.exports = function(x) {
  return function(min, max) {
    if (max === null || max === void 0) {
      max = min;
      min = 0;
    }
    return min + Math.floor(
      // dave-scotese http://stackoverflow.com/questions/521295/javascript-random-seeds
      (x = Number("0." + Math.sin(x).toString().substr(6))) * (max - min + 1));
  };
};
