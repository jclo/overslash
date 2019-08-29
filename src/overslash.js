/* ***************************************************************************
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
 * @namespace    overslash
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* eslint-disable one-var, semi-style */

'use strict';

(function() {
  // IIFE

  // -- Module path


  // -- Local modules


  // -- Local constants
  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  const previousoverslash = root.overslash;


  // -- Local variables


  // -- Public Static Methods ------------------------------------------------

  overslash = {

    /**
     * Returns a reference to this overslash object.
     *
     * Nota:
     * Running overslash in noConflic mode, returns the overslash variable to its
     _ previous owner.
     *
     * @function ()
     * @public
     * @param {}            -,
     * @returns {String}    returns the overslash object,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    noConflict() {
      /* eslint-disable-next-line no-param-reassign */
      root.overslash = previousoverslash;
      return this;
    },
  };

  // Attaches a constant to ESLib that provides the version of the lib.
  overslash.VERSION = '{{lib:version}}';
}());
