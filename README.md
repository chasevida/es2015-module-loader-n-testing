# ES2015 Simple Tutorial

This repo contains a simple demo to supplement a tutorial on how to do some basic **ES2015** (ES6) transpiling with [Babel](https://babeljs.io/). The main focus here is to help others get up and running quickly writing ES2016 style javascript, specifically to use the module loader and how to implement a basic testing strategy.

The testing suites we use here are pretty similar, one is [Mocha](https://www.npmjs.org/package/mocha) with the [Chai](http://chaijs.com/api/bdd/) assertion library and the other is [Lab](https://www.npmjs.com/package/lab) which uses the [Code](https://www.npmjs.com/package/code) assertion library. It should be noted that Lab and Code are loosely based on Mocha and Chai. Learning one is like learning the other.


## Installation

	$ git clone git@github.com:chasevida/es2015-simple-tut.git
	$ cd es2015-simple-tut
	$ npm install


### Running the example

To preview output in the `public` directory it's best to use a static file server such as [http-server](https://www.npmjs.com/package/http-server). This is pretty simple, just do the following:

	$ npm install -g http-server

Then cd into the public folder and run the server.

	$ cd public
	$ http-server
	
Done!

## JS Module Loader

There already exist a ton of really good tutorials and overviews of the new javascript module loader. The focus of this tutorial is simple to demonstrate how to use it with **babel** and **browserify** to create a very basic front-end workflow. I say basic because it's only focussed on the javascript and we are not manipulating the dom or anything elese. This tutorial simply outlines how to expose modules via the import and export methods.

When you run the example you will need to open up your browser dev tools and inspect the console for output.

## JS Test Suites

As mentioned above tutorial makes use of two test suites, [Mocha](https://www.npmjs.org/package/mocha) and [Lab](https://www.npmjs.com/package/lab). Mocha works nicely with the [Chai](http://chaijs.com/api/bdd/) assertion library and Lab makes use of it's own [Code](https://www.npmjs.com/package/code) assertion utilities. It's worth mentioning the Lab and Code have taken the best of Mocha and Chai making improvements and fixes to suit their needs.

You will see there are a few different setups for testing these files. There is the `Makefile` used to run the Lab tests as is the custom with this particular suite and with Mocha we are running it straight from the package scripts. When you pick a solution you would normally ensure it's set as the default `test` script within your `package.json` file.

To run the tests you can use the following commands:

	$ npm test 					// runs Lab tests
	$ npm run test:mocha 		// runs Mocha tests

Lab comes with nice code coverage integration straight of the bat allowing you to see this as you develop. You can also generate an html coverage report by running the `$ make test-cov-html`. This will output `coverage.html` which you can open in your browser to inspect the results.

## Gulp

A final note is the `gulpfile.js` which includes a single task to generate the javascript through **Babel** and **Browserify**. Take a look at [Using Babel](https://babeljs.io/docs/setup/) for some simple examples on setup.