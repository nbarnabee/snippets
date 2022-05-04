// Add an event listener to each item in a set of items

const SETNAME = document.querySelectorAll("/*SETSELECTOR*/")

Array.from(SETNAME).forEach(element => element.addEventListener('click', FUNCTIONNAME))

function FUNCTIONNAME(click) {
  ////click.target will point to the particular element that was clicked
}



// Pick a random element from an array

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)]; 
};



// how to access root CSS styles in JS
// document.documentElement represents the :root element
const rootStyles = getComputedStyle(document.documentElement);
const scale3 = rootStyles.getPropertyValue("--s3");



//comparing the values of two arrays and placing the shared values into a third array
const bobsFollowers = ["Steve", "Eric", "Hans", "Patrick"];

const tinasFollowers = ["Jessica", "Patrick","Steve"];

const mutualFollowers = [];

for (let i = 0; i<bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    };
  };
}
console.log(mutualFollowers);


// comparing the values of two array and seeing whether all of the values in one array are contained in the other

let containsAll = arr1.every(ele => arr2.includes(ele));

// related, if you're looking for the values within an array of arrays

function evaluateSet(set) {
  for (i = 0; i < victorySets.length; i++) {
    if (set.every(num => victorySets[i].includes(num)))
    return true
  }
}

// but the above only works if the set you're checking matches one of the target sets EXACTLY, e.g. with no extra numbers.

function evaluateSet(set) {
  for (i = 0; i < victorySets.length; i++) {
    if (victorySets[i].every(num => set.includes(num)))
    return true
  }
}

// here's the solution from my tic-tac-toe game, which checks it the other way around, so if every number from one of the victory sets is included in the player set, then the player wins!



// This is not something to copy, just something that I should study to remind myself of how callback functions work

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
let checkA = val + 2;
let checkB = func(val);
if (checkA === checkB) {
  return func(val)
  }
  else return 'inconsistent results';
}

console.log(checkConsistentOutput(addTwo, 2));