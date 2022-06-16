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
