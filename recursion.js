/** product: calculate the product of an array of numbers. */

function product(nums) {
  //set base case -> array is empty -> needs to return one
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestString = "") {
  // let longestString = -Infinity; // 'hello'

  // base case
  if (words.length === 0) return longestString.length;

  if (words[0].length > longestString.length) longestString = words[0];

  // recursive case
  return longest(words.slice(1), (longestString = longestString));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;

  if (val === arr[0]) return true;

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str[0] !== str[str.length - 1]) return false;
  if (str.length === 0) return true;

  return isPalindrome(str.slice(1, str.length - 1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  let copy = str.slice();
  if (copy.length === 0) return "";
  const last = copy.slice(-1);
  debugger;

  return last + revString(copy.slice(0, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  let out = -1;

  function _find(arr, i) {
    if (arr.length === i) return;

    if (arr[i] === val) {
      out = i;
      return;
    }

    _find(arr, i + 1);
  }

  _find(arr, 0);
  return out;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const result = [];

  function _gather(obj) {
    for (let key in obj) {
      debugger;
      if (typeof obj[key] === 'object' && obj[key].constructor === Object) {
        _gather(obj[key]);
        debugger;
      } else if (typeof obj[key] === 'string') {
        result.push(obj[key]);
        debugger;
      }
    }
  }

  _gather(obj);
  return result;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
