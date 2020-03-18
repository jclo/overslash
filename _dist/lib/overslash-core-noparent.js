/** ****************************************************************************
 * Overslash v1.0.2
 *
 * A tiny modular Javascript utility library.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2020 Mobilabs <contact@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * Built from ES6lib v0.0.11-beta.1.
 * ************************************************************************** */
// ESLint declarations
/* global */
/* eslint strict: ["error", "function"] */
(function(root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
    // This is a hack to attach the lib to the browser root when this lib is
    // included inside another lib and the whole is browserifyied:
    /* eslint-disable-next-line no-param-reassign */
    if (root.overslash === null) root.overslash = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.Overslash = factory(root);
  }
}({{lib:parent}}, (root) => {
  // This is the list of the constants that are defined at the global level of
  // this module and are accessible to all. So, they are considered as reserved
  // words for this library.
  /* eslint-disable one-var, semi-style */
  let Overslash
    , extend
    ;
  /* eslint-enable one-var, semi-style */

  /** **************************************************************************
   *
   * Provides the function 'extend' that is used to fill the object tree with
   * the public static or object methods when the Javascript VM browses the
   * library from the top to the bottom.
   *
   * extend.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . extend                      extends the passed-in object with new methods,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* - */

  (function() {
    // IIFE_START

    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Public function ------------------------------------------------------

    /**
     * Extends the passed-in object with new methods.
     *
     * Nota: this function mutates object.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the object to extend,
     * @param {Object}        an object containing a set of methods,
     * @returns {}            -,
     * @since 0.0.0
     */
    extend = function(object, methods) {
      const keys = Object.keys(methods);

      for (let i = 0; i < keys.length; i++) {
        /* eslint-disable-next-line no-param-reassign */
        object[keys[i]] = methods[keys[i]];
      }
    };

    // IIFE_END
  }());
  /* - */

  /** **************************************************************************
   *
   * A tiny modular Javascript utility library.
   *
   * overslash.js is based on a variation of the basic.js pattern. The
   * properties are added dynamically. Thus, it can be divided in several
   * chunks of properties and the build can produces several versions of the
   * library by including or not some chunks.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
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
   *
   *
   * @namespace    Overslash
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE_START

    // -- Module path


    // -- Local modules


    // -- Local constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousOverslash = root.Overslash;


    // -- Local variables


    // -- Public Static Methods ------------------------------------------------

    Overslash = {

      /**
       * Returns a reference to this Overslash object.
       *
       * Nota:
       * Running Overslash in noConflict mode, returns the Overslash variable to its
       * _ previous owner.
       *
       * @function ()
       * @public
       * @param {}            -,
       * @returns {String}    returns the Overslash object,
       * @since 0.0.0
       */
      /* istanbul ignore next */
      noConflict() {
        /* eslint-disable-next-line no-param-reassign */
        root.Overslash = previousOverslash;
        return this;
      },
    };

    // Attaches a constant to Overslash that provides the version of the lib.
    Overslash.VERSION = '1.0.2';


    // Extends Overslash with new static methods.
    // (see folder methods)

    // IIFE_END
  }());
  /* eslint-enable one-var, semi-style */

  /** **************************************************************************
   *
   * Extends overslash with primitives types.
   *
   * primitives.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . isUndefined                 is a given variable undefined?
   *  . isNull                      is a given value null?
   *  . isBoolean                   is a given value a boolean?
   *  . isString                    is a given value a string?
   *  . isNumber                    is a given value a number?
   *  . isNaN                       is a given value NaN?
   *  . isOdd                       is a given value an odd number?
   *
   *
   *
   * @namespace    Overslash
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* - */

  (function() {
    // IIFE_START

    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Public function ------------------------------------------------------

    extend(Overslash, {

      /**
       * Is a given variable undefined?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isUndefined(obj) {
        return obj === undefined;
      },

      /**
       * Is a given value null?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isNull(obj) {
        return obj === null;
      },

      /**
       * Is a given value a boolean?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isBoolean(obj) {
        return obj === true || obj === false || Object.prototype.toString.call(obj) === '[object Boolean]';
      },

      /**
       * Is a given value a string?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
      },

      /**
       * Is a given value a number?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isNumber(obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
      },

      /**
       * Is a given value NaN?
       * (NaN is the only number which does not equal itself)
       * (copied from: http://underscorejs.org)
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isNaN(obj) {
        return this.isNumber(obj) && obj !== +obj;
      },

      /**
       * Is a given value an odd number?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true (odd), false (even) or undefined (not a number),
       * @since 0.0.0
       */
      /* eslint-disable no-void */
      isOdd(obj) {
        const n = obj % 2;
        return obj === parseFloat(obj) ? !!n : void 0;
      },
      /* eslint-enable no-void */
    });

    // IIFE_END
  }());
  /* - */

  /** **************************************************************************
   *
   * Extends overslash with object types.
   *
   * objects.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . isObject                    is a given variable an object?
   *  . isLiteralObject             is a given variable a literal object?
   *  . isFunction                  is a given variable a function?
   *  . isArray                     is a given value an array?
   *  . isMath                      is a given value a Math object?
   *  . isDate                      is a given value a Date?
   *  . isEmpty                     is a given array, string or object empty?
   *
   *
   *
   * @namespace    Overslash
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable no-underscore-dangle */

  (function() {
    // IIFE_START

    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Public function ------------------------------------------------------

    extend(Overslash, {

      /**
       * Is a given variable an object?
       * (copied from: http://underscorejs.org)
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isObject(obj) {
        const type = typeof obj;
        return (type === 'function' || type === 'object') && !!obj;
      },

      /**
       * Is a given variable a literal object?
       *
       * @method (arg1)
       * @private
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.3
       */
      isLiteralObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
      },

      /**
       * Is a given variable a function?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
      },

      /**
       * Is a given value an array?
       * (Delegates to ECMA5's native Array.isArray.)
       * (copied from: http://underscorejs.org)
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      /* istanbul ignore next */
      isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      },

      /**
       * Is a given value a Math object?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      /* istanbul ignore next */
      isMath(obj) {
        return Object.prototype.toString.call(obj) === '[object Math]';
      },

      /**
       * Is a given value a Date?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isDate(obj) {
        return Object.prototype.toString.call(obj) === '[object Date]';
      },

      /**
       * Is a given array, string or object empty?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      /* eslint-disable no-restricted-syntax, no-prototype-builtins */
      isEmpty(obj) {
        let key;
        if (obj === null) return true;
        if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
        // Check that the object has no enumerable own-properties.
        // If ECMAScript 5 support only: 'return Object.keys(obj).length === 0;'
        // Otherwise, parse all properties.
        for (key in obj) if (obj.hasOwnProperty(key)) return false;
        return true;
      },
      /* eslint-enable no-restricted-syntax, no-prototype-builtins */
    });

    // IIFE_END
  }());
  /* - */

  // Returns the library name:
  return Overslash;
}));
