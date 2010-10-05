AndroidJS
===
Author native and hybrid applications for the Android operating system with pure JavaScript. AndroidJS a light abstraction layer on to pof the crazy awesome DroidScript project by Mikael Kindborg. 

Features
---
- Native Android API wrappers to make things more natural to JavaScript. (And less Java!)
- Nearly complete access to the entire Android SDK and Dalvik Java stack.
- CommonJS compliant Modules implementation. 
- ES5 compatible JavaScript interpreter based on the Mozilla Rhino engine.
- Some NodeJS interface mappings. More to come. JavaScript services anyone?
- Examples in `./src/assets/examples` including a nascent PhoneGap/Android writ in 100% JS.

Prerequisites
---
- Android SDK

Install
---
Simply add the androidjs project to your `PATH`.
	
Terminal Quickstart 
---
	git clone
	android update -p .
	ant
	ant debug install && adb logcat

Project Layout
---
Get to know AndroidJS! 

	androidjs
	|- bin 
	|  |- androidjs .............. androidjs [create|update|help]
	|  |- create ................. Create an AndroidJS project.
	|  '- update ................. Update project: libs/js.jar, libs/droidscript.jar and assets/android.js
	|- doc 
	|- LICENSE
	|- README.md 
	'- src 
        |- AndroidManifest.xml ... set paths, targets, permissions
        |- assets ................ Static assets. 
        |  |- app.js ............. Starting point for an example AndroidJS project. 
		|  |- test.js ............ Tests for android.js file.
		|  |- android.js ......... Native wrappers.
		|  |- examples
		|  |  |- couchdb.js ...... Using AndroidJS with CouchDB (locally or not)
		|  |  |- tweets.js ....... A trivial twitter client example. 
		|  |  '- phonegap.js ..... A baseline PhoneGap/Android implementation in pure JS. 
		

Credits
---
- Mikael Kindborg (@divineprog) for creating the amazing DroidScript library from which AndroidJS is based.
- Creators of Rhino from which DroidScript is based and .
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
