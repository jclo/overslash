// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0,
  no-unused-expressions: 0, dot-notation: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai');


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = (_) => {
  describe('Test functions that operate on array objects:', () => {
    //
    describe('_.contains():', () => {
      it('Expects _.contains([1, 2, 3], 2) to return true.', () => {
        expect(_.contains([1, 2, 3], 2)).to.be.true;
      });
      it('Expects _.contains([1, 2, 3], "s") to return false.', () => {
        expect(_.contains([1, 2, 3], 's')).to.be.false;
      });
      it('Expects _.contains(["a", "b", "c"], "c") to return true.', () => {
        expect(_.contains(['a', 'b', 'c'], 'c')).to.be.true;
      });
      it('Expects _.contains(["a", "b", "c"], "d") to return false.', () => {
        expect(_.contains(['a', 'b', 'c'], 'd')).to.be.false;
      });
    });

    describe('_.flatten():', () => {
      it('Expects _.flatten("string") to return undefined.', () => {
        expect(_.flatten('string')).to.be.undefined;
      });

      it('Expects _.flatten([1, 2, 3, 4, 5, 6]) to return an array with 6 elements.', () => {
        expect(_.flatten([1, 2, 3, 4, 5, 6])).to.be.an('Array').that.has.a.lengthOf(6);
      });
      it('Expects the first element to be 1.', () => {
        expect(_.flatten([1, 2, 3, 4, 5, 6])[0]).to.be.equal(1);
      });
      it('Expects the second element to be 2.', () => {
        expect(_.flatten([1, 2, 3, 4, 5, 6])[1]).to.be.equal(2);
      });
      it('Expects the third element to be 3.', () => {
        expect(_.flatten([1, 2, 3, 4, 5, 6])[2]).to.be.equal(3);
      });
      it('Expects the fourth element to be 4.', () => {
        expect(_.flatten([1, 2, 3, 4, 5, 6])[3]).to.be.equal(4);
      });
      it('Expects the fifth element to be 5.', () => {
        expect(_.flatten([1, 2, 3, 4, 5, 6])[4]).to.be.equal(5);
      });
      it('Expects the sixth element to be 6.', () => {
        expect(_.flatten([1, 2, 3, 4, 5, 6])[5]).to.be.equal(6);
      });

      it('Expects _.flatten([1, 2, 3, [4, 5, 6]]) to return an array with 6 elements.', () => {
        expect(_.flatten([1, 2, 3, [4, 5, 6]])).to.be.an('Array').that.has.a.lengthOf(6);
      });
      it('Expects the first element to be 1.', () => {
        expect(_.flatten([1, 2, 3, [4, 5, 6]])[0]).to.be.equal(1);
      });
      it('Expects the second element to be 2.', () => {
        expect(_.flatten([1, 2, 3, [4, 5, 6]])[1]).to.be.equal(2);
      });
      it('Expects the third element to be 3.', () => {
        expect(_.flatten([1, 2, 3, [4, 5, 6]])[2]).to.be.equal(3);
      });
      it('Expects the fourth element to be 4.', () => {
        expect(_.flatten([1, 2, 3, [4, 5, 6]])[3]).to.be.equal(4);
      });
      it('Expects the fifth element to be 5.', () => {
        expect(_.flatten([1, 2, 3, [4, 5, 6]])[4]).to.be.equal(5);
      });
      it('Expects the sixth element to be 6.', () => {
        expect(_.flatten([1, 2, 3, [4, 5, 6]])[5]).to.be.equal(6);
      });

      it('Expects _.flatten([[1,2], [3, 4], [5, 6]]) to return an array with 6 elements.', () => {
        expect(_.flatten([[1, 2], [3, 4], [5, 6]])).to.be.an('Array').that.has.a.lengthOf(6);
      });
      it('Expects the first element to be 1.', () => {
        expect(_.flatten([[1, 2], [3, 4], [5, 6]])[0]).to.be.equal(1);
      });
      it('Expects the second element to be 2.', () => {
        expect(_.flatten([[1, 2], [3, 4], [5, 6]])[1]).to.be.equal(2);
      });
      it('Expects the third element to be 3.', () => {
        expect(_.flatten([[1, 2], [3, 4], [5, 6]])[2]).to.be.equal(3);
      });
      it('Expects the fourth element to be 4.', () => {
        expect(_.flatten([[1, 2], [3, 4], [5, 6]])[3]).to.be.equal(4);
      });
      it('Expects the fifth element to be 5.', () => {
        expect(_.flatten([[1, 2], [3, 4], [5, 6]])[4]).to.be.equal(5);
      });
      it('Expects the sixth element to be 6.', () => {
        expect(_.flatten([[1, 2], [3, 4], [5, 6]])[5]).to.be.equal(6);
      });

      it('Expects _.flatten([[1,2, [3,4]], [5, 6]]) to return an array with 6 elements.', () => {
        expect(_.flatten([[1, 2, [3, 4]], [5, 6]])).to.be.an('Array').that.has.a.lengthOf(6);
      });
      it('Expects the first element to be 1.', () => {
        expect(_.flatten([[1, 2, [3, 4]], [5, 6]])[0]).to.be.equal(1);
      });
      it('Expects the second element to be 2.', () => {
        expect(_.flatten([[1, 2, [3, 4]], [5, 6]])[1]).to.be.equal(2);
      });
      it('Expects the third element to be 3.', () => {
        expect(_.flatten([[1, 2, [3, 4]], [5, 6]])[2]).to.be.equal(3);
      });
      it('Expects the fourth element to be 4.', () => {
        expect(_.flatten([[1, 2, [3, 4]], [5, 6]])[3]).to.be.equal(4);
      });
      it('Expects the fifth element to be 5.', () => {
        expect(_.flatten([[1, 2, [3, 4]], [5, 6]])[4]).to.be.equal(5);
      });
      it('Expects the sixth element to be 6.', () => {
        expect(_.flatten([[1, 2, [3, 4]], [5, 6]])[5]).to.be.equal(6);
      });

      it('Expects _.flatten([[1,2, [3,4], [5,6]]]) to return an array with 6 elements.', () => {
        expect(_.flatten([[1, 2, [3, 4], [5, 6]]])).to.be.an('Array').that.has.a.lengthOf(6);
      });
      it('Expects the first element to be 1.', () => {
        expect(_.flatten([[1, 2, [3, 4], [5, 6]]])[0]).to.be.equal(1);
      });
      it('Expects the second element to be 2.', () => {
        expect(_.flatten([[1, 2, [3, 4], [5, 6]]])[1]).to.be.equal(2);
      });
      it('Expects the third element to be 3.', () => {
        expect(_.flatten([[1, 2, [3, 4], [5, 6]]])[2]).to.be.equal(3);
      });
      it('Expects the fourth element to be 4.', () => {
        expect(_.flatten([[1, 2, [3, 4], [5, 6]]])[3]).to.be.equal(4);
      });
      it('Expects the fifth element to be 5.', () => {
        expect(_.flatten([[1, 2, [3, 4], [5, 6]]])[4]).to.be.equal(5);
      });
      it('Expects the sixth element to be 6.', () => {
        expect(_.flatten([[1, 2, [3, 4], [5, 6]]])[5]).to.be.equal(6);
      });

      it('Expects _.flatten([[1,2, [3,4, [5,6]]], true) to return an array with 3 elements.', () => {
        expect(_.flatten([[1, 2, [3, 4, [5, 6]]]], true)).to.be.an('Array').that.has.a.lengthOf(3);
      });
      it('Expects the first element to be 1.', () => {
        expect(_.flatten([[1, 2, [3, 4, [5, 6]]]], true)[0]).to.be.equal(1);
      });
      it('Expects the second element to be 2.', () => {
        expect(_.flatten([[1, 2, [3, 4, [5, 6]]]], true)[1]).to.be.equal(2);
      });
      it('Expects the third element to be an array with 3 elements.', () => {
        expect(_.flatten([[1, 2, [3, 4, [5, 6]]]], true)[2]).to.be.an('Array').that.has.a.lengthOf(3);
      });
      it('Expects the first element to be 3.', () => {
        expect(_.flatten([[1, 2, [3, 4, [5, 6]]]], true)[2][0]).to.be.equal(3);
      });
      it('Expects the second element to be 4.', () => {
        expect(_.flatten([[1, 2, [3, 4, [5, 6]]]], true)[2][1]).to.be.equal(4);
      });
      it('Expects the third element to be an array with 2 elements.', () => {
        expect(_.flatten([[1, 2, [3, 4, [5, 6]]]], true)[2][2]).to.be.an('Array').that.has.a.lengthOf(2);
      });
      it('Expects the first element to be 5.', () => {
        expect(_.flatten([[1, 2, [3, 4, [5, 6]]]], true)[2][2][0]).to.be.equal(5);
      });
      it('Expects the second element to be 6.', () => {
        expect(_.flatten([[1, 2, [3, 4, [5, 6]]]], true)[2][2][1]).to.be.equal(6);
      });
    });

    describe('_.max():', () => {
      it('Expects _.max("string") to return void(0))', () => {
        expect(_.max('string')).to.be.undefined;
      });

      it('Expects _.max(["a", "b", "c"]) to return void(0))', () => {
        expect(_.max(['a', 'b', 'c'])).to.be.undefined;
      });

      it('Expects _.max([1, 7, 5, -10]) to return 7', () => {
        expect(_.max([1, 7, 5, -10])).to.be.equal(7);
      });

      it('Expects _.max([1, [[7]], 5, -10]) to return 7', () => {
        expect(_.max([1, [[7]], 5, -10])).to.be.equal(7);
      });
    });

    describe('_.min():', () => {
      it('Expects _.min("string") to return void(0))', () => {
        expect(_.min('string')).to.be.undefined;
      });

      it('Expects _.min(["a", "b", "c"]) to return void(0))', () => {
        expect(_.min(['a', 'b', 'c'])).to.be.undefined;
      });

      it('Expects _.min([1, 7, 5, -10]) to return -10', () => {
        expect(_.min([1, 7, 5, -10])).to.be.equal(-10);
      });

      it('Expects _.max([1, 7, 5, [[-10]]]) to return -10', () => {
        expect(_.min([1, 7, 5, [[-10]]])).to.be.equal(-10);
      });
    });

    describe('_.share():', () => {
      it('Expects _.share([1, 2, 3], [2,3], [3]) to return an array that contains 1 item.', () => {
        expect(_.share([1, 2, 3], [2, 3], [3])).to.be.an('Array').that.has.a.lengthOf(1);
      });
      it('Expects this item to be equal to 3.', () => {
        expect(_.share([1, 2, 3], [2, 3], [3])[0]).to.be.equal(3);
      });
      it('Expects _.share([1, 2, 3], [2,3], [4]) to return an empty array.', () => {
        expect(_.share([1, 2, 3], [2, 3], [4])).to.be.an('Array').that.is.empty;
      });

      it('Expects _.share(["a", "bc", "de", "bc"], ["bc","de"], ["bc"]) to return an array that contains 1 item.', () => {
        expect(_.share(['a', 'bc', 'de', 'bc'], ['bc', 'de'], ['bc'])).to.be.an('Array').that.has.a.lengthOf(1);
      });
      it('Expects this item to be equal to "bc".', () => {
        expect(_.share(['a', 'bc', 'de'], ['bc', 'de'], ['bc'])[0]).to.be.equal('bc');
      });
      it('Expects _.share(["a", "bc", "de"], ["bc","de"], ["fg"]) to return an empty array.', () => {
        expect(_.share(['a', 'bc', 'de'], ['bc', 'de'], ['fg'])).to.be.an('Array').that.is.empty;
      });
    });

    describe('_.pull():', () => {
      const a = ['orange', 'banana', 'apple', 'apricots', 'peaches', 'strawberries'];
      const b = _.pull(a, 'banana', 'raspberries');

      const a2 = ['orange', 'banana', 'apple', 'apricots', 'peaches', 'strawberries'];
      const b2 = _.pull(a2, ['banana', 'apricots']);

      it('Expects _.pull(a, "banana", "raspberries") to return an array with 1 item.', () => {
        expect(b).to.be.an('array').that.has.lengthOf(1);
      });

      it('Expects this array to contain "banana".', () => {
        expect(b.indexOf('banana')).to.be.a('number').that.is.equal(0);
      });

      it('Expects the array "a" to have 5 items.', () => {
        expect(a).to.be.an('array').that.has.lengthOf(5);
      });

      it('Expects the array "a" not to have the item "banana".', () => {
        expect(a.indexOf('banana')).to.be.a('number').that.is.equal(-1);
      });


      it('Expects _.pull(a2, "banana", "apricots") to return an array with 2 items.', () => {
        expect(b2).to.be.an('array').that.has.lengthOf(2);
      });

      it('Expects this array to contain "banana".', () => {
        expect(b2.indexOf('banana')).to.be.a('number').that.is.equal(0);
      });

      it('Expects this array to contain "apricots".', () => {
        expect(b2.indexOf('apricots')).to.be.a('number').that.is.equal(1);
      });

      it('Expects the array "a2" to have 4 items.', () => {
        expect(a2).to.be.an('array').that.has.lengthOf(4);
      });

      it('Expects the array "a2" not to have the item "banana".', () => {
        expect(a2.indexOf('banana')).to.be.a('number').that.is.equal(-1);
      });

      it('Expects the array "a2" not to have the item "apricots".', () => {
        expect(a2.indexOf('apricots')).to.be.a('number').that.is.equal(-1);
      });
    });

    describe('_.include():', () => {
      const a = ['orange', 'banana', 'apple', 'apricots', 'peaches', 'strawberries'];
      const b = _.include(a, 'banana', 'raspberries');
      const c = _.include(a, ['banana', 'raspberries', 'apricots']);

      it('Expects _include(a, "banana", "raspberries") to return an array with 1 item.', () => {
        expect(b).to.be.an('array').that.has.lengthOf(1);
      });

      it('Expects this array to contain "banana".', () => {
        expect(b.indexOf('banana')).to.be.a('number').that.is.equal(0);
      });

      it('Expects _include(a, ["banana", "raspberries", "apricots"]) to return an array with 2 items.', () => {
        expect(c).to.be.an('array').that.has.lengthOf(2);
      });

      it('Expects this array to contain "banana".', () => {
        expect(c.indexOf('banana')).to.be.a('number').that.is.equal(0);
      });

      it('Expects this array to contain "apricots".', () => {
        expect(c.indexOf('apricots')).to.be.a('number').that.is.equal(1);
      });
    });

    describe('_.partition():', () => {
      const users = [
        { user: 'barney', age: 36, active: false },
        { user: 'fred', age: 40, active: true },
        { user: 'pebbles', age: 1, active: false },
      ];

      const resp = _.partition(users, (user) => user.age > 35);

      it('Expects "_.partition(users, (user) => user.age > 35)" to return an array.', () => {
        expect(resp).to.be.an('array').that.has.lengthOf(2);
      });

      it('Expects the first item to be an array with two items.', () => {
        expect(resp[0]).to.be.an('array').that.has.lengthOf(2);
      });

      it('Expects the second item to be an array with one item.', () => {
        expect(resp[1]).to.be.an('array').that.has.lengthOf(1);
      });

      it('Expects the first array to have the user "barney".', () => {
        expect(resp[0][0].user).to.be.a('string').that.is.equal('barney');
      });

      it('Expects the first array to have the user "fred".', () => {
        expect(resp[0][1].user).to.be.a('string').that.is.equal('fred');
      });

      it('Expects the second array to have the user "pebbles".', () => {
        expect(resp[1][0].user).to.be.a('string').that.is.equal('pebbles');
      });
    });
  });
};
