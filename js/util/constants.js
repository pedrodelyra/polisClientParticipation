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
  CHARACTER_LIMIT: 140, // we can import tweets, so 140
  commentCarouselMinHeight: 135, // based on CHARACTER_LIMIT and font size
  REACTIONS: {
    AGREE: -1,
    PASS: 0,
    DISAGREE: 1
  },
  MOD: {
    BAN: -1,
    UNMODERATED: 0,
    OK: 1
  }
};
