// wrap up common notifications 
var Toast = Packages.android.widget.Toast;

exports.toast = function(msg) {		
	Toast.makeText(Activity, msg, Toast.LENGTH_SHORT).show();
}
exports.status = function(msg) {}
