const { NotImplementedError } = require('../extensions/index.js');

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
  let field = [];

  for (let rows = 0; rows < matrix.length; rows++) {
    let fieldRow = [];

    for (let cols = 0; cols < matrix[0].length; cols++) {
      let counter = 0;

      for (let i = rows - 1; i <= rows + 1; i++) {
        for (let j = cols - 1; j <= cols + 1; j++) {
          if (!(i === rows && j === cols) && (i >= 0 && i < matrix.length) && (j >= 0 && j < matrix[0].length)) {
            if (counter += matrix[i][j]) true;
          }
        }
      }

      fieldRow.push(counter);
    }

    field.push(fieldRow);
  }

  return field;
} 

    
module.exports = {
  minesweeper
};
