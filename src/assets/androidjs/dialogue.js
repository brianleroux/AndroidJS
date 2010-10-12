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

// XXX not sure we need this considering we have select; maybe select and multiselect are the only two needed?
exports.selectOne = function(title, options, callback) {
	var	dialog = new Packages.android.app.AlertDialog.Builder(Activity)
	dialog.setTitle(title);
	dialog.setSingleChoiceItems(options, -1, function(d, i) { callback(d, i) });
	dialog.show();
}

// FIXME need to support complete, cancel
exports.multiselect = function(title, options, ok, cancel, change) {
	var	dialog = new Packages.android.app.AlertDialog.Builder(Activity)
	dialog.setTitle(title);
	dialog.setMultiChoiceItems(options, null, function(d, i) { change(d, i) });
	dialog.setPositiveButton('Ok', ok);
    dialog.setNegativeButton('Cancel', function(d) {
		cancel();
		d.dismiss();
	});
	dialog.show();
}

// for pickin dates
exports.date = function(callback, y, m, d) {
	var c = java.util.Calendar.getInstance()
	  , y = c.get(y || java.util.Calendar.YEAR)
	  , m = c.get(m || java.util.Calendar.MONTH)
	  , d = c.get(d || java.util.Calendar.DAY_OF_MONTH)
	  , p = new Packages.android.app.DatePickerDialog(Activity, callback, y, m, d)
	p.show();
}

// for pickin times
exports.time = function(callback, h, m) {
	var c = java.util.Calendar.getInstance()
	  , h = c.get(h || java.util.Calendar.HOUR_OF_DAY)
	  , m = c.get(m || java.util.Calendar.MINUTE)
	  , p = new Packages.android.app.TimePickerDialog(Activity, callback, h, m, false)
	p.show();
}


// TODO custom dialgoue, more options for progress (determinate, centered no message, title?)

// indeterminate or determinate progress indicators
exports.progress = function(msg, fn, win, fail) {
	var p = Packages.android.app.ProgressDialog.show(Activity, "", msg || "", true);
	// this is some java-ass javascript
	new java.lang.Thread(function() {
		Packages.android.os.Looper.prepare();
		try {
			fn();
			win();
			p.dismiss();
		} 
		catch(e) {
			fail();
		}
		finally {
            Packages.android.os.Looper.loop();
            Packages.android.os.Looper.myLooper().quit();
		}
    }).start();
}
