// basic console.log functionality
var console = {};
console.log = function(msg) {
	require('packages/android/util/Log').i('AndroidJS', msg);
}

