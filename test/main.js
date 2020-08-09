// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const _          = require('../index.js')
    , core       = require('./int/core.js')
    , primitives = require('./int/primitives.js')
    , objects    = require('./int/objects.js')
    , objectsOps = require('./int/objectsops.js')
    , arraysops  = require('./int/arraysops.js')
    , functions  = require('./int/functions.js')
    , tokens     = require('./int/tokens.js')
    , csv        = require('./int/csv.js')
    ;


// -- Local Constants


// -- Local Variables


// -- Main
describe('Test Overslash:', () => {
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
    arraysops(_);

    // Operations on functions:
    functions(_);

    // Operations with tokens:
    tokens(_);

    // Operations on csv blocks:
    csv(_);
  });
});
