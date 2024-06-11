//no 1

const input = 9;
const limit = 10;

for( let i = 1; i <= limit; i++) {
    console.log(`${input} x ${i} = ${input * i}`)
}

//no 2

function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

const str = "madam";
console.log(isPalindrome(str));

// //no2 cara 2 (no build in method)
// const kata = "madam";
// let reverse = "";

// console.log(kata.length - 1; i >= 0; 1--) {

// }

//no.3
    const cm =  100000
    const km = cm / 100000;

    console.log(km + "km")

//no.4
    let num = 10000;

    let rupiahFormat = new Intl.NumberFormat('id-ID', {
        style : 'currency',
        currency: 'IDR',
    }).format(num);
    console.log(rupiahFormat);

//no.5

function removeFirstOccurrence(string, searchString) {
    const index = string.indexOf(searchString);
    if (index !== -1) {
        return string.slice(0, index) + string.slice(index + searchString.length);
} else { 
    return string;
}
}

const string = "Hello world";
const searchString = "ell";
const result = removeFirstOccurrence(string, searchString);
console.log(result);


// cara simple
const words = "Hello Wolrd Hello";
const search = "ell";

const result1 = words.replace(search,"");
console.log(result1);





//no 6
const nama = "hello world";
function capitalize_Words(str){
return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

console.log(capitalize_Words('hello world'));

// //no 7
// function reverseString(str){
// const newString = "";

// for (let i = str. length - 1; i >= 0; i--) {
//     newString += str[i]; // or newString = newString + str[i]; 

// }
//     return newString;
// }

// console.log(reverseString('hello'));

//no 7

let stringToReverse = "hello";
let reverseString = [...stringToReverse].reverse().join("");

console.log(reverseString); 

// //metode 2

// const str ="hello";
// let temp = "";

// for let

 //no 8

 function swap(str) {
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LOWER = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (UPPER.indexOf(str[i]) !== -1) {
            result.push(str[i].toLowerCase());
        } else if (LOWER.indexOf(str[i]) !== -1) {
            result.push(str[i].toUpperCase());
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
 }

console.log(swap('The Quick Brown Fox'));


//metode 2

//no 9

function findLargest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const num1 = 42;
const num2 = 27;
const largest = findLargest(num1, num2);

console.log(largest);

// // //no 10

// function sortNumbers(num1, num2, num3) {
//     if (num1 <= num2 && num1 <= num3) {
//         if num2 <= num3) {
//             return [num1,num2,num3];
//         } else {
//             return [num1, num3, num2];
//         }
//     }else if (num2 <= num1 && num2 <= num3) {
//         if (num1 <= num3) {
//             return [num2, num1, num3];
//         } else {
//             return [num2, num3, num1]
//         } else {
//             if (num1 <= num2) {
//                 return [num2, num3, num1];
//             }
//         } else {
//             if (num1 <= num2) {
//                 return [num3, num1, num2];
//             } else {
//                 return [num3, num2, num1];
//             }
//         }
//     }


// let num1 = 42;
// let num2 = 27;
// let num3 = 18;
// let sortedNumbers = sortNumbers(num1, num2, num3);
// console.log("Sorted numbers:", sortedNumbers);

// no 11

function checkType(input) {
    if (typeof input === 'string'){
        return 1;
    } else if (typeof input === 'number') {
        return 2;
    } else {
        return 3;
    }
}

console.log(checkType("hello"));
console.log(checkType(42));
console.log(checkType(true));

//no 12

function replaceLetterA(input) {
    return input.replace(/a/g, '*');
}

const inputString = 'An apple a day keeps the doctor away';
const modifiedString = replaceLetterA(inputString);
console.log(modifiedString);


// // no 10

// const num11 = 42
// const num12 = 27
// const num3 = 18

// const smallest = Math.min(num1, num2, num3)
// const largest1 = Math.max(num1, num2, num3);
// const middle = num1 + num2 + num3 - smallest - largest1

// console.log('$(smallest'), $(middle), $(largest1)