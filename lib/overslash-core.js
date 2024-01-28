// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
(function(root, factory) {
  'use strict';

  /* c8 ignore start */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.Overslash = factory(root);
  }
  /* c8 ignore stop */
}(this, (root) => {
  'use strict';

  /** **************************************************************************
   * _head provides the list of the constants that are defined at the global
   * level of this module and are accessible to all. So, they are considered
   * as reserved words for this library.
   * ************************************************************************ */
  /* eslint-disable one-var, no-unused-vars, semi-style */

  let Overslash
    , extend
    ;

  /* eslint-enable one-var, no-unused-vars, semi-style */

  /** **************************************************************************
   *
   * Provides the function 'extend' that is used to fill the object tree with
   * the public static or object methods when the Javascript VM browses the
   * library from the top to the bottom.
   *
   * extend.js is just a literal object that contains a set of functions.
   * It can't be instantiated.
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
    // START OF IIFE


    // -- Module Path


    // -- Local Modules


    // -- Local Constants


    // -- Local Variables


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

    // END OF IIFE
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
   * Private Static Methods:
   *  . _setTestMode                returns internal objects for testing purpose,
   *
   *
   * Public Static Methods:
   *  . noConflict                  returns a reference to this Overslash object,
   *  . whoami                      returns the library name and version,
   *
   *
   *  Primitives types (mandatory):
   *  . isUndefined                 is a given variable undefined?
   *  . isNull                      is a given value null?
   *  . isBoolean                   is a given value a boolean?
   *  . isString                    is a given value a string?
   *  . isNumber                    is a given value a number?
   *  . isNaN                       is a given value NaN?
   *  . isOdd                       is a given value an odd number?
   *
   * Object types (mandatory):
   *  . isObject                    is a given variable an object?
   *  . isLiteralObject             is a given variable a literal object?
   *  . isFunction                  is a given variable a function?
   *  . isArray                     is a given value an array?
   *  . isMath                      is a given value a Math object?
   *  . isDate                      is a given value a Date?
   *  . isEmpty                     is a given array, string or object empty?
   *
   * Operations on Objects (optional):
   *  . clone                       clones a literal object or an array,
   *  . extend                      extends a given object with all the properties,
   *  . keys                        retrieves all the names of the object's,
   *  . forPropIn                   parses all the names of the object's,
   *  . assign                      extends source with target(s),
   *
   * Operations on Arrays (optional):
   *  . contains                    returns true if the array contains the passed-in value,
   *  . flatten                     flattens a nested array,
   *  . max                         returns the maximum value in the array,
   *  . min                         returns the minimum value in the array,
   *  . share                       returns the list of the elements in common,
   *  . pull                        removes the matching items from the passed-in array,
   *  . include                     returns the list of items included in the passed-in array,
   *  . partition                   returns matching and non matching criteria,
   *
   * Operations on functions (optional):
   *  . none,
   *
   * Operations on tokens (optional):
   *  . token                       returns a unique string pattern in base 36,
   *  . makeid                      returns a unique string pattern,
   *
   * Operations on csv blocks (optional):
   *  . csv2array                   converts an csv block to an array or arrays,
   *
   * Others (optional):
   *  . delay                       executes the passed-in function after a delay,
   *  . inRange                     checks if a number is between a range of numbers,
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
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // START OF IIFE


    // -- Module Path


    // -- Local Modules


    // -- Local Constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousOverslash = root.Overslash;


    // -- Local Variables


    // -- Public ---------------------------------------------------------------

    Overslash = {

      // Useful to retrieve the library name and version when it is
      // embedded in another library as an object:
      _library: { name: 'Overslash', version: '1.0.7' },


      // -- Private Static Methods ---------------------------------------------

      /**
       * Returns the internal objects for testing purpose.
       * (must not be deleted)
       *
       * @method ()
       * @private
       * @param {}            -,
       * @returns {Object}    returns a list of internal objects,
       * @since 0.0.0
       */
      _setTestMode() {
        return [];
      },


      // -- Public Static Methods ----------------------------------------------

      /**
       * Returns a reference to this Overslash object.
       * (must not be deleted)
       *
       * Nota:
       * Running Overslash in noConflict mode, returns the Overslash variable to its
       * _ previous owner.
       *
       * @function ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the Overslash object,
       * @since 0.0.0
       */
      noConflict() {
        /* eslint-disable-next-line no-param-reassign */
        root.Overslash = previousOverslash;
        return this;
      },

      /**
       * Returns the library name and version.
       * (must not be deleted)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the library name and version,
       * @since 0.0.0
       */
      whoami() {
        return this._library;
      },
    };

    // Attaches constants to Overslash that provide name and version of the lib.
    Overslash.NAME = 'Overslash';
    Overslash.VERSION = '1.0.7';


    // Extends Overslash with new static methods.
    // extend(Overslash, {
    //   // see the methods folder.
    // });


    // END OF IIFE
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */

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
    // START OF IIFE


    // -- Module Path


    // -- Local Modules


    // -- Local Constants


    // -- Local Variables


    // -- Public Static Methods ------------------------------------------------

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


    // END OF IIFE
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
   * @namespace    -
   * @dependencies none
   * @exports      -,
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable no-underscore-dangle */

  (function() {
    // START OF IIFE


    // -- Module Path


    // -- Local Modules


    // -- Local Constants


    // -- Local Variables


    // -- Public Static Methods ------------------------------------------------

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


    // END OF IIFE
  }());
  /* eslint-enable no-underscore-dangle */

  // Returns the library name:
  return Overslash;
}));
