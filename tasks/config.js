/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const pack = require('../package.json');


// -- Local Constants
const libname = 'Overslash'
    , name    = libname.replace(/\s+/g, '').toLowerCase()
    ;


// -- Local Variables


// -- Main

module.exports = {
  dist: './_dist',
  libdir: './lib',
  libname,
  parent: 'this',
  noparent: '-noparent',
  index: './index.js',
  distlink: `./_dist/lib/${name}.js`,

  // These are the Javascript files required to build the library.
  /* eslint-disable no-multi-spaces */
  src: {
    core: [
      // These three files (_header, and extend.js) must be declared in
      // this order as they create the umd module and define the function that
      // extends the method object.
      './src/_header',
      './src/lib/extend.js',

      './src/overslash.js',
      './src/methods/primitives.js',
      './src/methods/objects.js',

      // This file must always be the last one as it closes the umd module.
      './src/_footer',
    ],
    obj: [
      './src/_header',
      './src/lib/extend.js',

      './src/overslash.js',
      './src/methods/primitives.js',
      './src/methods/objects.js',
      './src/methods/objectsOps.js',
      './src/methods/arraysOps.js',
      './src/methods/functions.js',

      './src/_footer',
    ],
    tok: [
      './src/_header',
      './src/lib/extend.js',

      './src/overslash.js',
      './src/methods/primitives.js',
      './src/methods/objects.js',
      './src/methods/objectsOps.js',
      './src/methods/arraysOps.js',
      './src/methods/functions.js',
      './src/methods/tokens.js',

      './src/_footer',
    ],
    csv: [
      './src/_header',
      './src/lib/extend.js',

      './src/overslash.js',
      './src/methods/primitives.js',
      './src/methods/objects.js',
      './src/methods/objectsOps.js',
      './src/methods/arraysOps.js',
      './src/methods/functions.js',
      './src/methods/tokens.js',
      './src/methods/csv.js',

      './src/_footer',
    ],
    full: [
      './src/_header',
      './src/lib/extend.js',

      './src/overslash.js',
      './src/methods/primitives.js',
      './src/methods/objects.js',
      './src/methods/objectsOps.js',
      './src/methods/arraysOps.js',
      './src/methods/functions.js',
      './src/methods/tokens.js',
      './src/methods/csv.js',

      './src/_footer',
    ],
  },
  /* eslint-enable no-multi-spaces */

  get license() {
    return ['/*! ****************************************************************************',
      ` * ${libname} v${pack.version}`,
      ' *',
      ` * ${pack.description}.`,
      ' * (you can download it from npm or github repositories)',
      ` * Copyright (c) ${(new Date()).getFullYear()} ${pack.author.name} <${pack.author.email}> (${pack.author.url}).`,
      ' * Released under the MIT license. You may obtain a copy of the License',
      ' * at: http://www.opensource.org/licenses/mit-license.php).',
      ' * Built from ES6lib v0.0.12.',
      ' * ************************************************************************** */',
      ''].join('\n');
  },
};
