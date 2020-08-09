// ESLint declarations:
/* global describe, it */
/* eslint semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai');


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = (_) => {
  describe('Test the tokens functions:', () => {
    //
    describe('_.token():', () => {
      it('Expects _.token() to return a string.', () => {
        expect(_.token()).to.be.a('String');
      });
    });

    describe('_.makeid():', () => {
      const a = 's'
          ;

      it('Expects _.makeid() to return a string of 16 chars.', () => {
        expect(_.makeid()).to.be.a('String').that.has.lengthOf(16);
      });
      it('Expects _.makeid(32) to return a string of 32 chars.', () => {
        expect(_.makeid(32)).to.be.a('String').that.has.lengthOf(32);
      });
      it('Expects _.makeid(128) to return a string of 128 chars.', () => {
        expect(_.makeid(128)).to.be.a('String').that.has.lengthOf(128);
      });
      it('Expects "var a = "s"; _.makeid(a)" to return a string of 16 chars.', () => {
        expect(_.makeid(a)).to.be.a('String').that.has.lengthOf(16);
      });
    });
  });
};
