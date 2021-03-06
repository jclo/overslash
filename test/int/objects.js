// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai');


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = (_) => {
  describe('Test the Javascript Object types:', () => {
    const a = undefined
        , b = null
        , c = true
        , d = ''
        , e = 's'
        , f = 1
        , g = {}
        , h = { a: 1 }
        // , i = Math.random()
        , j = new Date()
        , k = []
        , l = [1, 2]
        , m = function() {}
        , n = Object.create({ a: 1 })
        ;

    describe('_.isObject():', () => {
      it('Expects "var a; _.isObject(a)" to return false.', () => {
        expect(_.isObject(a)).to.be.equal(false);
      });
      it('Expects "var b = null; _.isObject(b)" to return false.', () => {
        expect(_.isObject(b)).to.be.equal(false);
      });
      it('Expects "var c = true; _.isObject(c)" to return false.', () => {
        expect(_.isObject(c)).to.be.equal(false);
      });
      it('Expects "var d = ""; _.isObject(d)" to return false.', () => {
        expect(_.isObject(d)).to.be.equal(false);
      });
      it('Expects "var e = "s"; _.isObject(e)" to return false.', () => {
        expect(_.isObject(e)).to.be.equal(false);
      });
      it('Expects "var f = 1; _.isObject(f)" to return false.', () => {
        expect(_.isObject(f)).to.be.equal(false);
      });
      it('Expects "var g = {}; _.isObject(g)" to return true.', () => {
        expect(_.isObject(g)).to.be.equal(true);
      });
      it('Expects "var h = { a: 1 }; _.isObject(h)" to return true.', () => {
        expect(_.isObject(h)).to.be.equal(true);
      });

      it('Expects "var j = new Date(); _.isObject(j)" to return true.', () => {
        expect(_.isObject(j)).to.be.equal(true);
      });
      it('Expects "var k = []; _.isObject(k)" to return true.', () => {
        expect(_.isObject(k)).to.be.equal(true);
      });
      it('Expects "var l = [ 1, 2 ]; _.isObject(l)" to return true.', () => {
        expect(_.isObject(l)).to.be.equal(true);
      });
      it('Expects "var m = function() {}; _.isObject(m)" to return true.', () => {
        expect(_.isObject(m)).to.be.equal(true);
      });
    });

    describe('_.isLiteralObject():', () => {
      it('Expects "var g = {}; _.isLiteralObject(g)" to return true.', () => {
        expect(_.isLiteralObject(g)).to.be.equal(true);
      });
      it('Expects "var h = { a: 1 }; _.isLiteralObject(h)" to return true.', () => {
        expect(_.isLiteralObject(h)).to.be.equal(true);
      });
      it('Expects "var k = []; _.isLiteralObject(k)" to return false.', () => {
        expect(_.isLiteralObject(k)).to.be.equal(false);
      });
      it('Expects "var l = [ 1, 2 ]; _.isLiteralObject(l)" to return false.', () => {
        expect(_.isLiteralObject(l)).to.be.equal(false);
      });
      it('Expects "var m = function() {}; _.isLiteralObject(m)" to return false.', () => {
        expect(_.isLiteralObject(m)).to.be.equal(false);
      });
    });

    describe('_.isFunction():', () => {
      it('Expects "var g = {}; _.isFunction(g)" to return false.', () => {
        expect(_.isFunction(g)).to.be.equal(false);
      });
      it('Expects "var k = []; _.isFunction(k)" to return false.', () => {
        expect(_.isFunction(k)).to.be.equal(false);
      });
      it('Expects "var m = function() {}; _.isFunction(m)" to return true.', () => {
        expect(_.isFunction(m)).to.be.equal(true);
      });
    });

    describe('_.isArray():', () => {
      it('Expects "var g = {}; _.isArray(g)" to return false.', () => {
        expect(_.isArray(g)).to.be.equal(false);
      });
      it('Expects "var k = []; _.isArray(k)" to return true.', () => {
        expect(_.isArray(k)).to.be.equal(true);
      });
      it('Expects "var l = [ 1, 2 ]; _.isArray(l)" to return true.', () => {
        expect(_.isArray(l)).to.be.equal(true);
      });
    });

    // _.isMath

    describe('_.isDate():', () => {
      it('Expects "var g = {}; _.isDate(g)" to return false.', () => {
        expect(_.isDate(g)).to.be.equal(false);
      });
      it('Expects "var j = new Date(); _.isDate(j)" to return true.', () => {
        expect(_.isDate(j)).to.be.equal(true);
      });
    });

    describe('_.isEmpty():', () => {
      it('Expects "var g = {}; _.isEmpty(g)" to return true.', () => {
        expect(_.isEmpty(g)).to.be.equal(true);
      });
      it('Expects "var h = { a: 1 }; _.isEmpty(h)" to return false.', () => {
        expect(_.isEmpty(h)).to.be.equal(false);
      });
      it('Expects "var k = []; _.isEmpty(k)" to return true.', () => {
        expect(_.isEmpty(k)).to.be.equal(true);
      });
      it('Expects "var l = [ 1, 2 ]; _.isEmpty(l)" to return false.', () => {
        expect(_.isEmpty(l)).to.be.equal(false);
      });
      it('Expects "var n = Object.create({ a: 1 }); _.isEmpty(n)" to return true.', () => {
        expect(_.isEmpty(n)).to.be.equal(true);
      });
    });
  });
};
