//no 2
//Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(6);
fizzBuzz(15);

//no3
//
// Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))2
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// // ○ > 39.9 return “obesity”

function calculateBMI(weight, height) {
  const bmi = weight / height ** 2;
  if (bmi < 18.7) {
    return "less weight";
  } else if (bmi > 18.7 && bmi < 24.9) {
    return "ideal";
  } else if (bmi > 25.0 && bmi < 29.9) {
    return "overweight";
  } else if (bmi > 30.0 && bmi < 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

console.log(calculateBMI(80, 1.6));
console.log(calculateBMI(65, 1.7));
console.log(calculateBMI(120, 1.8));

//no 4
// //Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArray = filterEvenNumbers(originalArray);
console.log(evenNumbersArray);

// //no 5
// //Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

function stringToWords(str) {
  return str.split(" ");
}

const originalString = "Hello World";
const wordsArray = stringToWords(originalString);
console.log(wordsArray);
