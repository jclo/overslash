// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const _          = require('../index')
    , pack       = require('../package.json')
    , testlib    = require('./int/lib')

    , primitives = require('./int/primitives')
    , objects    = require('./int/objects')
    , objectsOps = require('./int/objectsops')
    , arraysops  = require('./int/arraysops')
    , functions  = require('./int/functions')
    , tokens     = require('./int/tokens')
    , csv        = require('./int/csv')
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
