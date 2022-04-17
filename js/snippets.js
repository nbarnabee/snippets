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