/*! ****************************************************************************
 * Overslash v1.0.3
 *
 * A tiny modular Javascript utility library.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2020 Mobilabs <contact@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * Built from ES6lib v0.0.12.
 * ************************************************************************** */
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
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
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
    // This is a hack to attach the lib to the browser root when this lib is
    // included inside another lib and the whole is browserifyied:
    /* eslint-disable-next-line no-param-reassign */
    if (root.Overslash === null) root.Overslash = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.Overslash = factory(root);
  }
}(this, (root) => {
  'use strict';

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
    // START OF IIFE


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
    // START OF IIFE

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
    Overslash.VERSION = '1.0.3';


    // Extends Overslash with new static methods.
    // (see folder methods)

    // END OF IIFE
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
    // START OF IIFE


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
    // START OF IIFE


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

    // END OF IIFE
  }());
  /* - */

  /** **************************************************************************
   *
   * Extends overslash with operations on Objects (optional).
   *
   * objectOps.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . clone                       clones a literal object or an array,
   *  . extend                      extends a given object with all the properties,
   *  . keys                        retrieves all the names of the object's,
   *  . forPropIn                   parses all the names of the object's,
   *  . assign                      extends source with target(s),
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
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // START OF IIFE


    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Public function ------------------------------------------------------

    extend(Overslash, {

      /**
       * Clones a literal object or an array.
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to clone,
       * @returns {Object}    returns the cloned object,
       * @since 0.0.0
       */
      /* eslint-disable no-void, no-restricted-syntax */
      clone(obj) {
        const clone = this.isArray(obj) ? [] : {};
        let prop;

        if (!this.isObject(obj)) return void 0;

        for (prop in obj) {
          if (this.isArray(obj[prop])) {
            clone[prop] = this.clone(obj[prop]);
          } else if (this.isObject(obj[prop])) {
            clone[prop] = this.extend(obj[prop]);
          } else {
            clone[prop] = obj[prop];
          }
        }
        return clone;
      },
      /* eslint-enable no-void, no-restricted-syntax */

      /**
       * Extends a given object with all the properties in passed-in object(s).
       * (copied from: http://underscorejs.org and added recursivity)
       *
       * @method (arg1)
       * @public
       * @param {Object}      the objects to merge,
       * @returns {Object}    the resulting object,
       * @since 0.0.0
       */
      /* eslint-disable no-restricted-syntax, no-param-reassign, prefer-rest-params */
      extend(obj) {
        let source
          , prop
          ;

        if (!this.isObject(obj)) return obj;

        for (let i = 1; i < arguments.length; i++) {
          source = arguments[i];
          for (prop in source) {
            // if (!this.isArray(arguments[i][prop]) && this.isObject(arguments[i][prop])) {
            if (this.isLiteralObject(arguments[i][prop])) {
              obj[prop] = obj[prop] !== undefined ? obj[prop] : {};
              this.extend(obj[prop], arguments[i][prop]);
            } /* istanbul ignore next */ else if (hasOwnProperty.call(source, prop)) {
              obj[prop] = this.isArray(source[prop])
                ? this.clone(source[prop])
                : source[prop];
            }
          }
        }
        return obj;
      },
      /* eslint-enable no-restricted-syntax, no-param-reassign, prefer-rest-params */

      /**
       * Retrieves all the names of the object's own enumerable properties.
       * (ECMAScript 5 only).
       *
       * @method (arg1)
       * @public
       * @param {Object}      the input object,
       * @returns {Array}     returns the names of the keys,
       * @since 0.0.0
       */
      keys(obj) {
        return Object.keys(obj);
      },

      /**
       * Parses all the names of the object's own enumerable properties.
       * (replace for...in statement).
       * (ECMAScript 5 only).
       *
       * @method (arg1, arg2)
       * @public
       * @param {Object}      the input object,
       * @returns {Array}     returns the names of the keys,
       * @since 0.0.0
       */
      forPropIn(obj, callback) {
        // var keys = overslash.keys(obj);
        this.keys(obj).forEach((key) => {
          /* istanbul ignore next */
          if ({}.hasOwnProperty.call(obj, key)) {
            callback(key);
          }
        });
      },

      /**
       * Extends source with target(s) while preserving the assessors.
       *
       * Nota:
       * Clones a literal object at the first level while preserving the
       * assessors (get and set). This should be the prefered method to Clones
       * a literal object or a prototype that includes get and set assessors.
       *
       * Example:
       * To clone a function prototype:
       * var a = _.assign({}, fn.prototype);  // clone the original prototype,
       * _.assign(fn2.prototype, a);          // assign it to fn2.prototype,
       *
       * @method (...arg1)
       * @public
       * @param {Object}      the objects to 'fusion',
       * @returns {Object}    returns the reassigned object,
       * @since 0.0.0
       */
      /* eslint-disable no-param-reassign, no-loop-func, prefer-rest-params */
      assign() {
        const target = arguments[0];
        let source
          , descriptors
          , i
          ;

        for (i = 1; i < arguments.length; i++) {
          source = arguments[i];
          descriptors = Object.keys(source).reduce((props, key) => {
            props[key] = Object.getOwnPropertyDescriptor(source, key);
            return props;
          }, {});
        }
        Object.defineProperties(target, descriptors);
        return target;
      },
      /* eslint-enable no-param-reassign, no-loop-func, prefer-rest-params */
    });

    // END OF IIFE
  }());
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  /** **************************************************************************
   *
   * Extends overslash with operations on Arrays (optional).
   *
   * arraysOps.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . contains                    returns true if the array contains the passed-in value,
   *  . flatten                     flattens a nested array,
   *  . max                         returns the maximum value in the array,
   *  . min                         returns the minimum value in the array,
   *  . share                       returns the list of the elements in common,
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
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // START OF IIFE


    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Public function ------------------------------------------------------

    extend(Overslash, {

      /**
       * Returns true if the array contains the passed-in value.
       *
       * Note:
       * The array must be a first-level only array.
       *
       * @method(arg1, arg2)
       * @public
       * @param {Object}      the array,
       * @param {Number/string} the passed-in value,
       * @returns {Boolean}   returns true if the array contains the value,
       * @since 0.0.0
       */
      contains(list, value) {
        // jreturn list.indexOf(value) === -1 ? false : true;
        return list.indexOf(value) !== -1;
      },

      /**
       * Flattens a nested array (the nesting can be to any depth).
       *
       * @method (arg1, [arg2])
       * @public
       * @param {Array}       the input object,
       * @param {Boolean}     the flattened level, false deep, true only first level,
       * @returns {Array}     returns the flattened array or void(0),
       * @since 0.0.0
       */
      /* eslint-disable no-void, no-plusplus, prefer-spread */
      flatten(obj, shallow) {
        let o = []
          , idx = 0
          , i
          ;

        if (!this.isArray(obj)) return void 0;
        if (shallow) return [].concat.apply([], obj);

        for (i = 0; i < obj.length; i++) {
          if (this.isArray(obj[i])) {
            o = o.concat(this.flatten(obj[i]));
            idx = o.length;
          } else {
            o[idx++] = obj[i];
          }
        }
        return o;
      },
      /* eslint-enable no-void, no-plusplus, prefer-spread */

      /**
       * Returns the maximum value in the array.
       *
       * @method (arg1)
       * @public
       * @param {Array}       the input object,
       * @returns {Number}    returns the max value or void(0),
       * @since 0.0.0
       */
      /* eslint-disable no-void */
      max(obj) {
        let max = null
          , i
          ;

        if (!this.isArray(obj)) return void 0;

        const o = this.flatten(obj);
        for (i = 0; i < o.length; i++) {
          if (max === null || max < o[i]) {
            max = typeof o[i] === 'number' ? o[i] : max;
          }
        }
        return max !== null ? max : void 0;
      },
      /* eslint-enable no-void */

      /**
       * Returns the minimum value in the array.
       *
       * @method (arg1)
       * @public
       * @param {Array}       the input object,
       * @returns {Number}    returns the min value or void(0),
       * @since 0.0.0
       */
      /* eslint-disable no-void */
      min(obj) {
        let min = null
          , i
          ;

        if (!this.isArray(obj)) return void 0;

        const o = this.flatten(obj);
        for (i = 0; i < o.length; i++) {
          if (min === null || min > o[i]) {
            min = typeof o[i] === 'number' ? o[i] : min;
          }
        }
        return min !== null ? min : void 0;
      },
      /* eslint-enable no-void */

      /**
       * Returns the list of the elements the passed-in arrays have in common.
       *
       * @method (arg)
       * @public
       * @param {Array}       n arrays to compare,
       * @returns {Array}     returns the list of elements in common or empty,
       * @since 0.0.0
       */
      share(array) {
        const result = [];
        let item
          , i
          , j
          ;

        // for (i = 0; i < array.length; i++) {
        //   item = array[i];
        //   if (overslash.contains(result, item)) continue;
        //   for (j = 1; j < arguments.length; j++) {
        //     if (!overslash.contains(arguments[j], item)) break;
        //   }
        //   if (j === arguments.length) result.push(item);
        // }
        for (i = 0; i < array.length; i++) {
          item = array[i];
          if (!this.contains(result, item)) {
            for (j = 1; j < arguments.length; j++) {
              /* eslint-disable-next-line prefer-rest-params */
              if (!this.contains(arguments[j], item)) {
                break;
              }
            }
            if (j === arguments.length) {
              result.push(item);
            }
          }
        }
        return result;
      },
    });

    // END OF IIFE
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */

  /** **************************************************************************
   *
   * Extends overslash with function types (optional).
   *
   * functions.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . ...,
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
    // START OF IIFE


    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Public function ------------------------------------------------------

    extend(Overslash, {
      //
    });

    // END OF IIFE
  }());
  /* - */

  /** **************************************************************************
   *
   * Extends overslash with operations on Tokens (optional).
   *
   * tokens.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . token                       returns a unique string pattern in base 36,
   *  . makeid                      returns a unique string pattern,
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
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // START OF IIFE


    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Public function ------------------------------------------------------

    extend(Overslash, {

      /**
       * Returns a unique string pattern in base 36 ([0-9a-z]).
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {String}    returns a random string,
       * @since 0.0.0
       */
      token() {
        return Math.random().toString(36).substr(2);
      },

      /**
       * Returns a unique string pattern with a predefined length.
       *
       * @method ([arg1])
       * @public
       * @param {Number}      the length of the string. Default is 16 chars,
       * @returns {String}    returns a random string from the charset defined in c,
       * @since 0.0.0
       */
      makeid(l) {
        const ll = this.isNumber(l) ? l : 16
            , c  = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
            ;

        let id = '';
        for (let i = 0; i < ll; i++) {
          id += c.charAt(Math.floor(Math.random() * c.length));
        }
        return id;
      },
    });

    // END OF IIFE
  }());
  /* - */

  // Returns the library name:
  return Overslash;
}));
