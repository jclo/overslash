/** **************************************************************************
 *
 * Extends overslash with operations on Arrays (optional).
 *
 * arrayops.js is just a literal object that contains a set of functions. It
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
 *  . pull                        removes the matching items from the passed-in array,
 *  . include                     returns the list of items included in the passed-in array,
 *  . partition                   returns matching and non matching criteria,
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

    /**
     * Removes the matching items from the passed-in array.
     *
     * @method (arg1, ...args)
     * @public
     * @param {Array}       the passed-in array,
     * @param {...}         the items to remove (list of items or array),
     * @returns {Array}     returns an array with the items removed,
     * @since 0.0.0
     */
    pull(arr, ...args) {
      const values = Array.isArray(args[0]) ? args[0] : args;
      const removed = [];

      let index;
      values.forEach((val) => {
        index = arr.indexOf(val);
        if (index > -1) {
          removed.push(arr.splice(index, 1)[0]);
        }
      });
      return removed;
    },

    /**
     * Returns the list of items included in the passed-in array.
     *
     * @method (arg1, ...args)
     * @public
     * @param {Array}       the passed-in array,
     * @param {...}         the items to test (list of items or array),
     * @returns {Array}     returns an array with the matching items,
     * @since 0.0.0
     */
    include(arr, ...args) {
      const values = Array.isArray(args[0]) ? args[0] : args;
      return values.filter((val) => arr.indexOf(val) > -1);
    },

    /**
     * Returns matching and non matching criteria.
     *
     * The first item in the returned array is an array of items that match
     * the criteria, and the second is items that don’t.
     *
     * @method (arg1, criteria)
     * @public
     * @param {Array}       the passed-in array,
     * @param {Function}    the matching criteria functions,
     * @returns {Array}     returns an array of matching and non matching items,
     * @since 0.0.0
     */
    partition(arr, criteria) {
      return [
        arr.filter((item) => criteria(item)),
        arr.filter((item) => !criteria(item)),
      ];
    },
  });


  // END OF IIFE
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
