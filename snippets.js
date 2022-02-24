// Add an event listener to each item in a set of items

const /*SET_NAME*/ = document.querySelectorAll("/*SETSELECTOR*/")

Array.from(/*SET_NAME*/).forEach(element => element.addEventListener('click', /*FUNCTION_NAME*/))

function /*FUNCTION_NAME*/(click) {...arguments.}
//click.target


// Pick a random element from an array

function randomElement(array) {
  //generate a number between 0 and the length of the array
  let randomNum = Math.floor(Math.random() * array.length); 
  console.log(`${randomNum}`);
  let randomArray = array[randomNum];
  return randomArray;
};