const { NotImplementedError } = require('../extensions/index.js');
const {min} = require("mocha/lib/reporters");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      const neighbor = getNeighborItem(matrix, i, j);

      neighbor.forEach((item) => {
        if (item) {
          count++;
        }
      });

      row.push(count);
    }
    result.push(row);
  }

  return result;
}

function getNeighborItem(matrix, x, y) {
  const result = [];
  if (matrix[x - 1]) {
    result.push(matrix[x - 1][y], matrix[x - 1][y + 1], matrix[x - 1][y - 1]);
  }

  if (matrix[x + 1]) {
    result.push(matrix[x + 1][y], matrix[x + 1][y + 1], matrix[x + 1][y - 1]);
  }

  result.push(matrix[x][y - 1], matrix[x][y + 1]);

  return result;
}

const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
];

module.exports = {
  minesweeper
};
