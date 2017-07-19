/* eslint */

'use strict';

module.exports = {
  dist: './_dist',
  libdir: './lib',
  libname: 'overslash',
  // These are the Javascript files required to build the library.
  src: {
    core: [
      './src/_header',
      './src/core.js',
      './src/coreobject.js',
      './src/_footer',
    ],
    full: [
      './src/_header',
      './src/core.js',
      './src/coreobject.js',
      './src/objects.js',
      './src/arrays.js',
      './src/functions.js',
      './src/miscellaneous.js',
      './src/_footer',
    ],
  },
  license: ['/**',
    ' * {{lib:name}} v{{lib:version}}',
    ' *',
    ' * A tiny modular Javascript utility library.',
    ' * Copyright (c) 2017 Jclo <jclo@mobilabs.fr> (http://www.mobilabs.fr).',
    ' * Released under the MIT license. You may obtain a copy of the License',
    ' * at: http://www.opensource.org/licenses/mit-license.php).',
    ' */',
    ''].join('\n'),
};
