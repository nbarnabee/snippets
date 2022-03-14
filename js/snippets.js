// Add an event listener to each item in a set of items

const SETNAME = document.querySelectorAll("/*SETSELECTOR*/")

Array.from(SETNAME).forEach(element => element.addEventListener('click', FUNCTIONNAME))

function FUNCTIONNAME(click) {
  ////click.target will point to the particular element that was clicked
}



// Pick a random element from an array

function randomElement(array) {
  //generate a number between 0 and the length of the array - 1 (because the array's length will always be one greater than the index position of its final element)
  let randomNum = Math.floor(Math.random() * (array.length - 1)); 
  console.log(`${randomNum}`);
  let randomArrayElement = array[randomNum];
  return randomArrayElement;
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