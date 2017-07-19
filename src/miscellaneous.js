
  // --- Miscellaneous (optional) ----------------------------------------------
  /**
   * Returns a unique string pattern in base 36 ([0-9a-z]).
   *
   * @function ()
   * @public
   * @param {}            -,
   * @returns             -,
   * @since 0.0.0
   */
  _.nop = /* istanbul ignore next */ function() {
    //
  };

  /**
   * Returns a unique string pattern in base 36 ([0-9a-z]).
   *
   * @function ()
   * @public
   * @param {}            -,
   * @returns {String}    returns a random string,
   * @since 0.0.0
   */
  _.token = function() {
    return Math.random().toString(36).substr(2);
  };

  /**
   * Returns a unique string pattern with a predefined length.
   *
   * @function ([arg1])
   * @public
   * @param {Number}      the length of the string. Default is 16 chars,
   * @returns {String}    returns a random string from the charset defined in c,
   * @since 0.0.0
   */
  _.makeid = function(l) {
    var ll = _.isNumber(l) ? l : 16
      , c  = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
      , id = ''
      , i
      ;

    for (i = 0; i < ll; i++) {
      id += c.charAt(Math.floor(Math.random() * c.length));
    }
    return id;
  };

  /**
   * Converts an csv block to an array or arrays.
   *
   * @function (arg1, arg2)
   * @public
   * @param {String}      a csv block,
   * @param {String}      [optional] the csv delimeter. By default, it is the comma,
   * @returns {Array}     returns the csv block converted to an array of arrays of elements,
   * @throws {String}     throws an error if the csv line is malformed,
   * @since 0.0.6
   */
  /* eslint-disable no-param-reassign, no-plusplus */
  _.csv2array = function(data, delimeter) {
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
        if (c === EOF) {
          /* istanbul ignore next */
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
      } else if (c !== EOF) {
        // Unexpected character:
        /* istanbul ignore next */
        throw new Error('Delimeter expected after character ' + i);
      }

      // Go to the next character:
      c = data.charAt(++i);
    }

    return array;
  };
  /* eslint-enable no-param-reassign, no-plusplus */
