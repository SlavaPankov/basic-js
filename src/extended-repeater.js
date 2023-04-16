const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const result = [];

  if (!options.hasOwnProperty('repeatTimes')) {
    options.repeatTimes = 1;
  }

  if (!options.hasOwnProperty('additionRepeatTimes')) {
    options.additionRepeatTimes = 1;
  }

  if (!options.hasOwnProperty('separator')) {
    options.separator = '+';
  }

  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|';
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    let test = '';

    test += str;
    if (options.hasOwnProperty('addition')) {
      const additionResult = [];
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        additionResult.push(`${options.addition}`);
      }
      test += additionResult.join(options.additionSeparator);
    }
    result.push(test);
  }

  return result.join(options.separator);
}

module.exports = {
  repeater
};
