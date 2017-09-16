// ESLint declarations:
/* global describe */
/* eslint one-var: 0 */

'use strict';

// -- Node modules

// -- Local modules
const core = require('./core.js')
    , primitives = require('./primitives.js')
    , objects = require('./objects.js')
    , objectsOps = require('./objectsOps.js')
    , arraysOps = require('./arraysOps.js')
    , functions = require('./functions.js')
    , tokens = require('./tokens.js')
    , csv = require('./csv.js')
    ;

// -- Local constants

// -- Local variables


// -- Main
describe('overslash:', () => {
  // Test Overslash core:
  core();


  // Test JS Primitive Types:
  primitives();

  // Test JS Object Types:
  objects();

  // Operations on Objects:
  objectsOps();

  // Operations on Arrays:
  arraysOps();

  // Operations on functions:
  functions();

  // Operations with tokens:
  tokens();

  // Operations on csv blocks:
  csv();
});
