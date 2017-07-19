/* eslint  one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0 */

'use strict';

// -- Node modules
const del     = require('del')
    , gulp    = require('gulp')
    , concat  = require('gulp-concat')
    , runSequence = require('run-sequence')
    ;

// -- Local modules
const config  = require('./config')
    ;

// -- Local constants
const dest = config.libdir
    , src  = config.src
    , lib  = config.libname
    ;

// -- Local variables


// -- Gulp Tasks

// Remove the previous version:
gulp.task('dellib', function() {
  return del.sync(dest);
});

// Create the complete library:
gulp.task('dofulllib', function() {
  return gulp.src(src.full)
    .pipe(concat(`${lib}-full.js`))
    .pipe(gulp.dest(dest));
});

// Create the core library:
gulp.task('docorelib', function() {
  return gulp.src(src.core)
    .pipe(concat(`${lib}-core.js`))
    .pipe(gulp.dest(dest));
});

// -- Gulp Main Task
gulp.task('makejs', function(callback) {
  runSequence('dellib', 'dofulllib', 'docorelib', callback);
});
