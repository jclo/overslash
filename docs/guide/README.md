# Guide

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
_.isMath(n)             | Returns true if the variable n is a Math object,
_.isDate(n)             | Returns true if the variable n is a Date,
_.isArray(n)            | Returns true if the variable n is an array,
_.isFunction(n)         | Returns true if the variable n is a function,
_.isEmpty(n)            | Returns true if the a given array, string or object is empty,

_.clone(o)              | Clones (deep) a literal object or an array,
_.extend(o, s)          | Extends a given object with all the properties in passed-in, object(s),
_.keys(o)               | Retrieves all the names of the object's own enumerable properties,
_.forPropIn             | Parses all the names of the object's own enumerable properties,

_.contains(arr, value)  | Returns true if the array contains the passed-in value,
_.flatten(arr)          | Flattens a nested array (the nesting can be to any depth),
_.max(arr)              | Returns the maximum value in the array,
_.min(arr)              | Returns the minimum value in the array,
_.share(arr)            | Returns the list of the elements the passed-in arrays have in common,

_.token()               | Returns a unique string pattern in base 36 ([0-9a-z]),
_.makeid()              | Returns a unique string pattern with a predefined length,
_.csv2array(csv)        | Converts an csv block to an array or arrays,

```

***Nota***:
We assume here that `_` is a reference to `overslash`.


## How to embed Overslash in your library

`Overslash` is included in a Javascript module pattern. It exports only the variable `overslash` outside this module. Thus, you can safely embed `Overslash` in your library without any risk to pollute your namespace.

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
    root.overslash = factory();
  }
}(this, function() {
  'use strict';

  var overslash = {
    // ...
  };

  return overslash;
}));
```

You just need to replace `this` by the namespace of your library:
```js
(function(root, factory) {
  // ...
    // Browser globals.
    root.overslash = factory();
  }
}(this, function() { // <--- replace this by your library namespace
  // ...
```

You can now add a reference to `Overslash` inside your library:
```js

var myLibraryName = {};

// Embed Overslash and replace 'this' by 'myLibraryName':
(function());

// You can now access to Overslash:
var _ = myLibraryName.overslash;
```

Enjoy!
