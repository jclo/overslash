
  // --- Operations on Objects (optional) --------------------------------------
  extend(overslash, {

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
    clone: function(obj) {
      var clone = this.isArray(obj) ? [] : {}
        , prop
        ;

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
     * @function (arg1)
     * @public
     * @param {Object}      the objects to merge,
     * @returns {Object}    the resulting object,
     * @since 0.0.0
     */
    /* eslint-disable no-restricted-syntax, no-param-reassign */
    extend: function(obj) {
      var source
        , prop
        , i
        ;

      if (!this.isObject(obj)) return obj;

      for (i = 1; i < arguments.length; i++) {
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
    keys: function(obj) {
      return Object.keys(obj);
    },

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
    forPropIn: function(obj, callback) {
      // var keys = overslash.keys(obj);
      this.keys(obj).forEach(function(key) {
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
     * @function (...arg1)
     * @public
     * @param {Object}      the objects to 'fusion',
     * @returns {Object}    returns the reassigned object,
     * @since 0.0.0
     */
    /* eslint-disable no-param-reassign, no-loop-func */
    assign: function() {
      var target = arguments[0]
        , source
        , descriptors
        , i
        ;

      for (i = 1; i < arguments.length; i++) {
        source = arguments[i];
        descriptors = Object.keys(source).reduce(function(props, key) {
          props[key] = Object.getOwnPropertyDescriptor(source, key);
          return props;
        }, {});
      }
      Object.defineProperties(target, descriptors);
      return target;
    }
    /* eslint-enable no-param-reassign, no-loop-func */
  });
