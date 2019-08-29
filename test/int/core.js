/* global describe, it */
/* eslint one-var: 0, no-unused-expressions: 0, import/no-extraneous-dependencies: 0,
  semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules


// -- Local constants

// -- Main
module.exports = (_) => {
  describe('Test the Core Object:', () => {
  // Test the lib:
    describe('Test _.VERSION and _.noConflict:', () => {
      it('Expects _.VERSION to return a string.', () => {
        expect(_.VERSION).to.be.a('string');
      });
      it('Expects _.noConflict to return a function.', () => {
        expect(_.noConflict).to.be.a('function');
      });
    });
  });
};
