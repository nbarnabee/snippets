//Reversing an array in place without using .reverse()

reverseArray = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
};

// this loops over half of the given array (rounded down, because the middle value in an odd-numbered array won't move), and swaps each nth value with its n-1th partner

// Looping through an array in a circular fashion (e.g., when you get to the end, return to the beginning)

array[(i + 1) % array.length];

// this is an example of modular arithmetic

// Two sum problem

function twoSum(arr, target) {
  const collection = {};
  let difference;
  for (let i = 0; i < arr.length; i++) {
    difference = Math.abs(arr[i] - target);
    if (difference in collection) {
      return [collection[difference], i];
    } else {
      collection[arr[i]] = i;
    }
  }
}

// Find the position of a value in a matrix
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// To find the "row" - i.e., the index of the subarray that contains the sought-after value..

function findRow(arr, value) {
  return arr.findIndex((row) => row.indexOf(value) !== -1);
}

// To find both column and row  - i.e., the index of the subarray that contains the value AND the index position of the value within that subarray..

function find2d(arr, value) {
  let row = 0,
    col = -1;
  while (row < arr.length && (col = arr[row].indexOf(value)) === -1) row++;
  // here we have a loop that will iterate over the rows, so long as the value does not appear in the given row (in other words, the indexOf === -1)
  return row === arr.length ? "Value not found" : [row, col];
  // if we reach a point where we've gone past the number of elements in the matrix (which would mean that the item has never been found)
  // we return the error statement, or else we return the current value of row and the value of col, which was set in line 51
  // it's important to remember that so long as the value of col remains -1 (and the row does not exceed the number of elements in the array), the while loop will keep executing.
  // that's how this is working
}
