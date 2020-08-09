/** **************************************************************************
 *
 * Extends overslash with non classified functions yet!
 *
 * other.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Static Methods:
 *  . delay                       executes the passed-in function after a delay,
 *  . inRange                     checks if a number is between a range of numbers,
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
     * Executes the passed-in function after a delay.
     *
     * @method (arg1, arg2, ...args)
     * @public
     * @param {Function}    the function to execute,
     * @param {Number}      the delay in milliseconds,
     * @param {...Args}     the arguments to pass to the function,
     * @returns {}          -,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    delay(fn, delay, ...args) {
      setTimeout(() => {
        fn(...args);
      }, delay);
    },

    /**
     * Checks if a number is between a range of numbers.
     *
     * @method (arg1, arg2, arg3)
     * @public
     * @param {Number}      the number to test,
     * @param {Number}      the minimal value (if omitted is equal to 0),
     * @param {Number}      the maximal value,
     * @returns {Boolean}   returns true if the condition matches,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    inRange(num, start, end) {
      let s = start
        , e = end
        ;

      if (!e) {
        e = start;
        s = 0;
      }
      return num >= s && num <= e;
    },
  });


  // END OF IIFE
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
