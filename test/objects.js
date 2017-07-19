/* global describe, it */
/* eslint one-var: 0, no-unused-expressions: 0, import/no-extraneous-dependencies: 0
  dot-notation: 0 */

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
  describe('Test Operations on objects:', () => {
    //
    describe('_.clone():', () => {
      const a = { a: 1, b: { c: { d: { e: 1 } } } }
          , b = _.clone(a)
          , c = [1, 2, [3, 4, [5, [6, [7, 8]]]]]
          , d = _.clone(c)
          , e = { a: 1, b: [2, [3, 4]] }
          , f = _.clone(e)
          , g = [1, { a: 1, b: [5, 6] }]
          , h = _.clone(g)
          ;

      delete a.a;
      delete a.b;
      c.length = 0;
      delete e.a;
      delete e.b;
      g.length = 0;

      it('Expects _.clone("string") to return undefined.', () => {
        expect(_.clone('string')).to.be.undefined;
      });
      it('Expects _.clone(1) to return undefined.', () => {
        expect(_.clone(1)).to.be.undefined;
      });

      it('Expects "var a = { a: 1, b: {c: {d: {e: 1}}}}; delete a.a; delete a.b;" to return an empty object.', () => {
        expect(a).to.be.an('Object').that.is.empty;
      });
      it('Expects "var b = _.clone(a); delete a.a; delete a.b;" to not return an empty object.', () => {
        expect(b).to.be.an('Object').that.is.not.empty;
      });
      it('Expects b to have the property "a" that is equal to 1.', () => {
        expect(b).to.have.property('a').that.is.equal(1);
      });
      it('Expects b to have the property "b" that is an object.', () => {
        expect(b).to.have.property('b').that.is.an('Object');
      });
      it('Expects b.b to have the property "c" that is an object.', () => {
        expect(b.b).to.have.own.property('c').that.is.an('Object');
      });
      it('Expects b.b.c to have the property "d" that is an object.', () => {
        expect(b.b.c).to.have.property('d').that.is.an('Object');
      });
      it('Expects b.b.c.d to have the property "e" that is equal to 1.', () => {
        expect(b.b.c.d).to.have.property('e').that.is.equal(1);
      });

      it('Expects "c = [ 1, 2, [3, 4, [5, [6, [7, 8]]]]]; c.length = 0;" to return an empty array.', () => {
        expect(c).to.be.an('Array').that.is.empty;
      });
      it('Expects "var d = _.clone(c); c.length = 0;" to not return an empty array.', () => {
        expect(d).to.be.an('Array').that.is.not.empty;
      });
      it('Expects the first item to be equal to 1.', () => {
        expect(d[0]).to.be.equal(1);
      });
      it('Expects the second item to be equal to 2.', () => {
        expect(d[1]).to.be.equal(2);
      });
      it('Expects the third item to be an array with 3 items.', () => {
        expect(d[2]).to.be.an('Array').that.has.a.lengthOf(3);
      });
      it('Expects the first item to be equal to 3.', () => {
        expect(d[2][0]).to.be.equal(3);
      });
      it('Expects the second item to be equal to 4.', () => {
        expect(d[2][1]).to.be.equal(4);
      });
      it('Expects the third item to be an array with 2 items.', () => {
        expect(d[2][2]).to.be.an('Array').that.has.a.lengthOf(2);
      });
      it('Expects the first item to be equal to 5.', () => {
        expect(d[2][2][0]).to.be.equal(5);
      });
      it('Expects the second item to be an array with 2 items.', () => {
        expect(d[2][2][1]).to.be.an('Array').that.has.a.lengthOf(2);
      });
      it('Expects the first item to be equal to 6.', () => {
        expect(d[2][2][1][0]).to.be.equal(6);
      });
      it('Expects the second item to be an array with 2 items.', () => {
        expect(d[2][2][1][1]).to.be.an('Array').that.has.a.lengthOf(2);
      });
      it('Expects the first item to be equal to 7.', () => {
        expect(d[2][2][1][1][0]).to.be.equal(7);
      });
      it('Expects the second item to be equal to 8.', () => {
        expect(d[2][2][1][1][1]).to.be.equal(8);
      });

      it('Expects "e = { a: 1, b: [2, [3, 4]]}; delete a.a; delete a.b;" to return an empty object.', () => {
        expect(e).to.be.an('Object').that.is.empty;
      });
      it('Expects "var f = _.clone(e); delete a.a; delete a.b;" to not return an empty object.', () => {
        expect(f).to.be.an('Object').that.is.not.empty;
      });
      it('Expects f to have the property "a" that is equal to 1.', () => {
        expect(f).to.have.property('a').that.is.equal(1);
      });
      it('Expects f to have the property "b" that is an array with 2 items.', () => {
        expect(f).to.have.property('b').that.is.an('Array').that.has.lengthOf(2);
      });
      it('Expects the first item to be equal to 2.', () => {
        expect(f.b[0]).to.be.equal(2);
      });
      it('Expects the second item to be an array with 2 items.', () => {
        expect(f.b[1]).to.be.an('Array').that.has.a.lengthOf(2);
      });
      it('Expects the first item to be equal to 3.', () => {
        expect(f.b[1][0]).to.be.equal(3);
      });
      it('Expects the second item to be equal to 4.', () => {
        expect(f.b[1][1]).to.be.equal(4);
      });

      it('Expects "g = [1, { a: 1, b: [5, 6]}]; g.length = 0;" to return an empty array.', () => {
        expect(c).to.be.an('Array').that.is.empty;
      });
      it('Expects "var h = _.clone(g); g.length = 0;" to not return an empty array.', () => {
        expect(d).to.be.an('Array').that.is.not.empty;
      });
      it('Expects the first item to be equal to 1.', () => {
        expect(h[0]).to.be.equal(1);
      });
      it('Expects the second item to be an object.', () => {
        expect(h[1]).to.be.an('Object');
      });
      it('Expects this object to have the property "a" that is equal to 1.', () => {
        expect(h[1]).to.have.property('a').that.is.equal(1);
      });
      it('Expects this object to have the property "b" that is an array with 2 items.', () => {
        expect(h[1]).to.have.property('b').that.is.an('Array').that.has.a.lengthOf(2);
      });
      it('Expects this first item of this array to be equal to 5.', () => {
        expect(h[1]['b'][0]).to.be.equal(5);
      });
      it('Expects this second item of this array to be equal to 6.', () => {
        expect(h[1]['b'][1]).to.be.equal(6);
      });
    });

    describe('_.extend():', () => {
      const a = { a: 1, b: 2 }
          , b = { c: { d: 3, e: 4 } }
          , c = { f: [5, 6] }
          , d = { g: { h: [7, 8, 9] } }
          , e = _.extend({ c: { d: 4 } }, a, b, c, d)
          ;

      delete a.a;
      delete a.b;
      delete b.c;
      delete c.f;
      delete d.g;

      // { a: 1, b: 2, c: {d: 3, e: 4}, f: [5, 6], g: {h: [7,8,9]} }
      it('Expects _.extend("string") to return "string".', () => {
        expect(_.extend('string')).to.be.equal('string');
      });
      it('Expects _.extend(123) to return 123.', () => {
        expect(_.extend(123)).to.be.equal(123);
      });

      it('Expects _.extend({c: {d: 4}}, { a: 1, b: 2 }, { c: { d: 3, e: 4 }}, { f: [5, 6] }, { g: { h: [7, 8, 9] }}) to return an Object.', () => {
        expect(e).to.be.an('Object');
      });
      it('Expects this object is not empty after deleting the source objects.', () => {
        expect(e).to.not.be.empty;
      });
      it('Expects this object has the property "a" that is equal to 1', () => {
        expect(e).to.have.property('a').that.is.equal(1);
      });
      it('Expects this object has the property "b" that is equal to 2', () => {
        expect(e).to.have.property('b').that.is.equal(2);
      });
      it('Expects this object has the property "c" that is an object.', () => {
        expect(e).to.have.property('c').that.is.an('Object');
      });
      it('Expects this object has the property "d" that is equal to 3.', () => {
        expect(e.c).to.have.property('d').that.is.equal(3);
      });
      it('Expects this object has the property "e" that is equal to 4.', () => {
        expect(e.c).to.have.property('e').that.is.equal(4);
      });
      it('Expects this object has the property "f" that is an array with 2 items.', () => {
        expect(e).to.have.property('f').that.is.an('Array').that.has.a.lengthOf(2);
      });
      it('Expects the first item to be equal to 5.', () => {
        expect(e.f[0]).to.be.equal(5);
      });
      it('Expects the second item to be equal to 6.', () => {
        expect(e.f[1]).to.be.equal(6);
      });
      it('Expects this object has the property "g" that is an object.', () => {
        expect(e).to.have.property('g').that.is.an('Object');
      });
      // it('Expects this object has the property "h" that is an array with 3 items.', () => {
      //   expect(e).to.have.deep.property('g.h').that.is.an('Array');
      // });
      it('Expects the first item to be equal to 7.', () => {
        expect(e.g['h'][0]).to.be.equal(7);
      });
      it('Expects the second item to be equal to 8.', () => {
        expect(e.g['h'][1]).to.be.equal(8);
      });
      it('Expects the third item to be equal to 9.', () => {
        expect(e.g['h'][2]).to.be.equal(9);
      });
    });

    describe('_.keys():', () => {
      const a = ''
          , b = 'string'
          , c = 123
          , d = []
          , e = [1, 2]
          , f = {}
          , g = { a: 1 }
          ;

      it('Expects "var a = ""; _.keys(a)" to return an empty array.', () => {
        expect(_.keys(a)).to.be.an('Array').that.has.a.lengthOf(0);
      });
      it('Expects "var b = "string"; _.keys(b)" to return an array with 6 elements.', () => {
        expect(_.keys(b)).to.be.an('Array').that.has.a.lengthOf(6);
      });
      it('Expects "var c = 123; _.keys(c)" to return an empty array.', () => {
        expect(_.keys(c)).to.be.an('Array').that.has.a.lengthOf(0);
      });
      it('Expects "var d = []; _.keys(d)" to return an empty array.', () => {
        expect(_.keys(d)).to.be.an('Array').that.has.a.lengthOf(0);
      });
      it('Expects "var e = [1, 2]; _.keys(e)" to return an array with 2 elements.', () => {
        expect(_.keys(e)).to.be.an('Array').that.has.a.lengthOf(2);
      });
      it('Expects "var f = {}; _.keys(f)" to return an empty array.', () => {
        expect(_.keys(f)).to.be.an('Array').that.has.a.lengthOf(0);
      });
      it('Expects "var g = { a: 1 }; _.keys(g)" to return an array with 1 element.', () => {
        expect(_.keys(g)).to.be.an('Array').that.has.a.lengthOf(1);
      });
    });

    describe('_.forPropIn():', () => {
      const b = [];

      _.forPropIn({ a: 1, b: 2, c: 3 }, (prop) => {
        b.push(prop);
      });

      it('Expects "_.forPropIn({ a: 1, b: 2, c: 3 }, function(prop) { b.push(prop)}) to fill b array with 3 elements:"', () => {
        expect(b).to.be.an('Array').that.has.a.lengthOf(3);
      });

      it('Expects the first item to be equal to "a".', () => {
        expect(b[0]).to.be.equal('a');
      });

      it('Expects the second item to be equal to "b".', () => {
        expect(b[1]).to.be.equal('b');
      });

      it('Expects the third item to be equal to "c".', () => {
        expect(b[2]).to.be.equal('c');
      });
    });
  });
};
