// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(Overslash, libname, version) {
  describe('Overslash introspection:', () => {
    describe('Test the nature of Overslash:', () => {
      it('Expects Overslash to be an object.', () => {
        expect(Overslash).to.be.an('object');
      });

      it('Expects Overslash to own 38 properties.', () => {
        expect(Object.keys(Overslash)).to.be.an('array').that.has.lengthOf(38);
      });
    });

    describe('Check the owned generic properties:', () => {
      it(`Expects Overslash to own the property "NAME" whose value is "${libname}".`, () => {
        expect(Overslash).to.own.property('NAME').that.is.equal(libname);
      });

      it(`Expects Overslash to own the property "VERSION" whose value is "${version}".`, () => {
        expect(Overslash).to.own.property('VERSION');
      });

      it('Expects Overslash to own the property "_library" that is an object.', () => {
        expect(Overslash).to.own.property('_library').that.is.an('object');
      });

      it('Expects Overslash to own the property "_setTestMode" that is a function.', () => {
        expect(Overslash).to.own.property('_setTestMode').that.is.a('function');
      });

      it('Expects Overslash to own the property "noConflict" that is a function.', () => {
        expect(Overslash).to.own.property('noConflict').that.is.a('function');
      });

      it('Expects Overslash to own the property "whoami" that is a function.', () => {
        expect(Overslash).to.own.property('whoami').that.is.a('function');
      });

      describe('Test the owned generic properties:', () => {
        it('Expects the property "_library" to own two properties.', () => {
          expect(Object.keys(Overslash.whoami())).to.be.an('array').that.has.lengthOf(2);
        });
        it(`Expects the property "_library" to own the property "name" whose value is "${libname}".`, () => {
          expect(Overslash.whoami()).to.own.property('name').that.is.equal(libname);
        });
        it(`Expects the property "_library" to own the property "version" whose value is "${version}".`, () => {
          expect(Overslash.whoami()).to.own.property('version').that.is.equal(version);
        });

        it('Expects the property "_setTestMode" to return an array with 0 item.', () => {
          expect(Overslash._setTestMode()).to.be.an('array').that.has.lengthOf(0);
        });

        it('Expects the property "noConflict" to return an object.', () => {
          expect(Overslash.noConflict()).to.be.an('object');
        });

        it('Expects the property "whoami" to return an object.', () => {
          expect(Overslash.whoami()).to.be.an('object');
        });
        it('Expects this object to own two properties.', () => {
          expect(Object.keys(Overslash.whoami())).to.be.an('array').that.has.lengthOf(2);
        });
        it(`Expects this object to own the property "name" whose value is "${libname}".`, () => {
          expect(Overslash.whoami()).to.own.property('name').that.is.equal(libname);
        });
        it(`Expects this object to own the property "version" whose value is "${version}".`, () => {
          expect(Overslash.whoami()).to.own.property('version').that.is.equal(version);
        });
      });
    });

    describe('Check the owned specific properties:', () => {
      // Primitives types (mandatory):
      it('Expects Overslash to own the property "isUndefined" that is a function.', () => {
        expect(Overslash).to.own.property('isUndefined').that.is.a('function');
      });

      it('Expects Overslash to own the property "isNull" that is a function.', () => {
        expect(Overslash).to.own.property('isNull').that.is.a('function');
      });

      it('Expects Overslash to own the property "isBoolean" that is a function.', () => {
        expect(Overslash).to.own.property('isBoolean').that.is.a('function');
      });

      it('Expects Overslash to own the property "isString" that is a function.', () => {
        expect(Overslash).to.own.property('isString').that.is.a('function');
      });

      it('Expects Overslash to own the property "isNumber" that is a function.', () => {
        expect(Overslash).to.own.property('isNumber').that.is.a('function');
      });

      it('Expects Overslash to own the property "isNaN" that is a function.', () => {
        expect(Overslash).to.own.property('isNaN').that.is.a('function');
      });

      it('Expects Overslash to own the property "isOdd" that is a function.', () => {
        expect(Overslash).to.own.property('isOdd').that.is.a('function');
      });


      // Object types (mandatory):
      it('Expects Overslash to own the property "isObject" that is a function.', () => {
        expect(Overslash).to.own.property('isObject').that.is.a('function');
      });

      it('Expects Overslash to own the property "isLiteralObject" that is a function.', () => {
        expect(Overslash).to.own.property('isLiteralObject').that.is.a('function');
      });

      it('Expects Overslash to own the property "isFunction" that is a function.', () => {
        expect(Overslash).to.own.property('isFunction').that.is.a('function');
      });

      it('Expects Overslash to own the property "isArray" that is a function.', () => {
        expect(Overslash).to.own.property('isArray').that.is.a('function');
      });

      it('Expects Overslash to own the property "isMath" that is a function.', () => {
        expect(Overslash).to.own.property('isMath').that.is.a('function');
      });

      it('Expects Overslash to own the property "isDate" that is a function.', () => {
        expect(Overslash).to.own.property('isDate').that.is.a('function');
      });

      it('Expects Overslash to own the property "isEmpty" that is a function.', () => {
        expect(Overslash).to.own.property('isEmpty').that.is.a('function');
      });


      // Operations on Objects (optional):
      it('Expects Overslash to own the property "clone" that is a function.', () => {
        expect(Overslash).to.own.property('clone').that.is.a('function');
      });

      it('Expects Overslash to own the property "extend" that is a function.', () => {
        expect(Overslash).to.own.property('extend').that.is.a('function');
      });

      it('Expects Overslash to own the property "keys" that is a function.', () => {
        expect(Overslash).to.own.property('keys').that.is.a('function');
      });

      it('Expects Overslash to own the property "forPropIn" that is a function.', () => {
        expect(Overslash).to.own.property('forPropIn').that.is.a('function');
      });

      it('Expects Overslash to own the property "assign" that is a function.', () => {
        expect(Overslash).to.own.property('assign').that.is.a('function');
      });


      // Operations on Arrays (optional):
      it('Expects Overslash to own the property "contains" that is a function.', () => {
        expect(Overslash).to.own.property('contains').that.is.a('function');
      });

      it('Expects Overslash to own the property "flatten" that is a function.', () => {
        expect(Overslash).to.own.property('flatten').that.is.a('function');
      });

      it('Expects Overslash to own the property "max" that is a function.', () => {
        expect(Overslash).to.own.property('max').that.is.a('function');
      });

      it('Expects Overslash to own the property "min" that is a function.', () => {
        expect(Overslash).to.own.property('min').that.is.a('function');
      });

      it('Expects Overslash to own the property "share" that is a function.', () => {
        expect(Overslash).to.own.property('share').that.is.a('function');
      });

      it('Expects Overslash to own the property "pull" that is a function.', () => {
        expect(Overslash).to.own.property('pull').that.is.a('function');
      });

      it('Expects Overslash to own the property "include" that is a function.', () => {
        expect(Overslash).to.own.property('include').that.is.a('function');
      });

      it('Expects Overslash to own the property "partition" that is a function.', () => {
        expect(Overslash).to.own.property('partition').that.is.a('function');
      });


      // Miscellaneous (optional):
      it('Expects Overslash to own the property "token" that is a function.', () => {
        expect(Overslash).to.own.property('token').that.is.a('function');
      });

      it('Expects Overslash to own the property "makeid" that is a function.', () => {
        expect(Overslash).to.own.property('makeid').that.is.a('function');
      });

      it('Expects Overslash to own the property "csv2array" that is a function.', () => {
        expect(Overslash).to.own.property('csv2array').that.is.a('function');
      });

      it('Expects Overslash to own the property "delay" that is a function.', () => {
        expect(Overslash).to.own.property('delay').that.is.a('function');
      });

      it('Expects Overslash to own the property "inRange" that is a function.', () => {
        expect(Overslash).to.own.property('inRange').that.is.a('function');
      });


      describe('Test the owned specific properties:', () => {
        // it('Expects the property "getString" to return the string "I am a string!".', () => {
        //   expect(Overslash.getString()).to.be.a('string').that.is.equal('I am a string!');
        // });
      });
    });
  });
};
