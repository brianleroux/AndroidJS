function onCreate(bundle) {
	console.log('AndroidJS Example Activity');
	
	var notification = require('androidjs/notification')
	  , toast 		 = notification.toast
	  , dialogue 	 = require('androidjs/dialogue')
	  , alert 		 = dialogue.alert
	  , confirm 	 = dialogue.confirm
	  , select 	 	 = dialogue.select
	  , multiselect	 = dialogue.multiselect
	  , date		 = dialogue.date
	  , time		 = dialogue.time 
	  , progress     = dialogue.progress
	
	toast("Welcome to AndroidJS!");
	/*
	confirm('load web browser?'
	, 		function(){ activity('droidscript/webapp')}
	,		function(){ alert('no worries')}
	);
	
	var options = ['one', 'two', 'three'];
	
	multiselect('pick some'
	,	   options
	,      function ok() {}
	,	   function cancel() {}
	,      function change(d, i) { toast(options[i]) }
	);
	
	date(function(p, y, m, d) {
		toast((new Date(y, m, d)).toString());
	});
	
	time(function(p, h, m) {
		toast('hour: ' + h + ' minute: ' + m);
	});	
	*/
	progress('long running task happening!'
	,		 function task()    { java.lang.Thread.currentThread().sleep(3000) }
	,		 function success() { toast('we are done!') }
	,		 function failure() { toast('task fucked up') }
	)
}

