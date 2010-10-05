// a poor mans require implementation
// - java packages are always of the format packages/foo/bar which loads Packages.foo.bar
// - local files are loaded as per CommonJS: foo/bar will load foo/bar.js
var require = function(id) {
    if (id.match(/packages/)) {
		var pkg = id.replace(/\//g,'.')
		  , pkg = pkg.charAt(0).toUpperCase() + pkg.slice(1)
		return eval(pkg)
    }
}

// evaluates a JavaScript asset into the current context
var imports = function(id) {
    var path = id + ".js";
    Activity.evalAssetFile(path);
}


// -------------------------------------------------------------- //
// 						Load up app.js!							  //
// -------------------------------------------------------------- //
console.log('Importing app.js');
imports('app')
