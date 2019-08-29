// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, import/no-extraneous-dependencies: 0, semi-style: 0 */

'use strict';

// -- Node modules

// -- Local modules
const core = require('./int/core.js')
    , primitives = require('./int/primitives.js')
    , objects = require('./int/objects.js')
    , objectsOps = require('./int/objectsOps.js')
    , arraysOps = require('./int/arraysOps.js')
    , functions = require('./int/functions.js')
    , tokens = require('./int/tokens.js')
    , csv = require('./int/csv.js')
    , _ = require('../index.js')
    ;

// -- Local constants

// -- Local variables


// -- Main
describe('overslash:', () => {
  // Test Overslash core:
  core(_);

  // Test JS Primitive Types:
  primitives(_);

  // Test JS Object Types:
  objects(_);

  // Operations on Objects:
  objectsOps(_);

  // Operations on Arrays:
  arraysOps(_);

  // Operations on functions:
  functions(_);

  // Operations with tokens:
  tokens(_);

  // Operations on csv blocks:
  csv(_);
});
