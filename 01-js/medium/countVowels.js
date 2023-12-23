/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelCount = 0;
  let stringLength = str.length;
  for (let i = 0; i < stringLength; i++) {
    if (
      character === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u"
    )
      vowelCount++;
  }
  return vowelCount;
}

module.exports = countVowels;
