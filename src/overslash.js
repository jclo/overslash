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
/* global root */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

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
    library: { name: '{{lib:name}}', version: '{{lib:version}}' },


    // -- Private Static Methods ---------------------------------------------

    /**
     * Returns the internal objects for testing purpose.
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
  };

  // Attaches a constant to Overslash that provides the version of the lib.
  Overslash.VERSION = '{{lib:version}}';


  // Extends Overslash with new static methods.
  // extend(Overslash, {
  //   // see the methods folder.
  // });


  // END OF IIFE
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
