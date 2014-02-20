*This repository is a mirror of the [component](http://component.io) module [jh3y/progress](http://github.com/jh3y/progress). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jh3y-progress`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# progress

  A very minimal progress line component much like seen in modern UIs. Compatible with [component package manager](https://github.com/component/component).

## demo
	
A demo of progress can be seen [here](http://jsfiddle.net/T5P44/1/).

## installation

  Install with [component(1)](http://component.io):

    $ component install jh3y/progress

## usage
Use with or without [component package manager](https://github.com/component/component).
###use with [component package manager](https://github.com/component/component)
Simply create your progress line and append its element to a container of your choice.

	var progress = require('progress') //ONLY REQUIRED IF USING COMPONENT PACKAGE MANAGER
	var myProgress = new progress('red'); // create a red progress line
	document.querySelector('.someContainer').appendChild(myProgess.element); // add it to the page
	myProgress.setProgress(5); // set it to 5% just to get it started.

Don't forget to include [progress.css](https://github.com/jh3y/progress/blob/master/progress.css)!

Refer to the [demo](http://jsfiddle.net/T5P44/1/) or message me if you're stuck :)
###use without component package manager
Simply create your progress line and append its element to a container of your choice.

	var myProgress = new progress('red'); // create a red progress line
	document.querySelector('.someContainer').appendChild(myProgess.element); // add it to the page
	myProgress.setProgress(5); // set it to 5% just to get it started.

Don't forget to include [progress.css](https://github.com/jh3y/progress/blob/master/progress.css)!

Refer to the [demo](http://jsfiddle.net/T5P44/1/) or message me if you're stuck :)

## api

###setProgress(number progress)

Set the progress of the line by providing a number(percent) of the line to fill. This should be between 0 and 100.

###setColor(string color)

Set the color of the progress line by providing a string, either supported color name such as  `red` or hexidecimal value such as `#0000FF`. By default the progress line is set to green.

##contributions

and suggestions are of course welcome :)

## license

  MIT
