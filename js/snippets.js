// Add an event listener to each item in a set of items

const SETNAME = document.querySelectorAll("/*SETSELECTOR*/")

Array.from(SETNAME).forEach(element => element.addEventListener('click', FUNCTIONNAME))

function FUNCTIONNAME(click) {
  ////click.target will point to the particular element that was clicked
}



// Pick a random element from an array

function randomElement(array) {
  //generate a number between 0 and the length of the array
  let randomNum = Math.floor(Math.random() * array.length); 
  console.log(`${randomNum}`);
  let randomArray = array[randomNum];
  return randomArray;
};



// how to access root CSS styles in JS
// document.documentElement represents the :root element
const rootStyles = getComputedStyle(document.documentElement);
const scale3 = rootStyles.getPropertyValue("--s3");