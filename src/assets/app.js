function onCreate(bundle) {
	console.log('awwww yeah');
	
	require('androidjs/notification').toast("Welcome to AndroidJS!");
	require('androidjs/dialogue').alert('hello?');
}
