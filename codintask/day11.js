//no 1
// //● Create a function to convert Excel sheet column title to its corresponding column number.
// ● Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...
// ● Example :
// ○ Input : AB
// ○ Output : 28

function excelSheetColumnTittleToNumber(colomnTittle) {
  let colomnNumber = 0;
  for (let i = 0; i < colomnTittle.length; i++) {
    colomnNumber =
      colomnNumber * 26 + (colomnTittle.charCodeAt(i) - "A".charCodeAt(0) + 1);
  }
  return colomnNumber;
}

console.log(excelSheetColumnTittleToNumber("AB"));

//no 2
//Given a non-empty array of integers nums, every element appears twice except for one. Find that
// single one.
// ● Example 1:
// ○ Input: nums = [2,2,1]
// ○ Output: 1
// ● Example 2:
// ○ Input: nums = [4,1,2,1,2]
// ○ Output: 4
// ● Example 3:
// ○ Input: nums = [1]
// ○ Output: 1

function findSingleNumber(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}

console.log(findSingleNumber([2, 2, 1]));
console.log(findSingleNumber([4, 1, 2, 1, 2]));
console.log(findSingleNumber([1]));

//no 3
// //Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// ● Example 1:
// ○ Input: s = "anagram", t = "nagaram"
// ○ Output: true
// ● Example 2:
// ○ Input: s = "rat", t = "car"
// ○ Output: false

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sCount = {};
  let tCount = {};
  for (let i = 0; i < s.length; i++) {
    sCount[s[i]] = (sCount[s[i]] || 0) + 1;
    tCount[t[i]] = (tCount[t[i]] || 0) + 1;
  }
  for (let key in sCount) {
    if (sCount[key] !== tCount[key]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

//no 4
//You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
// steps. In how many distinct ways can you climb to the top?
// ● Example 1:
// ○ Input: n = 2
// ○ Output: 2
// ○ Explanation: There are two ways to climb to the top.
// ■ 1. 1 step + 1 step
// ■ 2. 2 steps

// ● Example 2:
// ○ Input: n = 3
// ○ Output: 3
// ○ Explanation: There are three ways to climb to the top.
// ■ 1. 1 step + 1 step + 1 step
// ■ 2. 1 step + 2 steps
// ■ 3. 2 steps + 1 step

function climbStairs(n) {
  if (n <= 2) {
    return n;
  }
  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(climbStairs(2));
console.log(climbStairs(3));
