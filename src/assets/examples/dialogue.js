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

var options = ['toast', 'alert', 'confirm', 'select', 'multiselect', 'date', 'time', 'progress'];

select('pick a dialogue'
,	   options
,      function selected(d, i) { 
			switch(options[i]) {
				case 'toast':
					toast('hello, i am a toast')
				break;
				case 'alert':
					alert('you have been alerted!')
				break;
				case 'confirm':
					confirm('do you like cats?'
					,		function yes() {alert('yay! cats are great!')}
					,		function no()  {alert('yah! cats are fucking stupid!')}
					);
				break;
				case 'select':
					alert('you just selected an option from select!')
				break;
				case 'multiselect':
					toast('not implemented');
				break;
				case 'date':
					date(function(p, y, m, d) {
						toast((new Date(y, m, d)).toString());
					});
				break;
				case 'time':
					time(function(p, h, m) {
						toast('hour: ' + h + ' minute: ' + m);
					});
				break;
				case 'progress':
					progress('long running task happening!'
					,		 function task()    { java.lang.Thread.currentThread().sleep(3000) }
					,		 function success() { toast('we are done!') }
					,		 function failure() { toast('task fucked up') }
					);
				break;
			}
		}
);