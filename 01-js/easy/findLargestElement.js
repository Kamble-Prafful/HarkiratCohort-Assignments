/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  //* Initial Approach
  //   const sortedArr = numbers.sort((a, b) => a - b);
  //   return sortedArr[sortedArr.length - 1];

  //* Optimized Approach by doing R&D
  return numbers.length ? Math.max(...numbers) : undefined;
}

module.exports = findLargestElement;
