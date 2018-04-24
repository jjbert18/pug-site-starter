# Project Starter

This is an opinionated project starter using:

* Task Runner: Gulp
* Transpiler: Babel
* JavaScript: jQuery as default **TypeScript can be enabled*
* CSS PreProcessor: Sass
* Extras: Browsersync and auto Build directory zip
* HTML Templating Engine: Pug

It expects the following project structure:

```
gulpfile.js
package.json

src
 -- index.pug
 -- styles.scss
 -- components
 ---- header
 ------ _script.js
 ------ _style.scss
 ------ _template.pug
 -- images
 -- icons
 -- scss
 ---- abstracts
 ------ fonts
 ------ functions
 ------ mixins
 ------ variables
 ---- base
 -- structure
 ---- _layout.pug
 ---- _scripts.pug
 
vendor
 -- vendor-library
```

1. `npm install gulp -g` if you haven't already
2. `npm install` to install the project dependencies.
3. `gulp serve` to run the local server for development.
4. `gulp` to build production files
