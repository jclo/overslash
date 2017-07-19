// ESLint declarations:
/* global describe */
/* eslint one-var: 0 */

'use strict';

// -- Node modules

// -- Local modules
const core = require('./core.js')
    , coreobjects = require('./coreobjects.js')
    , objects = require('./objects.js')
    , arrays = require('./arrays.js')
    , functions = require('./functions.js')
    , miscellaneous = require('./miscellaneous.js')
    ;

// -- Local constants

// -- Local variables


// -- Main
describe('overslash:', () => {
  // Test JS Primitive Types:
  core();

  // Test JS Object Types:
  coreobjects();

  // Operations on Objects:
  objects();

  // Operations on Arrays:
  arrays();

  // Operations on functions:
  functions();

  // Miscellaneous:
  miscellaneous();
});
