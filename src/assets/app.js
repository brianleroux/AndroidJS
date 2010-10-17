function onCreate(bundle) {
    console.log('AndroidJS Example Activity');
	
    var alert = require('androidjs/dialogue').alert;
    alert('one eye');

    require('androidjs/notification').notify('androidjs', 'foobar', 'mssage will go here', 'really');
}

