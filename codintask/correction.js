// // //correction no 3 //exercisse 2

// // const num = 3
// // let isPrime =  true;

// // for let i =2; i < num; i++){
// //    //if (num % i === 0){
// //         isPrime = false;
// //         break;
// //     }
// // }

// //no 4

// const number = 5;
// const result = (number * (number + 1)) / 2;
// console.log(result);

// //cara2
// const angka = 5;
// let sum = 0;
// let message = "";

// for(let i=0; i <= angka; i++) {
//     sum += i;

//     message += i + "x";
// }

// console.log(message + "=" + sum);

// // //no 6
// // const n = 15;

// // console.log(`${smll}, ${middle}, ${largest}`);

// // let a = 0;
// // let b = 1;
// // // for (let i = 0; i < n; i ++) {
// // //     let next = a + b;
// // //     a = b;
// // //     b = next;
// // //     console.log(a);

// // //     console.log(a);

// // }

// // no 10 exercise day3

// const num1 = 42;
// const num2 = 27;
// const num3 = 18;

// const Largest = Math.max(num1, num2, num3);
// const smll = Math.min(num1, num2, num3);
// const middle = num1 + num2 + num3 - smll - Largest;

// console.log(`${Largest}, ${smll}, ${middle}`);

// //no 8
// const inputString = "tHe Quick BroWn FoX";
// let swappedString = "";

// for (let i = 0; i < inputString.length; i++){
//     const char = inputString[i];

//     if (char === char.toUpperCase()){
//         swappedString += char.toLowerCase();
//             } else {
//                 swappedString += char.toUpperCase();
//             }
// }

// console.log(swappedString);

// //no 7
// //cara 1 tanpa build in method

// const text = "hello";
// let temp = "";

// for (let i = text.length -1; i >= 0; i--){
//     temp += text[i];
// }

// console.log(temp);

// //cara 2 build in method

// const txt = "hello"
// const reverseString = txt.split("").reverse().join("");
// console.log(reverseString);
// //
// // // no 6
// // const inputString2 = "hello world";
// // const words = inputString.split("");

// // console.log(words);

// // for (let i = 0; i < words.length; i++){
// //     words[i] = words[i][0].toUpperCase() + words[i].slices(1);
// // }
