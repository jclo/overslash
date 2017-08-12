/* eslint  one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0 */

'use strict';

// -- Node modules
const del         = require('del')
    , gulp        = require('gulp')
    , concat      = require('gulp-concat')
    , header      = require('gulp-header')
    , replace     = require('gulp-replace')
    , runSequence = require('run-sequence')
    ;

// -- Local modules
const config  = require('./config')
    ;

// -- Local constants
const version = require('../package.json').version
    , dist    = config.dist
    , src     = config.src
    , lib     = config.libname
    , license = config.license
    , destlib = `./_${lib}-${version}`
    ;

// -- Local variables


// -- Gulp Tasks

// Remove the previous version:
gulp.task('delemlib', function() {
  return del.sync(destlib);
});

// Copy dist to destlib:
gulp.task('cpdist', function() {
  return gulp.src(`${dist}/**/*`)
    .pipe(gulp.dest(destlib));
});

// Remove js files:
gulp.task('rmjsfiles', function() {
  return del.sync(`${destlib}/*.js`);
});

// Create the full library:
gulp.task('doemlibfull', function() {
  return gulp.src(src.full)
    .pipe(concat(`${lib}-full.js`))
    .pipe(header(license))
    .pipe(replace('{{lib:name}}', `${lib}-full`))
    .pipe(replace('{{lib:version}}', version))
    .pipe(gulp.dest(destlib));
});

// Create the core library:
gulp.task('doemlibcore', function() {
  return gulp.src(src.core)
    .pipe(concat(`${lib}-core.js`))
    .pipe(header(license))
    .pipe(replace('{{lib:name}}', `${lib}-core`))
    .pipe(replace('{{lib:version}}', version))
    .pipe(gulp.dest(destlib));
});

// -- Gulp Main Task
gulp.task('makenoparentlib', function(callback) {
  runSequence('delemlib', 'cpdist', 'rmjsfiles', ['doemlibfull', 'doemlibcore'], callback);
});
