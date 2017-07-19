
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
  _.clone = function(obj) {
    var clone = _.isArray(obj) ? [] : {}
      , prop
      ;

    if (!_.isObject(obj)) return void 0;

    for (prop in obj) {
      if (_.isArray(obj[prop])) {
        clone[prop] = _.clone(obj[prop]);
      } else if (_.isObject(obj[prop])) {
        clone[prop] = _.extend(obj[prop]);
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
  _.extend = function(obj) {
    var source
      , prop
      , i
      ;

    if (!_.isObject(obj)) return obj;

    for (i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (!_.isArray(arguments[i][prop]) && _.isObject(arguments[i][prop])) {
          obj[prop] = obj[prop] !== undefined ? obj[prop] : {};
          _.extend(obj[prop], arguments[i][prop]);
        } else if (hasOwnProperty.call(source, prop)) {
          obj[prop] = _.isArray(source[prop]) ? _.clone(source[prop]) : source[prop];
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
  _.keys = function(obj) {
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
  _.forPropIn = function(obj, callback) {
    // var keys = _.keys(obj);
    _.keys(obj).forEach(function(key) {
      if ({}.hasOwnProperty.call(obj, key)) {
        callback(key);
      }
    });
  };
