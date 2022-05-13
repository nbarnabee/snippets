// Add an event listener to each item in a set of items

const SETNAME = document.querySelectorAll("/*SETSELECTOR*/")

Array.from(SETNAME).forEach(element => element.addEventListener('click', FUNCTIONNAME))

function FUNCTIONNAME(click) {
  ////click.target will point to the particular element that was clicked
}

// how to access root CSS styles in JS
// document.documentElement represents the :root element
const rootStyles = getComputedStyle(document.documentElement);
const scale3 = rootStyles.getPropertyValue("--s3");

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