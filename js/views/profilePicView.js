/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

var Handlebones = require("handlebones");
var template = require("../tmpl/profilePicView");
var Utils = require("../util/utils");


module.exports =  Handlebones.ModelView.extend({
  name: "profile-pic-view",
  template: template,

  context: function() {
    var ctx = _.extend({}, Handlebones.ModelView.prototype.context.apply(this, arguments));
    ctx.hasTwitter = ctx.hasTwitter;
    ctx.hasFacebook = ctx.hasFacebook;
    ctx.pic = Utils.getAnonPicUrl();
    if (ctx.hasFacebook) {
      ctx.pic = ctx.facebook.fb_picture;
    }
    if (ctx.hasTwitter) {
      ctx.pic = ctx.twitter.profile_image_url_https;
    }
    return ctx;
  },

  initialize: function(options) {
    Handlebones.ModelView.prototype.initialize.apply(this, arguments);
    this.model = options.model;
  }
});
