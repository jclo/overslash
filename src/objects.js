
  // --- Operations on Objects (optional) --------------------------------------

  /**
   * Clones a literal object or an array.
   *
   * @function(arg1)
   * @public
   * @param {Object}    the object to clone,
   * @returns {Object}  returns the cloned object,
   * @since 0.0.0
   */
  /* eslint-disable no-void, no-restricted-syntax */
  overslash.clone = function(obj) {
    var clone = overslash.isArray(obj) ? [] : {}
      , prop
      ;

    if (!overslash.isObject(obj)) return void 0;

    for (prop in obj) {
      if (overslash.isArray(obj[prop])) {
        clone[prop] = overslash.clone(obj[prop]);
      } else if (overslash.isObject(obj[prop])) {
        clone[prop] = overslash.extend(obj[prop]);
      } else {
        clone[prop] = obj[prop];
      }
    }
    return clone;
  };
  /* eslint-enable no-void, no-restricted-syntax */

  /**
   * Extends a given object with all the properties in passed-in object(s).
   * (copied from: http://underscorejs.org and added recursivity)
   *
   * @function (arg1)
   * @public
   * @param {Object}      the objects to merge,
   * @returns {Object}    the resulting object,
   * since 0.0.0
   */
  /* eslint-disable no-restricted-syntax, no-param-reassign */
  overslash.extend = function(obj) {
    var source
      , prop
      , i
      ;

    if (!overslash.isObject(obj)) return obj;

    for (i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (!overslash.isArray(arguments[i][prop]) && overslash.isObject(arguments[i][prop])) {
          obj[prop] = obj[prop] !== undefined ? obj[prop] : {};
          overslash.extend(obj[prop], arguments[i][prop]);
        } else if (hasOwnProperty.call(source, prop)) {
          obj[prop] = overslash.isArray(source[prop])
            ? overslash.clone(source[prop])
            : source[prop];
        }
      }
    }
    return obj;
  };
  /* eslint-enable no-restricted-syntax, no-param-reassign */

  /**
   * Retrieves all the names of the object's own enumerable properties.
   * (ECMAScript 5 only).
   *
   * @function (arg1)
   * @public
   * @param {Object}      the input object,
   * @returns {Array}     returns the names of the keys,
   * @since 0.0.0
   */
  overslash.keys = function(obj) {
    return Object.keys(obj);
  };

  /**
   * Parses all the names of the object's own enumerable properties
   * (replace for...in statement).
   * (ECMAScript 5 only).
   *
   * @function (arg1 arg2)
   * @public
   * @param {Object}      the input object,
   * @returns {Array}     returns the names of the keys,
   * @since 0.0.0
   */
  overslash.forPropIn = function(obj, callback) {
    // var keys = overslash.keys(obj);
    overslash.keys(obj).forEach(function(key) {
      if ({}.hasOwnProperty.call(obj, key)) {
        callback(key);
      }
    });
  };
