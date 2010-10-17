// wrap up common notifications 
var Toast = Packages.android.widget.Toast;

exports.toast = function(msg) {		
	Toast.makeText(Activity, msg, Toast.LENGTH_SHORT).show();
}
// FIXME - this thing is failing silently why?
exports.notify = function(title, text, msg) {
    var id     = Packages.com.androidjs.example.androidjsexample          // FIXME - need to account for project generation
	  , icon   = com.androidjs.example.R.drawable.rhino_notification_icon // FIXME - icon from resources
	  , when   = java.lang.System.currentTimeMillis() 	                  // notification time
	  , notify = Packages.android.app.PendingIntent.getActivity(Activity, 0, new Packages.android.content.Intent(Activity, id), 0);
	  
	(new Packages.android.app.Notification(icon, text, when)).setLatestEventInfo(Activity, title, msg, notify);
}
