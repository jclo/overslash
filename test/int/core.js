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
  describe('Test the Core Object:', () => {
  // Test the lib:
    describe('Test _.VERSION _._setTestMode and _.noConflict:', () => {
      it('Expects _.VERSION to return a string.', () => {
        expect(_.VERSION).to.be.a('string');
      });

      it('Expects _._setTestMode to return a function.', () => {
        expect(_._setTestMode).to.be.a('function');
      });

      it('Expects _._setTestMode() to return an empty array.', () => {
        expect(_._setTestMode()).to.be.an('array').that.has.lengthOf(0);
      });

      it('Expects _.noConflict to return a function.', () => {
        expect(_.noConflict).to.be.a('function');
      });

      it('Expects _.noConflict() to return an object.', () => {
        expect(_.noConflict()).to.be.an('object');
      });
    });
  });
};
