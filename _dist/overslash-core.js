/** ****************************************************************************
 * overslash-core v0.0.2
 *
 * A tiny modular Javascript utility library.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2017 Jclo <jclo@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * ****************************************************************************/
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"], one-var: 0 */
/* eslint-disable no-param-reassign */
(function(root, factory) {
  'use strict';

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(root);
  } else {
    // Browser globals.
    root.overslash = factory(root);
  }
}(this, function() {
  'use strict';

  var overslash
    ;

  /* eslint-enable no-param-reassign */

  /**
   * Functions:
   *
   *  Primitives types (mandatory):
   *  . isUndefined       is a given variable undefined?
   *  . isNull            is a given value null?
   *  . isBoolean         is a given value a boolean?
   *  . isString          is a given value a string?
   *  . isNumber          is a given value a number?
   *  . isNaN             is a given value NaN?
   *  . isOdd             is a given value an odd number?
   *
   * Object types (mandatory):
   *  . isObject          is a given variable an object?
   *  . isMath            is a given value a Math object?
   *  . isDate            is a given value a Date?
   *  . isArray           is a given value an array?
   *  . isFunction        is a given variable a function?
   *  . isEmpty           is a given array, string or object empty?
   *
   * Operations on Objects (optional):
   *  . clone             clones a literal object or an array,
   *  . extend            extends a given object with all the properties in passed-in object(s),
   *  . keys              retrieves all the names of the object's own enumerable properties,
   *  . forPropIn         Parses all the names of the object's own enumerable properties,
   *
   * Operations on Arrays (optional):
   *  . contains          returns true if the array contains the passed-in value,
   *  . flatten           flattens a nested array (the nesting can be to any depth),
   *  . max               returns the maximum value in the array,
   *  . min               returns the minimum value in the array,
   *  . share             returns the list of the elements the passed-in arrays have in common,
   *
   * Operations on functions (optional):
   *  . -
   *
   * Miscellaneous (optional):
   *  . nop               executes an empty function,
   *  . token             returns a unique string pattern in base 36 ([0-9a-z]),
   *  . makeid            returns a unique string pattern with a predefined length,
   *  . csv2array         converts an csv block to an array or arrays,
   */
  overslash = {};


  // --- Primitives types ------------------------------------------------------
  /**
   * Is a given variable undefined?
   *
   * @function (arg1)
   * @public
   * @param {Object}      the object to test,
   * @returns {Boolean}   returns true or false,
   * @since 0.0.0
   */
  overslash.isUndefined = function(obj) {
    return obj === undefined;
  };

  /**
   * Is a given value null?
   *
   * @function (arg1)
   * @public
   * @param {Object}      the object to test,
   * @returns {Boolean}   returns true or false,
   * @since 0.0.0
   */
  overslash.isNull = function(obj) {
    return obj === null;
  };

  /**
   * Is a given value a boolean?
   *
   * @function (arg1)
   * @public
   * @param {Object}      the object to test,
   * @returns {Boolean}   returns true or false,
   * @since 0.0.0
   */
  overslash.isBoolean = function(obj) {
    return obj === true || obj === false || Object.prototype.toString.call(obj) === '[object Boolean]';
  };

  /**
   * Is a given value a string?
   *
   * @function (arg1)
   * @public
   * @param {Object}      the object to test,
   * @returns {Boolean}   returns true or false,
   * @since 0.0.0
   */
  overslash.isString = function(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  };

  /**
   * Is a given value a number?
   *
   * @function (arg1)
   * @public
   * @param {Object}      the object to test,
   * @returns {Boolean}   returns true or false,
   * @since 0.0.0
   */
  overslash.isNumber = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
  };

  /**
   * Is a given value NaN?
   * (NaN is the only number which does not equal itself)
   * (copied from: http://underscorejs.org)
   *
   * @function (arg1)
   * @public
   * @param {Object}      the object to test,
   * @returns {Boolean}   returns true or false,
   * @since 0.0.0
   */
  overslash.isNaN = function(obj) {
    return overslash.isNumber(obj) && obj !== +obj;
  };

  /**
   * Is a given value an odd number?
   *
   * @function (arg1)
   * @public
   * @param {Object}      the object to test,
   * @returns {Boolean}   returns true (odd), false (even) or undefined (not a number),
   * @since 0.0.0
   */
  /* eslint-disable no-void */
  overslash.isOdd = function(obj) {
    var n = obj % 2;
    return obj === parseFloat(obj) ? !!n : void 0;
  };
  /* eslint-enable no-void */


  // --- Object types ----------------------------------------------------------
  /**
   * Is a given variable an object?
   * (copied from: http://underscorejs.org)
   *
   * @function (arg1)
   * @public
   * @param {Object}      the object to test,
   * @returns {Boolean}   returns true or false,
   * @since 0.0.0
   */
  overslash.isObject = function(obj) {
    var type = typeof obj;
    return (type === 'function' || type === 'object') && !!obj;
  };

  /**
   * Is a given variable a function?
   *
   * @function (arg1)
   * @public
   * @param {Object}      the object to test,
   * @returns {Boolean}   returns true or false,
   * @since 0.0.0
   */
  overslash.isFunction = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
  };

  /**
   * Is a given value an array?
   * (Delegates to ECMA5's native Array.isArray.)
   * (copied from: http://underscorejs.org)
   *
   * @function (arg1)
   * @public
   * @param {Object}      the object to test,
   * @returns {Boolean}   returns true or false,
   * @since 0.0.0
   */
  overslash.isArray = Array.isArray || /* istanbul ignore next */ function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  /**
   * Is a given value a Math object?
   *
   * @function (arg1)
   * @public
   * @param {Object}      the object to test,
   * @returns {Boolean}   returns true or false,
   * @since 0.0.0
   */
  overslash.isMath = /* istanbul ignore next */ function(obj) {
    return Object.prototype.toString.call(obj) === '[object Math]';
  };

  /**
   * Is a given value a Date?
   *
   * @function (arg1)
   * @public
   * @param {Object}      the object to test,
   * @returns {Boolean}   returns true or false,
   * @since 0.0.0
   */
  overslash.isDate = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
  };

  /**
   * Is a given array, string or object empty?
   *
   * @function (arg1)
   * @public
   * @param {Object}      the object to test,
   * @returns {Boolean}   returns true or false,
   * @since 0.0.0
   */
  /* eslint-disable no-restricted-syntax, no-prototype-builtins */
  overslash.isEmpty = function(obj) {
    var key;
    if (obj === null) return true;
    if (overslash.isArray(obj) || overslash.isString(obj)) return obj.length === 0;
    // Check that the object has no enumerable own-properties.
    // If ECMAScript 5 support only: 'return Object.keys(obj).length === 0;'
    // Otherwise, parse all properties.
    for (key in obj) if (obj.hasOwnProperty(key)) return false;
    return true;
  };
  /* eslint-enable no-restricted-syntax, no-prototype-builtins */

  // Current version of the library:
  overslash.VERSION = '0.0.2';

  // Returns the library name:
  return overslash;
}));
