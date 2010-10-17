AndroidJS
===
Author native and hybrid applications for the Android operating system with pure JavaScript. AndroidJS a web tech abstraction orgy on top of Android enabled by the crazy awesome DroidScript project by Mikael Kindborg. 

Rhino Features
---
- CommonJS Modules 1.1 implementation. 
- ES5 compliant JavaScript interpreter.

DroidScript Features
---
- Near complete access to the entire Android SDK and then entire underlying Java stack _from JavaScript_.
- Clean binding of Rhino to the Android lifecycle.
- Helpers for evaluating JavaScript from various sources.

AndroidJS Features
---
- Native Android API wrappers to make things more natural to JavaScript. (And less Java!)
- Awesome examples for creating native controls, capturing touch input, creating web servers and webviews.
- 

Examples in `./src/assets/examples`. Check out the API docs in `./doc`. 

Current Work / Ideas
---
- notifications
- create either activitiy or service style projects
- intents
- more gui wrappers
- canvas api on top of android.graphics
- opengl webgl api binding
- PhoneGap enabled WebView
- Build scripts
- CoffeeScript support by way of http://github.com/yeungda/jcoffeescript
- CouchDB as ContentProvider
- Some NodeJS interface mappings. More to come. JavaScript services anyone?

Prerequisites
---
- Android SDK

Install
---
Simply add  `./androidjs/bin` to your `PATH`.
	
	export PATH=$PATH:~/androidjs/bin
	
Terminal Quickstart 
---
	git clone
	android update project -p .
	ant debug install && adb logcat
	
Eclipse Quickstart
---
	

Project Layout
---
Get to know AndroidJS! 

	androidjs
	|- bin 
	|  |- androidjs .............. androidjs [create|update|help]
	|  '- cli.js ................. Create an AndroidJS project.
	|- doc 
	|- LICENSE
	|- README.md 
	'- src 
        |- AndroidManifest.xml ... set paths, targets, permissions
		

Credits
---
- Mikael Kindborg (@divineprog) for creating the amazing DroidScript library from which AndroidJS is based.
- The creators and maintainers of the Rhino interpreter.
- Peter Svensson for bringing together a more eclectic side of the Android community at Android Only. 


The MIT License
---
Copyright (c) 2010 Brian LeRoux

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
