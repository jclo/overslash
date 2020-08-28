// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const _       = require('../lib/overslash-full')
    , pack    = require('../package.json')
    , testlib = require('./int/lib')

    , primitives = require('./int/primitives.js')
    , objects    = require('./int/objects.js')
    , objectsOps = require('./int/objectsops.js')
    , arraysops  = require('./int/arraysops.js')
    , functions  = require('./int/functions.js')
    , tokens     = require('./int/tokens.js')
    , csv        = require('./int/csv.js')
    ;


// -- Local Constants
const libname = 'Overslash';


// -- Local Variables


// -- Main
describe('Test Overslash:', () => {
  testlib(_, libname, pack.version);

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
