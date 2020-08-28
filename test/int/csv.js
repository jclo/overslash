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
  describe('Test the csv functions:', () => {
    //
    describe('_.csv2array():', () => {
      it('Expects _.csv2array() to throw an error.', () => {
        let err = false;
        try { _.csv2array(); } catch (e) { err = true; }
        expect(err).to.be.equal(true);
      });

      it('Expects _.csv2array(1) to throw an error.', () => {
        let err = false;
        try { _.csv2array(1); } catch (e) { err = true; }
        expect(err).to.be.equal(true);
      });

      it('Expects _.csv2array("1,2,3") to return an array with 1 element.', () => {
        expect(_.csv2array('1,2,3')).to.be.an('Array').that.has.lengthOf(1);
      });

      it('Expects this element to be an array with 3 elements.', () => {
        expect(_.csv2array('1,2,3')[0]).to.be.an('Array').that.has.lengthOf(3);
      });

      it('Expects _.csv2array("1,2,3", ";")[0] to return an array with 1 element.', () => {
        expect(_.csv2array('1,2,3', ';')[0]).to.be.an('Array').that.has.lengthOf(1);
      });

      it('Expects _.csv2array("1,2;3", ";")[0] to return an array with 2 elements.', () => {
        expect(_.csv2array('1,2;3', ';')[0]).to.be.an('Array').that.has.lengthOf(2);
      });

      it('Expects _.csv2array(\' "ab,c",1,"cde" , 0.01\')[0] to return an array with 4 elements.', () => {
        expect(_.csv2array(' "ab,c",1,"cde" , 0.01')[0]).to.be.an('Array').that.has.lengthOf(4);
      });

      it('Expects the first element to be equal to "ab,c".', () => {
        expect(_.csv2array(' "ab,c",1,"cde" , 0.01')[0][0]).to.be.a('String').that.is.equal('ab,c');
      });

      it('Expects the second element to be equal to 1.', () => {
        expect(_.csv2array(' "ab,c",1,"cde" , 0.01')[0][1]).to.be.a('Number').that.is.equal(1);
      });

      it('Expects the third element to be equal to "cde".', () => {
        expect(_.csv2array(' "ab,c",1,"cde" , 0.01')[0][2]).to.be.a('String').that.is.equal('cde');
      });

      it('Expects the thourth element to be equal to 0.01.', () => {
        expect(_.csv2array(' "ab,c",1,"cde" , 0.01')[0][3]).to.be.a('Number').that.is.equal(0.01);
      });

      it('Expects _.csv2array(\'"abc 24"""\')[0] to return an array with 1 element.', () => {
        expect(_.csv2array('"abc 24"""')[0]).to.be.an('Array').that.has.lengthOf(1);
      });

      it('Expects this element to be equal to abc 24".', () => {
        expect(_.csv2array('"abc 24"""')[0][0]).to.be.a('String').that.is.equal('abc 24"');
      });

      it('Expects _.csv2array(\'"abc 24"""""\')[0] to return an array with 1 element.', () => {
        expect(_.csv2array('"abc 24"""')[0]).to.be.an('Array').that.has.lengthOf(1);
      });

      it('Expects this element to be equal to abc 24"".', () => {
        expect(_.csv2array('"abc 24"""""')[0][0]).to.be.a('String').that.is.equal('abc 24""');
      });

      it('Expects _.csv2array(\'1,2,3\\n4,5\\n"abc\\nde"\') to return an array with 3 elements.', () => {
        expect(_.csv2array('1,2,3\n4,5\n"abc\nde"')).to.be.an('Array').that.has.lengthOf(3);
      });

      it('Expects the first element to be an array with 3 elements.', () => {
        expect(_.csv2array('1,2,3\n4,5\n"abc\nde"')[0]).to.be.an('Array').that.has.lengthOf(3);
      });

      it('Expects the second element to be an array with 2 elements.', () => {
        expect(_.csv2array('1,2,3\n4,5\n"abc\nde"')[1]).to.be.an('Array').that.has.lengthOf(2);
      });

      it('Expects the third element to be an array with 1 element.', () => {
        expect(_.csv2array('1,2,3\n4,5\n"abc\nde"')[2]).to.be.an('Array').that.has.lengthOf(1);
      });
    });
  });
};
