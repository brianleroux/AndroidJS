// wrap up common notifications 
var Toast = Packages.android.widget.Toast;

exports.toast = function(msg) {		
	Toast.makeText(Activity, msg, Toast.LENGTH_SHORT).show();
}
exports.notify = function(id, title, text, msg) {
	var icon   = R.drawable.notification_icon   // icon from resources
	  , when   = System.currentTimeMillis() 	// notification time
	  , notify = PendingIntent.getActivity(Activity, 0, new Intent(Activity, id), 0);
	  
	(new Notification(icon, text, when)).setLatestEventInfo(Activity, title, msg, notify);
}
