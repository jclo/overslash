/** **************************************************************************
 *
 * Extends overslash with operations on Tokens (optional).
 *
 * tokens.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Static Methods:
 *  . token                       returns a unique string pattern in base 36,
 *  . makeid                      returns a unique string pattern,
 *
 *
 *
 * @namespace    Overslash
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* global extend */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

(function() {
  // START OF IIFE


  // -- Module path


  // -- Local modules


  // -- Local constants


  // -- Local variables


  // -- Public function ------------------------------------------------------

  extend(Overslash, {

    /**
     * Returns a unique string pattern in base 36 ([0-9a-z]).
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {String}    returns a random string,
     * @since 0.0.0
     */
    token() {
      return Math.random().toString(36).substr(2);
    },

    /**
     * Returns a unique string pattern with a predefined length.
     *
     * @method ([arg1])
     * @public
     * @param {Number}      the length of the string. Default is 16 chars,
     * @returns {String}    returns a random string from the charset defined in c,
     * @since 0.0.0
     */
    makeid(l) {
      const ll = this.isNumber(l) ? l : 16
          , c  = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
          ;

      let id = '';
      for (let i = 0; i < ll; i++) {
        id += c.charAt(Math.floor(Math.random() * c.length));
      }
      return id;
    },
  });

  // END OF IIFE
}());
/* - */
