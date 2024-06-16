// // //no 1
// // function generatePyramid(height) {
// //     const totalNumberofRows = 10;
// //     const arr = new Array();
// //     for (const i = 1; i <= totalNumberofRows; i++) {
// //        for (const i = 1; j <= i; j++) {
// //         arr.push(j);
// //         console.log(j);
// //        }
// //        console.log("\n");
// //     }
// // }

// //no 1

// function printTriangle(height) {
//   let num = 1;
//   for (let i = 1; i <= height; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//       row += (num < 10 ? "0" : " ") + num.toString().padStart(2, "0") + " ";
//       num++;
//     }
//     console.log(row);
//   }
// }

// printTriangle(4);

// // no 2

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(15);

// //no 3

// function calculateBMI(weight, height) {
//   let bmi = weight / (height * height);
//   if (bmi < 18.5) {
//     return "less weight";
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     return "ideal";
//   } else if (bmi >= 25.0 && bmi <= 29.9) {
//     return "overweight";
//   } else if (bmi >= 30.0 && bmi <= 39.9) {
//     return "obesity";
//   }
// }

// let weight = 70; //in kg
// let height = 1.75; // in meters
// let result = calculateBMI(weight, height);
// console.log("BMI Category:", result);

// //no 4

// function remove0ddNumbers(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = remove0ddNumbers(numbers);
// console.log(evenNumbers);

// //no 5
// function splitStringIntoWords(string) {
//   return string.split("");
// }

// let sentence = "Hello Wolrd";
// let wordsArray = splitStringIntoWords(sentence);
// console.log(wordsArray);

// //no 1 metode lain

// // function segitiga(height){
// //     for (let i = 1; i <= height; i++){
// //         let row = "";
// //         for
// //     }
// // }

// //no 5 metode lain
// function removeOddNumber(arr) {
//   return arr.filter((number) => number % 2 === 0);
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(remove0ddNumbers(array));

// // // cara no build in method

// // function remove0ddNumbers(arr) {
// //     const temp = [];
// //     for (let i = 0; i < arr.length; i++){
// //         if (arr[i] % 2 === 0)
// //     }
// // }
