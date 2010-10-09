
	// classic alert, essential for debugging... (jokes!!)
exports.alert = function(msg) {
		var AlertDialog = Packages.android.app.AlertDialog
		var dialog = new AlertDialog.Builder(Activity);
	    dialog.setMessage(msg);
		dialog.setNegativeButton('Ok', function(){});
	    dialog.show();
	}
	
	/*,
	// the ever useful confirmation dialogue async style
	confirm: function(msg, win, fail) {
		var self = this, dlg = new require('packages/android/app/AlertDialog').Builder(Activity);
	    dlg.setMessage(msg);
	    dlg.setCancelable(false);
	    dlg.setPositiveButton('Ok', win);
	    dlg.setNegativeButton('Cancel', function(d) {
			fail();
			d.dismiss();
		});
	    dlg.show();
	},
	// multiselect/options style dialogue
	select: function(items, options) {
		var single = options.single || true
		  , selected = options.selected || function(){};
	},
	// for pickin dates
	datePicker: function() {
	
	},
	// for pickin times
	timePicker: function {
	
	},
	// indeterminate or determinate progress indicators
	progress: function(msg, fn, win, fail) {
		var p = require('packages/android/app/ProgressDialog').show(Activity, "", msg || "", true);
	
		new require('java/Thread')(function() {
			try {
				fn();
				win();
			} catch(e) {
				fail();
			}
			Activity.runOnUiThread(p.dismiss);
	    }).start();
	}*/
