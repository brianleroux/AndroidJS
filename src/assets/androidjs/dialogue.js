// classic alert, essential for debugging... (jokes!!)
exports.alert = function(msg) {
	var dialog = new Packages.android.app.AlertDialog.Builder(Activity);
    dialog.setMessage(msg);
	dialog.setNegativeButton('Ok', function(){});
    dialog.show();
}

// the ever useful confirmation dialogue async style
exports.confirm = function(msg, win, fail) {
	var dialog = new Packages.android.app.AlertDialog.Builder(Activity);
    dialog.setMessage(msg);
    dialog.setCancelable(false);
    dialog.setPositiveButton('Ok', win);
    dialog.setNegativeButton('Cancel', function(d) {
		fail();
		d.dismiss();
	});
    dialog.show();
}

// multiselect/options style dialogue
exports.select = function(title, options, callback) {
	var	dialog = new Packages.android.app.AlertDialog.Builder(Activity)
	dialog.setTitle(title);
	dialog.setItems(options, function(d, i) { callback(d, i) });
	dialog.show();
}

exports.selectOne = function(title, options, callback) {
	var	dialog = new Packages.android.app.AlertDialog.Builder(Activity)
	dialog.setTitle(title);
	dialog.setSingleChoiceItems(options, -1, function(d, i) { callback(d, i) });
	dialog.show();
}

// FIXME need to support complete, cancel
exports.selectMany = function(title, options, callback) {
	var	dialog = new Packages.android.app.AlertDialog.Builder(Activity)
	dialog.setTitle(title);
	dialog.setMultiChoiceItems(options, null, function(d, i) { callback(d, i) });
	dialog.show();
}




// for pickin dates
exports.datePicker = function() {

}

// for pickin times
exports.timePicker = function() {

}

// indeterminate or determinate progress indicators
exports.progress = function(msg, fn, win, fail) {
	var p = Packages.android.app.ProgressDialog.show(Activity, "", msg || "", true);

	new java.Thread(function() {
		try {
			fn();
			win();
		} catch(e) {
			fail();
		}
		Activity.runOnUiThread(p.dismiss);
    }).start();
}
