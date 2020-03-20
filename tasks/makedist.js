/* eslint one-var: 0, import/no-extraneous-dependencies: 0, semi-style: 0,
  object-curly-newline: 0 */

'use strict';

// -- Vendor Modules
const { src, dest, series, parallel } = require('gulp')
    , del     = require('del')
    , concat  = require('gulp-concat')
    , header  = require('gulp-header')
    , replace = require('gulp-replace')
    , uglify  = require('gulp-uglify-es').default
    , through2 = require('through2')
    ;


// -- Local Modules
const config = require('./config')
    ;


// -- Local Constants
const { dist }     = config
    , source       = config.src
    , { libdir }   = config
    , { libname }  = config
    , { noparent } = config
    , name         = libname.replace(/\s+/g, '').toLowerCase()
    , { license }  = config
    , list         = Object.keys(source)
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

// Removes the previous dist.
function deldist(done) {
  del.sync(dist);
  done();
}

// Copies README and LICENSE.
function doskeleton() {
  return src(['README.md', 'LICENSE.md'])
    .pipe(dest(dist));
}

// Copies the development version.
function copydev(done) {
  let doneCounter = 0;

  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach((item) => {
    src(`${libdir}/${name}-${item}.js`)
      .pipe(header(license))
      .pipe(dest(`${dist}/lib`))
      .pipe(synchro(incDoneCounter))
    ;
  });
}

// Copies the development version without parent.
function makenoparentlib(done) {
  let doneCounter = 0;

  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach((item) => {
    src(`${libdir}/${name}-${item}${noparent}.js`)
      .pipe(header(license))
      .pipe(replace(/ {2}'use strict';\n\n/g, ''))
      .pipe(dest(`${dist}/lib`))
      .pipe(synchro(incDoneCounter))
    ;
  });
}

// Creates the minified version.
function makeminified(done) {
  let doneCounter = 0;

  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach((item) => {
    src(`${libdir}/${name}-${item}.js`)
      .pipe(replace('/*! ***', '/** ***'))
      .pipe(uglify())
      .pipe(header(license))
      .pipe(concat(`${name}-${item}.min.js`))
      .pipe(dest(`${dist}/lib`))
      .pipe(synchro(incDoneCounter))
    ;
  });
}


// -- Gulp Public Task(s):

module.exports = series(
  deldist,
  parallel(doskeleton, copydev, makenoparentlib, makeminified),
);
