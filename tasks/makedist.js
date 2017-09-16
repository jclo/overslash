/* eslint one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0 */

'use strict';

// -- Node modules
const del         = require('del')
    , gulp        = require('gulp')
    , concat      = require('gulp-concat')
    , header      = require('gulp-header')
    , replace     = require('gulp-replace')
    , runSequence = require('run-sequence')
    , uglify      = require('gulp-uglify')
    ;

// -- Local modules
const config  = require('./config')
    ;

// -- Release and copyright to include
const release   = require('../package.json').version
    ;

// -- Local constants
const dist      = config.dist
    , libdir    = config.libdir
    , libname   = config.libname
    , name      = libname.replace(/\s+/g, '').toLowerCase()
    , license   = config.license
    ;

// -- Local variables


// -- Gulp Tasks

// Remove previous dist:
gulp.task('deldist', function() {
  return del.sync(dist);
});

// Copy README and LICENSE:
gulp.task('skeleton', function() {
  return gulp.src(['README.md', 'LICENSE.md'])
    .pipe(gulp.dest(dist));
});

// Copy the development version:
function copydev(type) {
  return gulp.src(`${libdir}/${name}-${type}.js`)
    .pipe(header(license))
    .pipe(replace('{{lib:name}}', `${libname}-${type}`))
    .pipe(replace('{{lib:version}}', release))
    .pipe(gulp.dest(dist));
}

// Make a minified version:
function minify(type) {
  return gulp.src(`${libdir}/${name}-${type}.js`)
    .pipe(uglify())
    .pipe(header(license))
    .pipe(replace('{{lib:name}}', `${libname}-${type}`))
    .pipe(replace('{{lib:version}}', release))
    .pipe(concat(`${name}-${type}.min.js`))
    .pipe(gulp.dest(dist));
}

// Copy the core development version and create a minified one:
gulp.task('copycoredev', function() {
  return copydev('core');
});
gulp.task('makecoreminified', function() {
  return minify('core');
});

// Copy the core and object development version and create
// a minified one:
gulp.task('copyobjdev', function() {
  return copydev('obj');
});
gulp.task('makeobjminified', function() {
  return minify('obj');
});

// Copy the core, object and token development version and create
// a minified one:
gulp.task('copytokdev', function() {
  return copydev('tok');
});
gulp.task('maketokminified', function() {
  return minify('tok');
});

// Copy the core, object, token and csv development version
// and create a minified one:
gulp.task('copycsvdev', function() {
  return copydev('csv');
});
gulp.task('makecsvminified', function() {
  return minify('csv');
});

// Copy the full development version and create a minified one:
gulp.task('copyfulldev', function() {
  return copydev('full');
});
gulp.task('makefullminified', function() {
  return minify('full');
});


// -- Gulp Main Task:
gulp.task('makedist', function(callback) {
  runSequence('deldist',
    ['skeleton',
      'copycoredev', 'copyobjdev', 'copytokdev', 'copycsvdev', 'copyfulldev',
      'makecoreminified', 'makeobjminified', 'maketokminified', 'makecsvminified',
      'makefullminified'],
    callback);
});
