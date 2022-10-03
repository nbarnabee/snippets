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
// to go deeper with multidimensional arrays, I would just need to add nested for loops

function evaluateSetInsideOut(set, twoDArray) {
  for (i = 0; i < twoDArray.length; i++) {
    if (twoDArray[i].every((ele) => set.includes(ele))) return true;
  }
}

// counting occurrences of a particular value in an array
// each element as it appears in the array is assigned as key in the aggregation object
// each time the element appears, its value in the aggregation object is checked.  if the value exists, it is incremented by one; if not, it is added to the object

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

// removing duplicate entries from an array

const removeDupes = (arr) => arr.filter((e, i, arr) => i === arr.indexOf(e));

// returns only those elements whose index position in the parent array matches the index position of their first occurrence

// but there's a simpler way that I always forget:  Set!

const removeDupesViaSet = (arr) => new Set(arr);

// Truncating a string

const truncate = function (str, len) {
  if (str.length > len && str.length > 0) {
    let new_str = str + " ";
    new_str = str.substr(0, len); // Sets the string to the maximum length
    new_str = str.substr(0, new_str.lastIndexOf(" ")); // Ends the string on a space, thus eliminating any words that got cut through
    new_str = new_str.length > 0 ? new_str : str_substr(0, len); // If for some reason the string is now empty (like there was only a single word that got cut off), it returns to the earlier value.  The reader will just have to cope with a truncated word.
    return new_str + "...";
  }
  return str;
};

// a function to bulk-add attributes to a dynamically generated HTML element
function setAttributes(elem, attributes) {
  for (let entry in attributes) {
    elem.setAttribute(entry, attributes[entry]);
  }
}

// how you'd use it:
let editItem = document.createElement("input");
setAttributes(editItem, {
  type: "image",
  class: "edit",
  src: "/images/pencil.svg",
  alt: "Edit item",
  title: "Edit item",
});

// what you'd end up with:
// <input type = "image" class = "edit" src = "/images/pencil.svg" alt = "Edit item" title = "Edit item">

/* setting a delay on a series of items (so, for instance, if you wanted an event to fire, then a break, then the second event, then a break, etc. */

const events = async (eventList) => {
  for (let item in eventList) {
    await delay(600);
    console.log(item.name);
    callbackFunction(item);
  }
};

function delay(time) {
  return new Promise((res) => setTimeout(res, time));
}
