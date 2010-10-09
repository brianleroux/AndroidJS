// basic console.log functionality
var console = {};
console.log = function(msg) {
	Packages.android.util.Log.i('AndroidJS', msg);
}

