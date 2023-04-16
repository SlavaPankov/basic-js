const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // const strFromNumber = Array.from(n.toString());
  const arrOfNum = [];

  for(let i = 0; i < Array.from(n.toString()).length; i++) {
    const strFromNumber = Array.from(n.toString());
    strFromNumber.splice(i, 1)
    arrOfNum.push(strFromNumber.join(''));
  }

  return Number(Math.max(...arrOfNum));
}

module.exports = {
  deleteDigit
};
