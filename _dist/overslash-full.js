/**
 * overslash-full v0.0.0
 *
 * A tiny modular Javascript utility library.
 * Copyright (c) 2017 Jclo <jclo@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 */
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"], one-var: 0 */
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
    /* eslint-disable no-param-reassign */
    root.overslash = factory(root);
    /* eslint-enable no-param-reassign */
  }
}(this, function() {
  'use strict';

  var overslash
    , _
    ;

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
  _ = overslash;


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
  _.isUndefined = function(obj) {
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
  _.isNull = function(obj) {
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
  _.isBoolean = function(obj) {
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
  _.isString = function(obj) {
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
  _.isNumber = function(obj) {
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
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
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
  _.isOdd = function(obj) {
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
  _.isObject = function(obj) {
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
  _.isFunction = function(obj) {
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
  _.isArray = Array.isArray || /* istanbul ignore next */ function(obj) {
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
  _.isMath = /* istanbul ignore next */ function(obj) {
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
  _.isDate = function(obj) {
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
  _.isEmpty = function(obj) {
    var key;
    if (obj === null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    // Check that the object has no enumerable own-properties.
    // If ECMAScript 5 support only: 'return Object.keys(obj).length === 0;'
    // Otherwise, parse all properties.
    for (key in obj) if (obj.hasOwnProperty(key)) return false;
    return true;
  };
  /* eslint-enable no-restricted-syntax, no-prototype-builtins */


  // --- Operations on Objects (optional) --------------------------------------

  /**
   * Clones a literal object or an array.
   *
   * @function(arg1)
   * @public
   * @param {Object}    the object to clone,
   * @returns {Object}  returns the cloned object,
   * @since 0.0.0
   */
  /* eslint-disable no-void, no-restricted-syntax */
  _.clone = function(obj) {
    var clone = _.isArray(obj) ? [] : {}
      , prop
      ;

    if (!_.isObject(obj)) return void 0;

    for (prop in obj) {
      if (_.isArray(obj[prop])) {
        clone[prop] = _.clone(obj[prop]);
      } else if (_.isObject(obj[prop])) {
        clone[prop] = _.extend(obj[prop]);
      } else {
        clone[prop] = obj[prop];
      }
    }
    return clone;
  };
  /* eslint-enable no-void, no-restricted-syntax */

  /**
   * Extends a given object with all the properties in passed-in object(s).
   * (copied from: http://underscorejs.org and added recursivity)
   *
   * @function (arg1)
   * @public
   * @param {Object}      the objects to merge,
   * @returns {Object}    the resulting object,
   * since 0.0.0
   */
  /* eslint-disable no-restricted-syntax, no-param-reassign */
  _.extend = function(obj) {
    var source
      , prop
      , i
      ;

    if (!_.isObject(obj)) return obj;

    for (i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (!_.isArray(arguments[i][prop]) && _.isObject(arguments[i][prop])) {
          obj[prop] = obj[prop] !== undefined ? obj[prop] : {};
          _.extend(obj[prop], arguments[i][prop]);
        } else if (hasOwnProperty.call(source, prop)) {
          obj[prop] = _.isArray(source[prop]) ? _.clone(source[prop]) : source[prop];
        }
      }
    }
    return obj;
  };
  /* eslint-enable no-restricted-syntax, no-param-reassign */

  /**
   * Retrieves all the names of the object's own enumerable properties.
   * (ECMAScript 5 only).
   *
   * @function (arg1)
   * @public
   * @param {Object}      the input object,
   * @returns {Array}     returns the names of the keys,
   * @since 0.0.0
   */
  _.keys = function(obj) {
    return Object.keys(obj);
  };

  /**
   * Parses all the names of the object's own enumerable properties
   * (replace for...in statement).
   * (ECMAScript 5 only).
   *
   * @function (arg1 arg2)
   * @public
   * @param {Object}      the input object,
   * @returns {Array}     returns the names of the keys,
   * @since 0.0.0
   */
  _.forPropIn = function(obj, callback) {
    // var keys = _.keys(obj);
    _.keys(obj).forEach(function(key) {
      if ({}.hasOwnProperty.call(obj, key)) {
        callback(key);
      }
    });
  };


  // --- Operations on Arrays (optional) ---------------------------------------

  /**
   * Returns true if the array contains the passed-in value.
   *
   * Note:
   * The array must be a first-level only array.
   *
   * @function(arg1, arg2)
   * @public
   * @param {Object}    the array,
   * @param {Number/string} the passed-in value,
   * @returns {Boolean} returns true if the array contains the value,
   * @since 0.0.0
   */
  _.contains = function(list, value) {
    // jreturn list.indexOf(value) === -1 ? false : true;
    return list.indexOf(value) !== -1;
  };

  /**
   * Flattens a nested array (the nesting can be to any depth).
   *
   * @function (arg1, [arg2])
   * @public
   * @param {Array}       the input object,
   * @param {Boolean}     the flattened level, false deep, true only first level,
   * @returns {Array}     returns the flattened array or void(0),
   * @since 0.0.0
   */
  /* eslint-disable no-void, no-plusplus */
  _.flatten = function(obj, shallow) {
    var o = []
      , idx = 0
      , i
      ;

    if (!_.isArray(obj)) return void 0;
    if (shallow) return [].concat.apply([], obj);

    for (i = 0; i < obj.length; i++) {
      if (_.isArray(obj[i])) {
        o = o.concat(_.flatten(obj[i]));
        idx = o.length;
      } else {
        o[idx++] = obj[i];
      }
    }
    return o;
  };
  /* eslint-enable no-void, no-plusplus */

  /**
   * Returns the maximum value in the array.
   *
   * @function (arg1)
   * @public
   * @param {Array}       the input object,
   * @returns {Number}    returns the max value or void(0),
   * @since 0.0.0
   */
  /* eslint-disable no-void */
  _.max = function(obj) {
    var max = null
      , o
      , i
      ;

    if (!_.isArray(obj)) return void 0;

    o = _.flatten(obj);
    for (i = 0; i < o.length; i++) {
      if (max === null || max < o[i]) {
        max = typeof o[i] === 'number' ? o[i] : max;
      }
    }
    return max !== null ? max : void 0;
  };
  /* eslint-enable no-void */

  /**
   * Returns the minimum value in the array.
   *
   * @function (arg1)
   * @public
   * @param {Array}       the input object,
   * @returns {Number}    returns the min value or void(0),
   * @since 0.0.0
   */
   /* eslint-disable no-void */
  _.min = function(obj) {
    var min = null
      , o
      , i
      ;

    if (!_.isArray(obj)) return void 0;

    o = _.flatten(obj);
    for (i = 0; i < o.length; i++) {
      if (min === null || min > o[i]) {
        min = typeof o[i] === 'number' ? o[i] : min;
      }
    }
    return min !== null ? min : void 0;
  };
  /* eslint-enable no-void */

  /**
   * Returns the list of the elements the passed-in arrays have in common.
   *
   * @function (arg)
   * @public
   * @param {Array}       n arrays to compare,
   * @returns {Array}     returns the list of elements in common or empty,
   * @since 0.1
   */
  _.share = function(array) {
    var result = []
      , item
      , i
      , j
      ;

    // for (i = 0; i < array.length; i++) {
    //   item = array[i];
    //   if (_.contains(result, item)) continue;
    //   for (j = 1; j < arguments.length; j++) {
    //     if (!_.contains(arguments[j], item)) break;
    //   }
    //   if (j === arguments.length) result.push(item);
    // }
    for (i = 0; i < array.length; i++) {
      item = array[i];
      if (!_.contains(result, item)) {
        for (j = 1; j < arguments.length; j++) {
          if (!_.contains(arguments[j], item)) {
            break;
          }
        }
        if (j === arguments.length) {
          result.push(item);
        }
      }
    }
    return result;
  };


  // --- Operations on Functions (optional) ------------------------------------
  //


  // --- Miscellaneous (optional) ----------------------------------------------
  /**
   * Returns a unique string pattern in base 36 ([0-9a-z]).
   *
   * @function ()
   * @public
   * @param {}            -,
   * @returns             -,
   * @since 0.0.0
   */
  _.nop = /* istanbul ignore next */ function() {
    //
  };

  /**
   * Returns a unique string pattern in base 36 ([0-9a-z]).
   *
   * @function ()
   * @public
   * @param {}            -,
   * @returns {String}    returns a random string,
   * @since 0.0.0
   */
  _.token = function() {
    return Math.random().toString(36).substr(2);
  };

  /**
   * Returns a unique string pattern with a predefined length.
   *
   * @function ([arg1])
   * @public
   * @param {Number}      the length of the string. Default is 16 chars,
   * @returns {String}    returns a random string from the charset defined in c,
   * @since 0.0.0
   */
  _.makeid = function(l) {
    var ll = _.isNumber(l) ? l : 16
      , c  = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
      , id = ''
      , i
      ;

    for (i = 0; i < ll; i++) {
      id += c.charAt(Math.floor(Math.random() * c.length));
    }
    return id;
  };

  /**
   * Converts an csv block to an array or arrays.
   *
   * @function (arg1, arg2)
   * @public
   * @param {String}      a csv block,
   * @param {String}      [optional] the csv delimeter. By default, it is the comma,
   * @returns {Array}     returns the csv block converted to an array of arrays of elements,
   * @throws {String}     throws an error if the csv line is malformed,
   * @since 0.0.6
   */
  /* eslint-disable no-param-reassign, no-plusplus */
  _.csv2array = function(data, delimeter) {
    var newline = '\n'
      , EOF = ''
      , value
      , array
      , row
      , c
      , i
      ;

    if (!data) {
      throw new Error('The csv line argument is missing!');
    }
    if (typeof (data) !== 'string') {
      throw new Error('The csv line argument is not a string!');
    }

    // Set the Delimeter:
    if (!delimeter || typeof (delimeter) !== 'string' || delimeter.length > 1) {
      delimeter = ',';
    }

    i = 0;
    row = 0;
    c = data.charAt(i);
    array = [];

    // Parse char until the end of the string:
    while (c !== EOF) {
      // Skip the whitespaces:
      while (c === ' ' || c === '\t' || c === '\r') {
        c = data.charAt(++i);
      }

      // Extract the value: - "abc"""
      value = '';
      if (c === '"') {
        // Value enclosed by double-quotes:
        c = data.charAt(++i);

        // Parse until ending double quote found:
        do {
          if (c !== '"') {
            // Read a regular character and go to the next character:
            value += c;
            c = data.charAt(++i);
          }

          if (c === '"') {
            // Check for successive escaped double-quote:
            do {
              if (data.charAt(i + 1) === '"') {
                // This is an escaped double-quote.
                // Add a double-quote to the value, and move two characters ahead:
                value += '"';
                i += 2;
                c = data.charAt(i);
              } else {
                // This is not an escaped double-quote.
                // Break the loop:
                break;
              }
            } while (c === '"');
          }
        } while (c !== EOF && c !== '"');

        // Ending double quote reached?
        if (c === EOF) {
          /* istanbul ignore next */
          throw new Error('Unexpected end of data, double-quote expected!');
        }

        // Go to the next character:
        c = data.charAt(++i);
      } else {
        // Value without quotes:
        while (c !== EOF && c !== delimeter && c !== newline && c !== ' ' && c !== '\t' && c !== '\r') {
          value += c;
          c = data.charAt(++i);
        }
        // If the value isn't between two double-quote, it is a number or a float:
        if (value.length > 0) {
          value = parseFloat(value, 10);
        }
      }

      // Add the value to the array:
      if (array.length <= row) {
        array.push([]);
      }
      array[row].push(value);

      // Skip whitespaces:
      while (c === ' ' || c === '\t' || c === '\r') {
        c = data.charAt(++i);
      }

      // Go to the next row or column:
      if (c === delimeter) {
        // col++;
      } else if (c === newline) {
        // col = 0;
        row += 1;
      } else if (c !== EOF) {
        // Unexpected character:
        /* istanbul ignore next */
        throw new Error('Delimeter expected after character ' + i);
      }

      // Go to the next character:
      c = data.charAt(++i);
    }

    return array;
  };
  /* eslint-enable no-param-reassign, no-plusplus */

// Current version of the library.
  overslash.VERSION = '0.0.0';

  // Returns the library name:
  return overslash;
}));
