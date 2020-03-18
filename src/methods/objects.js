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
/* global extend */
/* eslint-disable no-underscore-dangle */

'use strict';

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
