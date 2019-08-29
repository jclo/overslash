/* eslint */

'use strict';

module.exports = {
  dist: './_dist',
  libdir: './lib',
  libname: 'overslash',
  parent: 'this',
  noparent: '-noparent',
  index: './index.js',
  // These are the Javascript files required to build the library. Choose one
  // pattern among these ones.
  /* eslint-disable no-multi-spaces */
  src: {
    core: [
      // These two files (_header and extend.js) must be declared in
      // this order as they create the umd module and the function to extend
      // the library!
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
  license: ['/*! ****************************************************************************',
    ' * {{lib:name}} v{{lib:version}}',
    ' *',
    ' * {{lib:description}}.',
    ' * (you can download it from npm or github repositories)',
    ' * Copyright (c) 2019 {{lib:author}} <{{lib:email}}> ({{lib:url}}).',
    ' * Released under the MIT license. You may obtain a copy of the License',
    ' * at: http://www.opensource.org/licenses/mit-license.php).',
    ' * ************************************************************************** */',
    ''].join('\n'),
};
