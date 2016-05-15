/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

var i = 0;
function disappearingAlert(txt, visibleDuration) {
	var dfd = $.Deferred();
	var id = "polisAlert" + (i++);
	var $alert = $(
		"<span id='"+id+"' style='position: fixed; top: 50%; width:100%; text-align: center;'>"+
			"<span class='alert-info' style='opacity: 0.8; padding: 50px; box-shadow: 2px 5px 7px 1px #black;'>"+txt+"</span>" +
		"</span>"
	);
	$(document.body).append($alert);
	setTimeout(function() {
		$("#"+id).fadeOut(600, function() {
			$("#"+id).remove();
			dfd.resolve();
		});
	}, visibleDuration);
	return dfd.promise();
}

// polisAlert

//         <span id="starredLabel" class="alert-info" style="display: none; position: absolute; right: 56px; padding:20px;">Marked as important.</span>


module.exports = {
	disappearingAlert: disappearingAlert
};
