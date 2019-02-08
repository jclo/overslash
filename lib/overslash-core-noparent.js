// Based on UMD Lib template v0.8.1
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
/* eslint-disable one-var, semi-style */
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
    // This is a hack to attach the lib to the browser root when this lib is
    // included inside another lib and the whole is browserifyied:
    /* eslint-disable no-param-reassign */
    if (root.overslash === null) root.overslash = factory(root);
    /* eslint-enable no-param-reassign */
  } else {
    // Browser globals.
    /* eslint-disable no-param-reassign */
    root.overslash = factory(root);
    /* eslint-enable no-param-reassign */
  }
}({{lib:parent}}, function(root) {
  'use strict';

  var overslash
    , previousoverslash
    ;

  /** **************************************************************************
   *
   * A tiny modular Javascript utility library.
   *
   * overslash.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Public Functions:
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
   *  . forPropIn         parses all the names of the object's own enumerable properties,
   *  . assign            extends source with target(s) while preserving the assessors,
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
   * Operations on tokens (optional):
   *  . token             returns a unique string pattern in base 36 ([0-9a-z]),
   *  . makeid            returns a unique string pattern with a predefined length,
   *
   * Operations on csv blocks (optional):
   *  . csv2array         converts an csv block to an array or arrays,
   *
   * @namespace    overslash
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-undef */

  // -- Private Functions ------------------------------------------------------

  /**
   * Extends a given object with all the properties in passed-in object(s).
   *
   * Nota: mutates obj
   *       The passed-in objects must be literal objects. The method extends
   *       the first object with the properties/values of the n + 1 objects.
   *       If the property values are objects, the method passes their reference.
   *       This method doesn't perform a deep extend.
   *
   * @function (arg1)
   * @private
   * @param {Object}    the objects to merge,
   * @returns {Object}  the resulting object,
   * @since 0.0.0
   */
  /* eslint-disable no-param-reassign */
  var extend = function(obj) {
    var source
      , props
      , i
      , j
      ;

    for (i = 1; i < arguments.length; i++) {
      source = arguments[i];
      props = Object.keys(source);
      for (j = 0; j < props.length; j++) {
        /* istanbul ignore next */
        if (Object.prototype.hasOwnProperty.call(source, props[j])) {
          obj[props[j]] = source[props[j]];
        }
      }
    }
    return obj;
  };
  /* eslint-enable no-restricted-syntax, no-param-reassign */


  // -- Public Functions -------------------------------------------------------

  // Initializes the object:
  overslash = {
    //
  };

  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  previousoverslash = root.overslash;

  // Runs overslash in noConflict mode, returning the overslash variable to its
  // previous owner. Returns a reference to this overslash object.
  /* istanbul ignore next */
  /* eslint-disable no-param-reassign */
  overslash.noConflict = function() {
    root.overslash = previousoverslash;
    return this;
  };
  /* eslint-enable no-param-reassign */

  // Current version of the library:
  overslash.VERSION = '{{lib:version}}';

  /* eslint-enable one-var, semi-style, no-undef */


  // --- Primitives types ------------------------------------------------------
  /* - */

  extend(overslash, {

    /**
     * Is a given variable undefined?
     *
     * @function (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isUndefined: function(obj) {
      return obj === undefined;
    },

    /**
     * Is a given value null?
     *
     * @function (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isNull: function(obj) {
      return obj === null;
    },

    /**
     * Is a given value a boolean?
     *
     * @function (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isBoolean: function(obj) {
      return obj === true || obj === false || Object.prototype.toString.call(obj) === '[object Boolean]';
    },

    /**
     * Is a given value a string?
     *
     * @function (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isString: function(obj) {
      return Object.prototype.toString.call(obj) === '[object String]';
    },

    /**
     * Is a given value a number?
     *
     * @function (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isNumber: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Number]';
    },

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
    isNaN: function(obj) {
      return this.isNumber(obj) && obj !== +obj;
    },

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
    isOdd: function(obj) {
      var n = obj % 2;
      return obj === parseFloat(obj) ? !!n : void 0;
    }
    /* eslint-enable no-void */
  });
  /* - */


  // --- Object types ----------------------------------------------------------
  /* - */

  extend(overslash, {

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
    isObject: function(obj) {
      var type = typeof obj;
      return (type === 'function' || type === 'object') && !!obj;
    },

    /**
     * Is a given variable a literal object?
     *
     * @function (arg1)
     * @private
     * @param {Object}    the object to test,
     * @returns {Boolean} returns true or false,
     * @since 0.0.3
     */
    isLiteralObject: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
    },

    /**
     * Is a given variable a function?
     *
     * @function (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isFunction: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    },

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
    isArray: Array.isArray || /* istanbul ignore next */ function(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    },

    /**
     * Is a given value a Math object?
     *
     * @function (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isMath: /* istanbul ignore next */ function(obj) {
      return Object.prototype.toString.call(obj) === '[object Math]';
    },

    /**
     * Is a given value a Date?
     *
     * @function (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isDate: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Date]';
    },

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
    isEmpty: function(obj) {
      var key;
      if (obj === null) return true;
      if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
      // Check that the object has no enumerable own-properties.
      // If ECMAScript 5 support only: 'return Object.keys(obj).length === 0;'
      // Otherwise, parse all properties.
      for (key in obj) if (obj.hasOwnProperty(key)) return false;
      return true;
    }
    /* eslint-enable no-restricted-syntax, no-prototype-builtins */
  });
  /* - */


  // Returns the library name:
  return overslash;
}));
/* eslint-enable one-var, semi-style */
