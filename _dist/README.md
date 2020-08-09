# Overslash

[![NPM version][npm-image]][npm-url]
[![GitHub last commit][commit-image]][commit-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![npm bundle size][npm-bundle-size-image]][npm-bundle-size-url]
[![License][license-image]](LICENSE.md)


## A tiny modular Javascript utility library

`Overslash` is an utility library as `Underscore` and `Lodash`. However, `Overslash` doesn't pretend to compete with these honorable libraries. `Overslash` implements only a small subset of the functions that can be found in these library.

`Overslash` ambition is quite different. `Overslash` is modular. You can build a version with only the subset of the functions you need.

Then, you can embed it in your own library. So, you can ship your library without any external dependencies.

`Overslash` is intended to run on both Node.js and ECMAScript 2015 (ES6) compliant browsers.


## API

```
Method                  | Description
```
```
_.isUndefined(n)        | Returns true if the variable n is undefined (else false),
_.isNull(n)             | Returns true if the value of n is null,
_.isBoolean(n)          | Returns true if the value of n is a boolean,
_.isString(n)           | Returns true if the value of n is a string,
_.isNumber(n)           | Returns true if the value of n is a number,
_.isNaN(n)              | Returns true if the value of n is a NaN,
_.isOdd(n)              | Returns true if the value of n is an odd number,

_.isObject(n)           | Returns true if the variable n is an object,
_.isLiteralObject(n)    | Returns true if the variable n is a literal object,
_.isFunction(n)         | Returns true if the variable n is a function,
_.isArray(n)            | Returns true if the variable n is an array,
_.isMath(n)             | Returns true if the variable n is a Math object,
_.isDate(n)             | Returns true if the variable n is a Date,
_.isEmpty(n)            | Returns true if the a given array, string or object is empty,

_.clone(o)              | Clones (deep) a literal object or an array,
_.extend(o, s)          | Extends a given object with all the properties in passed-in, object(s),
_.keys(o)               | Retrieves all the names of the object's own enumerable properties,
_.forPropIn             | Parses all the names of the object's own enumerable properties,
_.assign                | extends source with target(s),

_.contains(arr, value)  | Returns true if the array contains the passed-in value,
_.flatten(arr)          | Flattens a nested array (the nesting can be to any depth),
_.max(arr)              | Returns the maximum value in the array,
_.min(arr)              | Returns the minimum value in the array,
_.share(arr)            | Returns the list of the elements the passed-in arrays have in common,
_.pull(arr, ...args)    | Removes the passed-in items from the array,
_.include(arr, ...args) | Returns the passed-in items included in the array,
_.partition(arr, crit)  | returns two list with metching and not matching criteria,

_.token()               | Returns a unique string pattern in base 36 ([0-9a-z]),
_.makeid()              | Returns a unique string pattern with a predefined length,
_.csv2array(csv)        | Converts an csv block to an array or arrays,

_.delay(fn, ...args)    | Executes the passed-in function after a delay,
_.inRange(n, min, max)  | Checks if a number is between a range of numbers,


```

***Nota***:
We assume here that `_` is a reference to `Overslash`.


## How to embed Overslash in your library

`Overslash` is included in a Javascript module pattern. It exports only the variable `Overslash` outside this module. Thus, you can safely embed `Overslash` in your library without any risk to pollute your namespace.

`Overslash` module pattern looks like this:
```js
(function(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define([''], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    // Browser globals.
    root.Overslash = factory();
  }
}(this, function() {
  'use strict';

  var Overslash = {
    // ...
  };

  return Overslash;
}));
```

You just need to replace `this` by a specific namespace. For instance:
```js
const $__ES6GLOB = {}; // <--- this is the namespace you defined
(function(root, factory) {
  // ...
    // Browser globals.
    root.Overslash = factory();
  }
}($__ES6GLOB, function() { // <--- replace this by your library namespace
  // ...

  // Returns the library name:
  return Overslash;
}));

const _ = $__ES6GLOB.Overslash; // <-- from here Overslash is available in
                                //     your library under the variable '_'
```

Or in a very simple way if you use a bundler that support `import` and `export`:

```js
import _ from '@mobilabs/overslash';

...

```


## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/@mobilabs/overslash.svg?style=flat-square
[release-image]: https://img.shields.io/github/release/jclo/overslash.svg?include_prereleases&style=flat-square
[commit-image]: https://img.shields.io/github/last-commit/jclo/overslash.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/overslash.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/overslash/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/overslash/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/overslash/dev-status.svg?theme=shields.io
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/minzip/@mobilabs/overslash.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/@mobilabs/overslash.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@mobilabs/overslash
[release-url]: https://github.com/jclo/overslash/tags
[commit-url]: https://github.com/jclo/overslash/commits/master
[travis-url]: https://travis-ci.org/jclo/overslash
[coveralls-url]: https://coveralls.io/github/jclo/overslash?branch=master
[dependencies-url]: https://david-dm.org/jclo/overslash
[devdependencies-url]: https://david-dm.org/jclo/overslash?type=dev
[license-url]: http://opensource.org/licenses/MIT
[npm-bundle-size-url]: https://img.shields.io/bundlephobia/minzip/@mobilabs/overslash
