/* eslint  one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0 */

'use strict';

// -- Node modules
const del     = require('del')
    , gulp    = require('gulp')
    , concat  = require('gulp-concat')
    , replace     = require('gulp-replace')
    , runSequence = require('run-sequence')
    ;

// -- Local modules
const config  = require('./config')
    ;

// -- Local constants
const dest   = config.libdir
    , src    = config.src
    , lib    = config.libname
    , name   = lib.replace(/\s+/g, '').toLowerCase()
    , parent = config.parent
    ;

// -- Local variables


// -- Gulp Tasks

// Remove the previous version:
gulp.task('dellib', function() {
  return del.sync(dest);
});

function handle(type) {
  return gulp.src(src[type])
    .pipe(replace('{{lib:name}}', lib))
    .pipe(replace('{{lib:parent}}', parent))
    .pipe(concat(`${name}-${type}.js`))
    .pipe(gulp.dest(dest));
}

// Create the core library:
gulp.task('docorelib', function() {
  return handle('core');
});

// Create the core and objects library:
gulp.task('doobjlib', function() {
  return handle('obj');
});

// Create the core, objects and token library:
gulp.task('dotoklib', function() {
  return handle('tok');
});

// Create the core, objects, token and csv library:
gulp.task('docsvlib', function() {
  return handle('csv');
});

// Create the complete library:
gulp.task('dofulllib', function() {
  return handle('full');
});


// -- Gulp Main Task
gulp.task('makejs', function(callback) {
  runSequence('dellib', 'docorelib', 'doobjlib', 'dotoklib', 'docsvlib', 'dofulllib', callback);
});
