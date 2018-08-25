// --- Operations on csv blocks (optional) -----------------------------------
/* eslint-disable one-var, semi-style */

'use strict';

extend(overslash, {

  /**
   * Converts an csv block to an array or arrays.
   *
   * @function (arg1, arg2)
   * @public
   * @param {String}      a csv block,
   * @param {String}      [optional] the csv delimeter. By default, it is the comma,
   * @returns {Array}     returns the csv block converted to an array of arrays of elements,
   * @throws {String}     throws an error if the csv line is malformed,
   * @since 0.0.0
   */
  /* eslint-disable no-param-reassign, no-plusplus */
  csv2array: function(data, delimeter) {
    var newline = '\n'
      , EOF = ''
      , value
      , array
      , row
      , c
      , i
      ;

    if (!data) {
      throw new Error('The csv line argument is missing!');
    }
    if (typeof (data) !== 'string') {
      throw new Error('The csv line argument is not a string!');
    }

    // Set the Delimeter:
    if (!delimeter || typeof (delimeter) !== 'string' || delimeter.length > 1) {
      delimeter = ',';
    }

    i = 0;
    row = 0;
    c = data.charAt(i);
    array = [];

    // Parse char until the end of the string:
    while (c !== EOF) {
      // Skip the whitespaces:
      while (c === ' ' || c === '\t' || c === '\r') {
        c = data.charAt(++i);
      }

      // Extract the value: - "abc"""
      value = '';
      if (c === '"') {
        // Value enclosed by double-quotes:
        c = data.charAt(++i);

        // Parse until ending double quote found:
        do {
          /* istanbul ignore next */
          if (c !== '"') {
            // Read a regular character and go to the next character:
            value += c;
            c = data.charAt(++i);
          }

          if (c === '"') {
            // Check for successive escaped double-quote:
            do {
              if (data.charAt(i + 1) === '"') {
                // This is an escaped double-quote.
                // Add a double-quote to the value, and move two characters ahead:
                value += '"';
                i += 2;
                c = data.charAt(i);
              } else {
                // This is not an escaped double-quote.
                // Break the loop:
                break;
              }
            } while (c === '"');
          }
        } while (c !== EOF && c !== '"');

        // Ending double quote reached?
        /* istanbul ignore next */
        if (c === EOF) {
          throw new Error('Unexpected end of data, double-quote expected!');
        }

        // Go to the next character:
        c = data.charAt(++i);
      } else {
        // Value without quotes:
        while (c !== EOF && c !== delimeter && c !== newline && c !== ' ' && c !== '\t' && c !== '\r') {
          value += c;
          c = data.charAt(++i);
        }
        // If the value isn't between two double-quote, it is a number or a float:
        /* istanbul ignore next */
        if (value.length > 0) {
          value = parseFloat(value, 10);
        }
      }

      // Add the value to the array:
      if (array.length <= row) {
        array.push([]);
      }
      array[row].push(value);

      // Skip whitespaces:
      while (c === ' ' || c === '\t' || c === '\r') {
        c = data.charAt(++i);
      }

      // Go to the next row or column:
      if (c === delimeter) {
        // col++;
      } else if (c === newline) {
        // col = 0;
        row += 1;
      } /* istanbul ignore next */ else if (c !== EOF) {
        // Unexpected character:
        throw new Error('Delimeter expected after character ' + i);
      }

      // Go to the next character:
      c = data.charAt(++i);
    }

    return array;
  }
  /* eslint-enable no-param-reassign, no-plusplus */
});
/* eslint-enable one-var, semi-style */
