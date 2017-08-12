
  // --- Operations on Arrays (optional) ---------------------------------------

  /**
   * Returns true if the array contains the passed-in value.
   *
   * Note:
   * The array must be a first-level only array.
   *
   * @function(arg1, arg2)
   * @public
   * @param {Object}    the array,
   * @param {Number/string} the passed-in value,
   * @returns {Boolean} returns true if the array contains the value,
   * @since 0.0.0
   */
  overslash.contains = function(list, value) {
    // jreturn list.indexOf(value) === -1 ? false : true;
    return list.indexOf(value) !== -1;
  };

  /**
   * Flattens a nested array (the nesting can be to any depth).
   *
   * @function (arg1, [arg2])
   * @public
   * @param {Array}       the input object,
   * @param {Boolean}     the flattened level, false deep, true only first level,
   * @returns {Array}     returns the flattened array or void(0),
   * @since 0.0.0
   */
  /* eslint-disable no-void, no-plusplus */
  overslash.flatten = function(obj, shallow) {
    var o = []
      , idx = 0
      , i
      ;

    if (!overslash.isArray(obj)) return void 0;
    if (shallow) return [].concat.apply([], obj);

    for (i = 0; i < obj.length; i++) {
      if (overslash.isArray(obj[i])) {
        o = o.concat(overslash.flatten(obj[i]));
        idx = o.length;
      } else {
        o[idx++] = obj[i];
      }
    }
    return o;
  };
  /* eslint-enable no-void, no-plusplus */

  /**
   * Returns the maximum value in the array.
   *
   * @function (arg1)
   * @public
   * @param {Array}       the input object,
   * @returns {Number}    returns the max value or void(0),
   * @since 0.0.0
   */
  /* eslint-disable no-void */
  overslash.max = function(obj) {
    var max = null
      , o
      , i
      ;

    if (!overslash.isArray(obj)) return void 0;

    o = overslash.flatten(obj);
    for (i = 0; i < o.length; i++) {
      if (max === null || max < o[i]) {
        max = typeof o[i] === 'number' ? o[i] : max;
      }
    }
    return max !== null ? max : void 0;
  };
  /* eslint-enable no-void */

  /**
   * Returns the minimum value in the array.
   *
   * @function (arg1)
   * @public
   * @param {Array}       the input object,
   * @returns {Number}    returns the min value or void(0),
   * @since 0.0.0
   */
   /* eslint-disable no-void */
  overslash.min = function(obj) {
    var min = null
      , o
      , i
      ;

    if (!overslash.isArray(obj)) return void 0;

    o = overslash.flatten(obj);
    for (i = 0; i < o.length; i++) {
      if (min === null || min > o[i]) {
        min = typeof o[i] === 'number' ? o[i] : min;
      }
    }
    return min !== null ? min : void 0;
  };
  /* eslint-enable no-void */

  /**
   * Returns the list of the elements the passed-in arrays have in common.
   *
   * @function (arg)
   * @public
   * @param {Array}       n arrays to compare,
   * @returns {Array}     returns the list of elements in common or empty,
   * @since 0.1
   */
  overslash.share = function(array) {
    var result = []
      , item
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
      if (!overslash.contains(result, item)) {
        for (j = 1; j < arguments.length; j++) {
          if (!overslash.contains(arguments[j], item)) {
            break;
          }
        }
        if (j === arguments.length) {
          result.push(item);
        }
      }
    }
    return result;
  };
