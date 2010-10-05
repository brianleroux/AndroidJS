// wrap up common notifications 
var notification = (function() {
	var Toast = require('packages/android/widget/Toast');
	
	return {
		toast: function(msg) {		
			Toast.makeText(Activity, msg, Toast.LENGTH_SHORT).show();
		},
		status: function(msg) {
		
		}
	}
})();
