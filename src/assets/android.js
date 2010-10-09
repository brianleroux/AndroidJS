// evaluates a JavaScript asset into the current context
var include = function(id) {
	// FIXME check for exports, if it exists wrap and iterate over keys in current ctx
    Activity.evalAssetFile(id + '.js');
}

// start the bootstrapping the bare minimum
include('androidjs/lifecycle');
include('androidjs/console');
// -------------------------------------------------------------- //
// 						Load up app.js!							  //
// -------------------------------------------------------------- //
console.log('Starting app.js');
include('app')