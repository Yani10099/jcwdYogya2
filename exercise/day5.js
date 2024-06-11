// Write a function to get the lowest, highest and average value in the array (with and without sort function).
//a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

const myArray = [12, 5, 23, 18, 4, 45, 32];

let min = myArray [0];
let max = myArray [0];
let total = 0;

for (let i = 0; i < myArray.length; i++){
    if (myArray[i]>max){
        max = myArray[i];
    }
    else if (myArray[i] < min) {
        min = myArray[i];
    }
    total += myArray[i];
}

console.log(max);
console.log(min);
console.log(total/myArray.length);


//tidak dapat mengubah nilai setelah inisiasi jadi menggunakan let
// rumus web : https://teamtreehouse.com/community/finding-average-minimum-and-maximum-value-in-an-array


//no 2
//Write a function that takes an array of words and returns a string by concatenating the words in the array,
//separated by commas and - the last word - by an 'and'.
//a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

const array2 = ["apple", "banana", "cherry", "date"]

const output = array2.reduce(function(acc, cur, i){
    let str = acc ;
    str += cur;

    if (i < array2.length - 2){
        str += ' , '; 
    } else if (i < array2.length -1){
        str +=' , and ';
    }
    
    return str;
})

console.log(output);

//reference web : https://stackoverflow.com/questions/62434975/join-items-in-an-array-with-two-different-delimiters

//no 3
// //Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]

string_to_array = function (str) {
    return str.trim().split("");
};

console.log(string_to_array("Hello World"));

// cara 2

const words = "Hello World";

const resultt = words.split(" ");
console.log(resultt);

//reference : exercise 2 or 3

//no 4
//Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
//of the same length.
//a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

const array3 = [1,2,3];
const array4 = [3,2,1];

let sum = [];

for (let i = 0; i <array3.length; i++){
    sum.push(array3[i] + array4[i]);
}

console.log(sum);

//for loop
//reference : https://stackoverflow.com/questions/24094466/sum-two-arrays-in-single-iteration

//no 5
// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

//no 6
// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

const myArray6 = [1, 2, 3, 4, 5, 6];
let it = myArray.length

for(let i = 0; i < it; i++){
    for(let j = 0; j <myArray6.length; j++){
        console.log('checking:', myArray6[j])
        if(myArray[j] % 2 === 1) {
            myArray.splice(j,1)
            break
        }
    }
}

console.log(myArray6);

//reference : https://stackoverflow.com/questions/43131836/remove-odd-numbers-in-array

//no 7
// //Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
//     array can only contain 5 elements).
//     a. Example :
//     maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
//     The function will return [5, 10, 24, 3, 6]

//no 8
//Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

const arr1 = ['1','2','3'];
const arr2 = ['4','5','6'];

function createDeck(){
    let customArray = [];

    if (arr1.length === arr2.length){
        customArray = arr1.map((arr1, index) => {
            return arr1 + arr2[index]
        })
    }
    return customArray;
}

console.log(createDeck());

//cara 2

console.log(arr1.concat(arr2));

//no 9
// //Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]


//indexOf()method

const arr4 = [1, 2, 2, 2, 3, 3, 4, 5, 5]
let duplicates = [];

arr4.forEach(function (value, index, array){
    if (arr4.indexOf(value, index +1) !== -1 && duplicates.indexOf(value) === -1) {
        duplicates.push(value);
    }
});

console.log("Duplicates values:", duplicates);


//referense : https://www.geeksforgeeks.org/javascript-program-to-find-duplicate-elements-in-an-array/

//no 10
// Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

const arrr1 = [1, 2, 3, 4, 5];
const arrr2 = [3, 4, 5, 6, 7];

function diff(arrr1, arrr2) {
    let newArray = [];

    for ( let i=0;i<arrr1.length;i++){
        for (let j=0;j<arrr2.length;j++){
            if (arrr1[i]===arrr2[j]){

                arrr1.splice(i, 1); //kita guna splice for eliminate the same number
                arrr2.splice(j, 1);
                i--; // agar elemen tidak terlewat
                break;  //untuk menghentikan eksekusi loop waktu dia elemen yang cocok sudah ditemukan  
            }
        }
    }
    newArrrrr = arrr1.concat(arrr2);
    return newArrrrr;
}

console.log(diff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

//reference web : https://stackoverflow.com/questions/30586079/taking-the-difference-of-two-arrays-and-making-a-new-array

// //no 11
// //Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];

function getPrimitiveTypes(arr){ //getPrimitiveTyppes menerima parameter array
    return arr.filter(item => { //filter untuk menyaring elemen array
        return typeof item !== 'object' && typeof item !== 'function' && typeof item !== 'underfined';
    });  //type of untuk cek tipe data elemen tidak termasuk dalam tipe data objeck
    }
let arr = [1, [], undefined, {}, "string", {}, []];
console.log(getPrimitiveTypes(arr)); //output argumen

//reference web : exercise before

//no 12
// //Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2  #Themallest

function secondSmallest(numbers) {
    numbers.sort((a,b) => { return a - b; });
    return numbers[1];
}

let numbers = [5, 3, 1, 7, 2, 6];
console.log(secondSmallest(numbers));

//no13
// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

function sum0fNumbers(mixedArray) {
    let sum = 0;
    for ( let i = 0; i < mixedArray.length; i++) {
        if (!isNaN(Number(mixedArray[i]))){
            sum += Number(mixedArray[i]);
        }
        
    }
    return sum
}


const mixedArray = ["3", 1, "string", null, false, undefined, 2];
console.log(sum0fNumbers(mixedArray));

//reference : 

//no 14
// Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

// function sum0fDuplicates(arrr77) {
//     let seen = {};
//     let duplicates = [];
//     let total = 0;


//     arr.forEach(num => {
//         if (seen[num]){
//             if (!duplicates.includes(num)){
//                 duplicates.push(num);
//                 total += num; //menambah nilai duplicate ke dalam total
//             }
//         } else {
//             seen[num] = true;
//         }
//     });

//     return total;

// }

// let arrr77 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// console.log(sumOfDuplicates(arrr77));

//no15
//membuat game batu gunting kertas

function rockPaperScissors(playerThrow){
    const throws = ['rock', 'paper', 'scissors'];
    const computerThrow = throws[Math.floor(Math.random()* throws.length)];

    console.log("Computer throws:" + computerThrow);

    if (playerThrow === computerThrow){
        return 'Draw';
    } else if (
        (playerThrow === 'rock' && computerThrow === 'scissors') ||
        //gamer memilih batu, computer memilih gunting
        (playerThrow === 'paper' && computerThrow === 'rock') ||
        //gamer memilih paper, dan computer memilih batu
        (playerThrow === 'scissors' && computerThrow === 'paper')
        //games memilih gunting, comp memilih papaer
    ) {
        return 'Lose';
    } else {
        return 'Win'
    }
} 

console.log(rockPaperScissors('rock'));

