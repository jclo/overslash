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

'use strict';

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
