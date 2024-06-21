//no 1
// //Given an array nums of size n, return the majority element. The majority element is the element that
// appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// ● Example 1:
// ○ Input: nums = [3,2,3]
// ○ Output: 3
// ● Example 2:
// ○ Input: nums = [2,2,1,1,1,2,2]
// ○ Output: 2

function majorityelement(numss) {
  let count = 0;
  let candidate = null;

  for (let nums of numss) {
    if (count === 0) {
      candidate = nums;
    }
    count += nums === candidate ? 1 : -1;
  }
  return candidate;
}

console.log(majorityelement([3, 2, 3]));
console.log(majorityelement([2, 2, 1, 1, 1, 2, 2]));

//no 2
//Create a function to convert roman numeral to integer.
// ● Example 1:
// ○ Input: s = "III”
// ○ Output: 3
// ○ Explanation: III = 3.
// ● Example 2:
// ○ Input: s = "LVIII"
// ○ Output: 58
// ○ Explanation: L = 50, V= 5, III = 3.
// ● Example 3:
// ○ Input: s = "MCMXCIV"
// ○ Output: 1994
// ○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && romanMap[s[i]] < romanMap[s[i + 1]]) {
      result -= romanMap[s[i]];
    } else {
      result += romanMap[s[i]];
    }
  }
  return result;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

//no 3
//Given an integer numRows, return the first numRows of
// Pascal's triangle.
// ● In Pascal's triangle, each number is the sum of the two
// numbers directly above it as shown →
// ● Example 1:
// ○ Input: numRows = 5
// ○ Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// ● Example 2:
// ○ Input: numRows = 1
// ○ Output: [[1]]

function generatePascalTriangle(numRows) {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    triangle[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }
  return triangle;
}

console.log(generatePascalTriangle(5));

console.log(generatePascalTriangle(1));
