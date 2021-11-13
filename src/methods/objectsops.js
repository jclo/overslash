/** **************************************************************************
 *
 *  Extends overslash with operations on Objects (optional).
 *
 * objectsops.js is just a literal object that contains a set of functions. It
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
 * @namespace    -
 * @dependencies none
 * @exports      -,
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* global extend, Overslash */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

(function() {
  // START OF IIFE


  // -- Module Path


  // -- Local Modules


  // -- Local Constants


  // -- Local Variables


  // -- Public Static Methods ------------------------------------------------

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
          } else if (hasOwnProperty.call(source, prop)) {
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
/* eslint-enable one-var, semi-style, no-underscore-dangle */
