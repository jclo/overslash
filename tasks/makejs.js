/* eslint one-var: 0, import/no-extraneous-dependencies: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules
const { src, dest, series } = require('gulp')
    , del      = require('del')
    , concat   = require('gulp-concat')
    , replace  = require('gulp-replace')
    , through2 = require('through2')
    ;


// -- Local Modules
const pack   = require('../package.json')
    , config = require('./config')
    ;


// -- Local Constants
const destination = config.libdir
    , { ES6GLOB } = config
    , source      = config.src
    , { libname } = config
    , { name }    = config
    , list        = Object.keys(source)
    , { version } = pack
    ;


// -- Local Variables


// -- Private Functions

// Simple callback stream used to synchronize stuff
// Source: http://unobfuscated.blogspot.co.at/2014/01/executing-asynchronous-gulp-tasks-in.html
const synchro = function(done) {
  return through2.obj(
    (data, enc, cb) => {
      cb();
    },
    (cb) => {
      cb();
      done();
    },
  );
};


// -- Gulp Private Tasks

// Removes the previous version.
function clean(done) {
  del.sync(destination);
  done();
}

// Creates the content.
function docore(done) {
  let doneCounter = 0;

  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach((item) => {
    const core = source[item].slice(1, -1);

    src(core)
      .pipe(replace('{{lib:name}}', libname))
      .pipe(replace('{{lib:version}}', version))
      // remove the extra global and 'use strict':
      .pipe(replace(/\/\* global[\w$_\s,]+\*\//g, '/* - */'))
      .pipe(replace(/\n'use strict';\n/, ''))
      // indent the first line with 2 spaces:
      .pipe(replace(/^/g, '  '))
      // indent each other lines with 2 spaces:
      .pipe(replace(/\n/g, '\n  '))
      .pipe(concat(`core-${item}.js`))
      .pipe(dest(destination))
      .pipe(synchro(incDoneCounter))
    ;
  });
}

// Create the UMD Module.
function doumdlib(done) {
  let doneCounter = 0;

  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach((item) => {
    const head = source[item][0]
        , foot = source[item][source[item].length - 1]
        ;

    src([head, `${destination}/core-${item}.js`, foot])
      .pipe(replace('{{lib:es6:define}}\n', ''))
      .pipe(replace('{{lib:es6:link}}', 'this'))
      .pipe(replace('{{lib:es6:export}}\n', ''))
      .pipe(concat(`${name}-${item}.js`))
      // fix the blanck lines we indented too:
      .pipe(replace(/\s{2}\n/g, '\n'))
      .pipe(dest(destination))
      .pipe(synchro(incDoneCounter))
    ;
  });
}

// Creates the ES6 module.
function domodule(done) {
  let exportm = '\n// -- Export\n';
  exportm += `export default ${ES6GLOB}.${libname};`;

  let doneCounter = 0;
  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach((item) => {
    const head = source[item][0]
        , foot = source[item][source[item].length - 1]
        ;

    src([head, `${destination}/core-${item}.js`, foot])
      .pipe(replace('{{lib:es6:define}}', `const ${ES6GLOB} = {};`))
      .pipe(replace('{{lib:es6:link}}', ES6GLOB))
      .pipe(replace('{{lib:es6:export}}', exportm))
      .pipe(concat(`${name}-${item}.mjs`))
      // fix the blanck lines we indented too:
      .pipe(replace(/\s{2}\n/g, '\n'))
      .pipe(dest(destination))
      .pipe(synchro(incDoneCounter))
    ;
  });
}

// Removes the temp file(s).
function delcore(done) {
  del.sync(`${destination}/core-*.js`);
  done();
}


// -- Gulp Public Task(s)
module.exports = series(
  clean,
  docore,
  doumdlib,
  domodule,
  delcore,
);
