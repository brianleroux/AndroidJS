var help = '\n';

help += ' Welcome to AndroidJS\n';
help += ' --------------------\n\n';
help += ' Command line utility for generating and updating AndroidJS projects.\n\n';
help += ' Usage:\n\n';
help += ' androidjs [command] [options]\n\n';
help += ' Commands:\n\n';
help += ' create ... creates a new AndroidJS project\n';
help += ' update ... updates an existing AndroidJS project\n';
help += ' help ..... more information on each command\n\n'; 

// androidjs help
if (arguments.length == 0) 
    print(help);

// androidjs help [cmd]
if (arguments[0] == 'help' && arguments.length >= 2) {
    var cmd = arguments[1]
      , msg = {'create': '\n Create a new AndroidJS project.\n\n Usage:\n\n androidjs create [path]\n'     
      ,        'update': '\n Update an existing AndroidJS project.\n\n Usage:\n\n androidjs update [path]\n'
      ,        'help'  : '\n More information on an AndroidJS command.\n\n Usage:\n\n androidjs help [command]\n' 
      }
    print(msg[cmd]); 
}
