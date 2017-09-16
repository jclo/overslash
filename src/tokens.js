
  // --- Operations on Tokens (optional) ---------------------------------------
  extend(overslash, {

    /**
     * Returns a unique string pattern in base 36 ([0-9a-z]).
     *
     * @function ()
     * @public
     * @param {}            -,
     * @returns {String}    returns a random string,
     * @since 0.0.0
     */
    token: function() {
      return Math.random().toString(36).substr(2);
    },

    /**
     * Returns a unique string pattern with a predefined length.
     *
     * @function ([arg1])
     * @public
     * @param {Number}      the length of the string. Default is 16 chars,
     * @returns {String}    returns a random string from the charset defined in c,
     * @since 0.0.0
     */
    makeid: function(l) {
      var ll = this.isNumber(l) ? l : 16
        , c  = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
        , id = ''
        , i
        ;

      for (i = 0; i < ll; i++) {
        id += c.charAt(Math.floor(Math.random() * c.length));
      }
      return id;
    }
  });
