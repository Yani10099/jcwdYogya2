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
// Write a code to convert centimeter to kilometer.
// ○ Example : 100000 → “1 km”

function cmToKm(cm) {
  const km = cm / 100000;
  return `${km} km`;
}

console.log(cmToKm(100000));

//no 4
// Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”

function formatAsIDR(number) {
  return `Rp. ${number.toLocaleString("id-ID", { minimumFractionDigits: 2 })}`;
}

console.log(formatAsIDR(1000));

//no 5
//Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”

function removeFirstOccurence(str, searchStr) {
  const index = str.indexOf(searchStr);
  if (index !== -1) {
    return str.substring(0, index) + str.substring(index + searchStr.length);
  }
  return str;
}

const originalString = "Hello world";
const searchString = "ell";
const result = removeFirstOccurence(originalString, searchString);
console.log(result);

//no 6
//Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”

function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const originalStringg = "hello world";
const rresult = capitalizeFirstLetter(originalStringg);
console.log(rresult);

//no 7
//● Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”

function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const originalStringgg = "hello world";
const resulttt = capitalizeFirstLetter(originalStringgg);
console.log(resulttt);

//no 8
//Write a code to reverse a string.
// ○ Example : “hello” → “olleh”

function reverseString(str) {
  return str.split("").reverse().join("");
}

const originalStringgggg = "hello";
const reversedString = reverseString(originalStringgggg);
console.log(reversedString);

//no 9
//Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

function swapCase(str) {
  return str
    .split("")
    .map((c) => (c.toUpperCase() === c ? c.toLowerCase() : c.toUpperCase()))
    .join("");
}

const originalString2 = "The QuiCk BrOwn Fox";
const swappedString = swapCase(originalString2);
console.log(swappedString);

//no 10
//Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42

function findLargest(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

const num1 = 42;
const num2 = 27;
const largest = findLargest(num1, num2);
console.log(largest);

//no 11
//Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

function sortNumbers(num1, num2, num3) {
  if (num1 < num2 && num2 < num3) {
    return `${num1}, ${num2}, ${num3}`;
  } else if (num1 < num3 && num3 < num2) {
    return `${num1}, ${num3}, ${num2}`;
  } else if (num2 < num1 && num1 < num3) {
    return `${num2}, ${num1}, ${num3}`;
  } else if (num3 < num1 && num1 < num2) {
    return `${num3}, ${num1}, ${num2}`;
  } else {
    return `${num3}, ${num2}, ${num1}`;
  }
}

const numm1 = 42;
const numm2 = 27;
const numm3 = 18;
const sortedNumbers = sortNumbers(numm1, numm2, numm3);
console.log(sortedNumbers);

//no12
// //Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// // ○ Example : “hello” → 1

function dataType(input) {
  if (typeof input === "string") {
    return 1;
  } else if (typeof input === "number") {
    return 2;
  } else {
    return 3;
  }
}

console.log(dataType("hello"));
console.log(dataType(42));
console.log(dataType(Boolean));
console.log(dataType({}));
console.log(dataType(true));
console.log(dataType(null));

//3 is bcoz Typedata is bollean, null, undefined, object

// Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

function replaceAWithStar(inputString) {
  return inputString.replace(/[aA]/g, "*");
}

const input = "An apple a day keeps the doctor away";
const output = replaceAWithStar(input);
console.log(output);

//Array and Function
//● Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// ● Parameters : height → triangle height
// ● Example input: 5

function createSegitiga(height) {
  let segitiga = "";
  for (let i = 1; i < height; i++) {
    for (let j = 1; j < i; j++) {
      segitiga += j + "";
    }
    segitiga += "\n";
  }
  return segitiga;
}

const height = 5;
const segitiga = createSegitiga(height);
console.log(segitiga);
