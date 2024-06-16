// // //no1
// // //Create a function to check if two objects are equal

// // // //cara 1
// // // const objt1 = 10;
// // // const objt2 = 10;
// // // console.log(objt1 === objt2); //output true

// // const objt1 = {a: 10, b: "hello", c: {nested: true}};
// // const objt2 = {a: 10, b: "hello", c: {nested: true}};

// // function areEqual(objt1, objt2) {
// //     if(typeof objt1 !== 'object' || typeof objt2 !== 'object') {
// //         return false;
// //     }
// //     const keys1 = Object.keys(objt1);
// //     const keys2 = Object.keys(objt2);

// //     if (keys1.length !== keys2.length)
// //         return false;
// //     }

// // for (let key of keys1) {
// //     if (typeof objt1[key] === 'object' && typeof objt2[key] === 'object') {
// //         if (!areEqual(obj1[key]), obj2[key]) {
// //             return false;
// //         }
// //     } else {
// //         if(abj1[key] !== obj2[key]) {
// //             return false;
// //         }
// //     }
// // }

// // return false;

// // console.log(areEqual(objt1, objt2));

// // //web reference : https://stackoverflow.com/questions/201183/how-can-i-determine-equality-for-two-javascript-objects

// //no 2
// // ● Create a function to get the intersection of two objects
// // ● Example
// // ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// // ○ Output: { a: 1 }

// //

// // const objtt1 = { a: 1, b: 2 }; //ini adl properti
// // const objtt2 = { a: 1, c: 3 };

// // function getIntersection(objtt1, objtt2) {
// //     let intersection = {};
// //     for (let prop in objtt1) {
// //         if (objtt2.hasOwnProperty(prop) && objtt1[prop] === objtt2[prop]) {
// //             intersection[prop] = objtt1[prop];
// //         } //if properti obbj1 = obbjt2, add properti and return
// //     }
// //     return intersection;
// // }

// // console.log(getIntersection(objtt1, objtt2));

// //web reference : https://www.geeksforgeeks.org/intersection-of-two-objects-in-r-programming-intersect-function/

// //no 3

// //
// //Create a function that can accept input as an array of objects and switch all values into property and
// // property into value
// // ● Example :
// // ○ Input : [{ name: ‘Riyanca’, age: 20 }]
// // ○ Output : [{ Riyanca: ‘name’, 20: ‘age’}]

// function switchProperties(obj) {
//   let swapped = {};
//   for (const key1 in obj) {
//     if (Object.hasOwnProperty.call(obj, key1)) {
//       swapped[obj[key1]] = key1;
//       break;
//     }
//   }
//   return swapped;
// }

// const input = {
//   Nama: "Riyanca",
//   age: 10,
// };

// console.log(switchProperties(input));

// // return arr.map(obj = > {
// //     return Object.entries(obj).reduce(acc, [key, value]) => {
// //         acc[value] = key;
// //         return acc;
// //         }

// //         });
// //         }

// // const output = switchProperties(input);

// // console.log(output);

// // const input = [{ name: 'Riyanca', age: 10}]

// //no 5

// //● Create a function to find a factorial number using recursion
// // ● Example
// // ○ Input : 5
// // ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

// //
