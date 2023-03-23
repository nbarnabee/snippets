// Add an event listener to each item in a set of items

const SETNAME = document.querySelectorAll("/*SETSELECTOR*/");

Array.from(SETNAME).forEach((element) =>
  element.addEventListener("click", FUNCTIONNAME)
);

function FUNCTIONNAME(click) {
  ////click.target will point to the particular element that was clicked
}

// how to access root CSS styles in JS
// document.documentElement represents the :root element
const rootStyles = getComputedStyle(document.documentElement);
const scale3 = rootStyles.getPropertyValue("--s3");

// This is not something to copy, just something that I should study to remind myself of how callback functions work

const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  if (checkA === checkB) {
    return func(val);
  } else return "inconsistent results";
};

console.log(checkConsistentOutput(addTwo, 2));

// a simple countdown timer

function countDown(seconds) {
  setInterval(function () {
    if (seconds >= 0) {
      document.querySelector("h1").textContent = seconds;
      seconds--;
    } else document.querySelector("h1").textContent = "Time's up!";
  }, 1000);
}

// something that I can't immediately think of a use for, but it sounds like a future codewars problem:  checking for two adjacent elements in an array whose sum = a certain figure:

function neighbourSumValue(arr, target) {
  arr.some((a, i, arr) => {
    x = arr[i];
    y = arr[i + 1];
    return x + y == target;
  });
  console.log(x, y);
}

// this tells you if a pair exists, though it won't tell you their value, like the above will
function neighbourSumCheck(arr, target) {
  return arr.some((a, i, arr) => arr[i] + arr[i + 1] == target);
}
