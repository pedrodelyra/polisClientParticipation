/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

var RandomWithSeed = require("../util/randomWithSeed");

module.exports = function(array, seed) {
  var seq = new RandomWithSeed(seed);
  if (seed === null) {
    seq = Math.random;
  }
  var rand;
  var shuffled = array.slice();
  _.each(array, function(value, index) {
    rand = seq(index);
    shuffled[index] = shuffled[rand];
    shuffled[rand] = value;
  });
  return shuffled;
};
