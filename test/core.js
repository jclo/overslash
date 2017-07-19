/* global describe, it */
/* eslint one-var: 0, no-unused-expressions: 0, import/no-extraneous-dependencies: 0 */

'use strict';

// -- Node modules
const expect = require('chai').expect
    ;

// -- Local modules
const _ = require('../index.js')
    ;

// -- Local constants

// -- Main
module.exports = () => {
  describe('Test the Javascript primitive types:', () => {
    //
    describe('_.isUndefined():', () => {
      const a = undefined
          , b = null
          , c = ''
          ;

      it('Expects "var a; _.isUndefined(a)" to return true.', () => {
        expect(_.isUndefined(a)).to.be.true;
      });
      it('Expects "var b = null; _.isUndefined(b)" to return false.', () => {
        expect(_.isUndefined(b)).to.be.false;
      });
      it('Expects "var c = ""; _.isUndefined(c)" to return false.', () => {
        expect(_.isUndefined(c)).to.be.false;
      });
    });

    describe('_.isNull():', () => {
      const a = undefined
          , b = null
          ;

      it('Expects "var a; _.isNull(a)" to return false.', () => {
        expect(_.isNull(a)).to.be.false;
      });
      it('Expects "var b = null; _.isNull(b)" to return true.', () => {
        expect(_.isNull(b)).to.be.true;
      });
    });

    describe('_.isBoolean():', () => {
      const a = undefined
          , b = null
          , c = true
          , d = false
          ;

      it('Expects "var a; _.isBoolean(a)" to return false.', () => {
        expect(_.isBoolean(a)).to.be.false;
      });
      it('Expects "var b = null; _.isBoolean(b)" to return false.', () => {
        expect(_.isBoolean(b)).to.be.false;
      });
      it('Expects "var c = true; _.isBoolean(c)" to return true.', () => {
        expect(_.isBoolean(c)).to.be.true;
      });
      it('Expects "var d; _.isBoolean(d)" to return true.', () => {
        expect(_.isBoolean(d)).to.be.true;
      });
    });

    describe('_.isString:', () => {
      const a = undefined
          , b = null
          , c = true
          , d = ''
          , e = 's'
          , f = 1
          ;

      it('Expects "var a; _.isString(a)" to return false.', () => {
        expect(_.isString(a)).to.be.false;
      });
      it('Expects "var b = null; _.isString(b)" to return false.', () => {
        expect(_.isString(b)).to.be.false;
      });
      it('Expects "var c = true; _.isString(c)" to return false.', () => {
        expect(_.isString(c)).to.be.false;
      });
      it('Expects "var d = ""; _.isString(d)" to return true.', () => {
        expect(_.isString(d)).to.be.true;
      });
      it('Expects "var e = "s"; _.isString(e)" to return true.', () => {
        expect(_.isString(e)).to.be.true;
      });
      it('Expects "var f = 1; _.isString(f)" to return false.', () => {
        expect(_.isString(f)).to.be.false;
      });
    });

    describe('_.isEmpty():', () => {
      const a = undefined
          , b = null
          , c = true
          , d = ''
          , e = 's'
          , f = 1
          ;

      it('Expects "var a; _.isEmpty(a)" to return true.', () => {
        expect(_.isEmpty(a)).to.be.true;
      });
      it('Expects "var b = null; _.isEmpty(b)" to return true.', () => {
        expect(_.isEmpty(b)).to.be.true;
      });
      it('Expects "var c = true; _.isEmpty(c)" to return true.', () => {
        expect(_.isEmpty(c)).to.be.true;
      });
      it('Expects "var d = ""; _.isEmpty(d)" to return true.', () => {
        expect(_.isEmpty(d)).to.be.true;
      });
      it('Expects "var e = "s"; _.isEmpty(e)" to return false.', () => {
        expect(_.isEmpty(e)).to.be.false;
      });
      it('Expects "var f = 1; _.isEmpty(f)" to return true.', () => {
        expect(_.isEmpty(f)).to.be.true;
      });
    });

    describe('_.isNumber():', () => {
      const a = undefined
          , b = null
          , c = true
          , d = ''
          , e = 1
          ;

      it('Expects "var a; _.isNumber(a)" to return false.', () => {
        expect(_.isNumber(a)).to.be.false;
      });
      it('Expects "var b = null; _.isNumber(b)" to return false.', () => {
        expect(_.isNumber(b)).to.be.false;
      });
      it('Expects "var c = true; _.isNumber(c)" to return false.', () => {
        expect(_.isNumber(c)).to.be.false;
      });
      it('Expects "var d = ""; _.isNumber(d)" to return false.', () => {
        expect(_.isNumber(d)).to.be.false;
      });
      it('Expects "var e = 1; _.isNumber(e)" to return true.', () => {
        expect(_.isNumber(e)).to.be.true;
      });
    });

    describe('_.isNaN():', () => {
      const a = 1
          , b = Math.sqrt(-1)
          , c = parseInt('blabla', 10)
          ;

      it('Expects "var a = 1; _.isNaN(a)" to return false.', () => {
        expect(_.isNaN(a)).to.be.false;
      });
      it('Expects "var b = Math.sqrt(-1); _.isNaN(b)" to return true.', () => {
        expect(_.isNaN(b)).to.be.true;
      });
      it('Expects "var c = parseInt("blabla"); _.isNaN(c)" to return true.', () => {
        expect(_.isNaN(c)).to.be.true;
      });
    });

    describe('_.isOdd():', () => {
      const a = undefined
          , b = null
          , c = true
          , d = ''
          , e = 1
          , f = 2
          ;

      it('Expects "var a; _.isOdd(a)" to return undefined.', () => {
        expect(_.isOdd(a)).to.be.undefined;
      });
      it('Expects "var b = null; _.isOdd(b)" to return undefined.', () => {
        expect(_.isOdd(b)).to.be.undefined;
      });
      it('Expects "var c = true; _.isOdd(c)" to return undefined.', () => {
        expect(_.isOdd(c)).to.be.undefined;
      });
      it('Expects "var d = ""; _.isOdd(d)" to return undefined.', () => {
        expect(_.isOdd(d)).to.be.undefined;
      });
      it('Expects "var e = 1; _.isOdd(e)" to return true.', () => {
        expect(_.isOdd(e)).to.be.true;
      });
      it('Expects "var f = 2; _.isOdd(f)" to return false.', () => {
        expect(_.isOdd(f)).to.be.false;
      });
    });
  });
};
