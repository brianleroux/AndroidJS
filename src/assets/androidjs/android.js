// evaluates a JavaScript asset into the current context
var include = function(id) {
	// FIXME check for exports, if it exists wrap and iterate over keys in current ctx
	// FIXME ...everything appears to be root rel
    Activity.evalAssetFile(id + '.js');
}

// evaluates a JavaScript file as an Activity
var activity = function(scriptPath) {
	var intent = new Packages.android.content.Intent();
    intent.setClassName(Activity, "comikit.droidscript.DroidScriptActivity");
	intent.putExtra("ScriptName", scriptPath + '.js');
    Activity.startActivity(intent);
}

// start the bootstrapping the bare minimum
include('androidjs/console');
// -------------------------------------------------------------- //
// 						Load up app.js!							  //
// -------------------------------------------------------------- //
console.log('Starting app.js');
include('app')