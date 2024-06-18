//Module Intro to programming, variable and data types.pdf

// no 1
//Write a code to find area of retang
//Example : length = 5, width = 3 → 15

const length = 5;
const width = 3;

const sumretan = length * width;
console.log(sumretan);

//no 2
//Write a code to find perimeter of rectan
//Example : length = 5, width = 3 → 16

const lengthh = 5;
const widthh = 3;

const sumrentann = 2 * (lengthh + widthh);
console.log(sumrentann);

//no 3
//Write a code to find diameter, circumference and area of a circle.
//Example : radius = 5
//Output : diameter = 10, circumference = 31.4159, area = 78.539

const radius = 5;

const diameter = 2 * radius;
const circumference = Math.PI * diameter;
const Area = Math.PI * Math.pow(radius, 2); //sebab kuadrat 2

console.log(diameter);
console.log(circumference);
console.log(Area);

//no 4
//Write a code to find angles of triangle if two angles are given.
// Example : a = 80, b = 65 → 35

const a = 80;
const b = 65;
const findc = 180 - (a + b);

console.log(findc);

//no 5
//Write a code to get difference between dates in days.
//Example : date1 = 2022-01-20, date2 = 2022-01-22 → 2

// const date1 = new Date ("2022-01-2022");
// const date2 = new Date ("2022-01-28");
// const bedawaktu = Math.abs(date2 - date1); //hasil auto ke milidetik
// const bedahari = Math.round(bedawaktu / (1000 * 3600 * 24)); //ubah milidetik menjadi hari

// console.log(` =$`{bedahari});

//no 6
//Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ Example: 366 days → 1 year, 0 month, 1 day

const days = 400;
const year = Math.floor(days / 365);
const month = Math.floor((days % 365) / 30);
const day = Math.floor((days % 365) % 365);
console.log(`${year} year, ${month} month, ${day} day`);

//MODULE 2 cONDITIONAL AND LOOP STATEMENTS

//no 1
// //Write a code to convert celsius to fahrenheit
// ○ Example: 60 Celcius → 140 Fahrenheit

const Celcius = 60;

const Fahrenheit = Celcius * (9 / 5) + 32;
console.log(Fahrenheit);

//no 2
//Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number

// const number = 25;
// const number2 = 2;

// function Checknumber(number){
//     if ( number % 2 === 0) {
//         return `${number} even number`;
//     } else {
//         return `${number} odd number`;
//     }
// }

// console.log(Checknumber(2));
// console.log(Checknumber(25));

// no 3
//Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

const nn = 6;
const nn2 = 7;

function isPrime(nn) {
  if (nn <= 1) {
    return `${nn} not prime number`;
  }
  for (let i = 2; i * i <= nn; i++) {
    if (nn % 2 === 0) {
      return `${nn} not prime number`;
    }
  }
  return `${nn} is prime number`;
}

console.log(isPrime(nn));
console.log(isPrime(nn2));

//no 4
// Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 7

function sumUpToN(nnn) {
  let sum = 0;
  for (let i = 1; i <= nnn; i++) {
    sum += 1;
  }
  return sum;
}

const nnn1 = 5;
const nnn2 = 3;

console.log(`Example: ${nnn1} -> Sum = ${sumUpToN(nnn1)}`);
console.log(`Example: ${nnn2} -> Sum = ${sumUpToN(nnn2)}`);

//no 5
// Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 4 x 3 x 2 x 1 = 720

//recursive

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(4));
console.log(factorial(6));

// Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610

function fibonacci(n) {
  if (n <= 1) {
    return [0, 1];
  } else {
    let s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

console.log(fibonacci(15));

// Module 3
// Intro to Geolocation, Github dan Code task

//no 1
//Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ ...
// ■ 9 x 10

const nt1 = 9;
const lmit = 10;

function multiplicationTable(nt1) {
  for (let i = 1; i <= lmit; i++) {
    console.log(`${nt1} * ${i} = ${nt1 * 1}`);
  }
}

multiplicationTable(9);

//no 2
//Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome

// function isPalindrome(s) {
//   return s === s.split("").reverse().join("");
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

//no3
