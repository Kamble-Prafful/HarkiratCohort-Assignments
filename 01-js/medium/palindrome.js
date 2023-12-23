/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //* Initial Approach
  // for (let i = 0; i <= str.length - 1; i++) {
  //   str = str.replace(".", "");
  //   str = str.replace(",", "");
  //   str = str.replace("!", "");
  //   str = str.replace(":", "");
  //   str = str.replace(";", "");
  //   str = str.replace("-", "");
  //   str = str.replace(" ", "");
  //   str = str.replace("?", "");
  // }
  // return str.toLowerCase().split("").reverse().join("") === str.toLowerCase();

  //* Optimized Approach by doing R&D
  str = str.replace(/[.,!:;-? ]/g, "").toLowerCase();
  return str.toLowerCase().split("").reverse().join("") === str.toLowerCase();
}

module.exports = isPalindrome;
