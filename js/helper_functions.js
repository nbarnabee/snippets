// Pick a random element from an array

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//comparing the values of two arrays and place the shared values into a third array

function filterShared(arr1, arr2) {
  let shared = arr1.filter((a) => arr2.includes(a));
  return shared;
}

// comparing the values of two arrays and seeing whether all of the values in the first array are contained in the section

const containsAll = (arr1, arr2) => arr1.every((ele) => arr2.includes(ele));

// related, if you're trying to match a set of values to one of a number of sets contained within a 2D array (e.g., in my tic-tac-toe game)
// however, this only works if the two sets are EXACT matches, with no extra numbers

function evaluateSet(set, twoDArray) {
  for (i = 0; i < twoDArray.length; i++) {
    if (set.every((ele) => twoDArray[i].includes(ele))) return true;
  }
}

// this function is what I ended up using with my tic-tac-toe game, to see if all of the numbers from a particular array within the array of arrays could be found in the target array

function evaluateSetInsideOut(set, twoDArray) {
  for (i = 0; i < twoDArray.length; i++) {
    if (twoDArray[i].every((ele) => set.includes(ele))) return true;
  }
}

// to go deeper with multidimensional arrays, I would just need to add nested for loops

// counting occurrences of a particular value in an array

const occurrenceCount = (arr) =>
  arr.reduce((count, value) => {
    count[value] = count[value] ? count[value] + 1 : 1;
    return count;
  }, {});

// and the MDN had a version that I like somewhat better

function occurrenceCount2(arr) {
  arr.reduce(function (totalCount, current) {
    if (current in totalCount) {
      totalCount[current]++;
    } else totalCount[current] = 1;
    return totalCount;
  }, {});
}

// and here's another variation on the theme

let countObj = A.reduce(
  (count, value) => ((count[value] = (count[value] || 0) + 1), count),
  {}
);

// and another

let numberOf = {};
array.forEach((a) => (numberOf[a] = (numberOf[a] || 0) + 1));

// each element as it appears in the array is assigned as key in the numberOf object, with an initial value of one.
// each time the element appears, the numberOf object is checked, and if it already exists, its value is increased by 1

// removing duplicate entries from an array

const removeDupes = (arr) => arr.filter((e, i, arr) => i === arr.indexOf(e));

// returns only those elements whose index position in the parent array matches the index position of their first occurrence
