function onCreate(bundle) {
	console.log('awwww yeah');
	
	var notification = require('androidjs/notification')
	  , toast 		 = notification.toast
	  , dialogue 	 = require('androidjs/dialogue')
	  , alert 		 = dialogue.alert
	  , confirm 	 = dialogue.confirm
	  , select 	 	 = dialogue.select
	  , selectOne	 = dialogue.selectOne
	  , selectMany	 = dialogue.selectMany
	
	toast("Welcome to AndroidJS!");
	
	confirm('load web browser?'
	, 		function(){ activity('droidscript/webapp')}
	,		function(){ alert('no worries')}
	);
	
	var options = ['one', 'two', 'three'];
	selectMany('pick some'
	,	   options
	,      function(d, i){ toast(options[i]) }
	);
}

