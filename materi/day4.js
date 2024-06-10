// // let arr = []; // cara 1
// // let arr2 = new Array(); // cara2

// let arr = ["A","B","C","D"];
// let arr2 = new Array("A","B","C","D");

// console.log(arr);
// console.log(arr2);

//array of object
const student = [
    { name: "budi", email: "budi@mail.com"},
    { name: "siti", email: "siti@mail.com"},
    { name: "joko", email: "joko@mail.com"},
];

// FOR OF LOOP =================================================================================================================================
const fruits = ["apel","avocado","ceri"];

for (const fruit of fruits){
    console.log(fruit);
}

// const text = "Hello World";
// for [const char of text] {
//     console.log(char)
// }
//     console.log(char)


//mini exercise for of
// hitung jumlah semua bilangan dalam array menggunakan or of
//ex input = [1,2,3,4,5,6] -> 21


function sumArray(arr) {
const num = ["1","2","3","4","5","6"]
let sum = 0;
for (let num of arr) {
    sum += num;
}
return sum;
}

let input = [1,2,3,4,5,6];
let total = sumArray(input);
console.log(total);

//function -> ada 2 cara
//ada 2 cara untuk mendefine sebuah function : func declaration & func expression

//FUNCTION DECLARATION
function namaFunction(){
    return number * number;
}

//---> 

function square(numberr) {
    return numberr * numberr;
}

const result = square(2); //argument

const result2 = square(5);

const result3 = square(10)

console.log(result);
console.log(result);
console.log(result3);

//fungsi return > buat mengeluarkan sebuah value
// tau pebedaan argument dengan parameter

// FUNCTION EXPRESSION
const square1 = function (number) {
    return number * number;
};

console.log(square1(10));
console.log(square(20));
console.log(square(30));

// FUNCTION SCOPE
// variable yg di define di dalam function hanya bisa di akses di function tsb

function greeting() {
    const hello = "hello";
    // variable hello bisa di akses di dalam sini
    return hello;
}

//variable hello tidak bisa di akses di dalam sini

// PARAMETER $ ARGUMENT
// argument -> value yang dimasukkan saat pemanggilan function
// parameter -> variable yang mewakili value dari argument di apartment function

function greeting(name) {
    const hello = "hello";
    return hello + "" + name;
}

const result4 = greeting("budi"); //argument
console.log(result4)

//DEFAULT PARAMETER=========================================
//PARAMETER YANG KITA PUNYA BISA DI ISI

function multiply(a, b = 1) {
    console.log(a);
    console.log(b);
    return a * b;
}

console.log(multiply(10,2));

console.log(multiply(5));

//REST PARAMETER ========================================
// mewakili sisa argument ke dalam 1 variable parameter

function myFunction(a,b, ...manyMoreArgs) {
    console.log(a);
    console.log(b);
    console.log(manyMoreArgs);
}

myFunction(1,2,3,4,5,6,7);

// NESTED FUNCTION====================================
// fungsi yang berada di dalam fungsi (liner functional)

function getMessage(firtsname) {

    function sayHello() {
        return "hello" + firtsname + ",";
    }
    function welcomeMessage() {
        return "welcome to purwadhika!";
    }
    return sayHello() + "" + welcomeMessage()
}


const result6 = getMessage("budi");
console.log(result6);

//CLOSURE

function greeting(name) {
    const defaultMessage = "hello";


return function (){
    return defaultMessage + name;
};

}

const result7 = greeting("budi");

console.log("hello");

console.log(result7);


//CURRYING ================================================================
//mentransformasikan function yang memiliki banyak parameter f(a,b,c) menjadi 
//function yang memiliki beberapa parameters sebanyak jumlah parameternya f(a)(b)(c)

//contoh non currying

function tambah(a, b, c){
    return a + b + c ;
}

//contoh currying f(a)(b)(c)
function tambahCurrying(a) {
    return function (b) {
        return function (b) {
            return function (c) {
                return a + b + c;
            }
        }
    }
}

//RECURSIVE===================================
//fungsi yang memanggil dirinya sendiri

function countDown(number) {
    console.log(number);
    let nextNumber = number - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}

countDown(10);

//ARROW FUNCTION ======================================>>
//shortcut untuk menuliskan function expression

//contoh function expression
const square2 = function (number) {
    return number * number;
};

//contoh jika diubah ke arrow function
const square3 = (number) => {
    return number*number;
}

//kalo misalnya 1 line bisa di buat macam ni
const square34= (number) => number * number


//AARRAY BUILD IN METHOD ===============================
// JOIN -> MENGGABUNGKAN VALUE YANG ADA DALAM ARRAY KE DALAM BENTUK STRING
let words = ["hello", "world"];
console.log(words.join(""));

//POP -> menghilangkan isi value paling akhir dalam array
const words2 = ["hello","world","hello"];
words2.pop();
console.log(words2);

//PUSH -> menambah value ke dalam array di paling akhir
const words3 = ["hello","world"];
words3.push("purwadhika");
console.log(words3);



//SHIFT -> menghilangkan value paling depan di dalam array

const words4 = ["test", "hello", "world"];
words4.shift();
console.log(words4);


//UNSHIFT ---> menambahkan value ke urutan paling depan array
const words5 = ["test","hello","world"];
words5.unshift("jogja");
console.log(words5);

//CONCAT ----> menggabungkan 2 array menjadi 1 array
const arr1 = ["hello"];
const arr2 = ["world"];
console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

//SPLICE -> untuk menghapus, mengganti, atau menambah value pada sebuah array
//rumusnya --> splice(startIndex, brpYgMauDiDelete, item, item, .....)

const months = ["jan","march","april","june"];

months.splice(1, 0, "feb"); //menambah pada index 1
console.log(months);

months.splice(4,1); //menghapus pada index ke 4
console.log(months);



months.splice(3,1, "may");
console.log(months);

//SLICE=> return new array dg value yang sudah kita tentukan
//Index start dan index end nya dari sebuah array tsb
// rumus slice(startIndex, endIndex)

const fruits4 = ["banana","orange","lemon","apple","mango"];
console.log(fruits4.slice(1, 4)); //hitung dari awal
console.log(fruits4.slice(-4,-1)); //hitung dari backside

//INDEXOF -> mencari index dari value yang kita cari
//kalo misalnya ngga ditemukan bakalan mereturn -1

const fruits2 = ["banana", "orange", "lemon","apple","mango"];
console.log(fruits2.indexOf("lemon"));

//SORT -> mengurutkan isi array berupa string atau number
//versi string
const fruits3 = ["banana","orange","lemon","apple","mango"];
fruits3.sort();
console.log(fruits3);

//versi number
const points = [5, 3, 6, 2, 8, 10];
points.sort();
console.log(points);

//versi number menggunakan compare function
const point2 = [34, 5, 200, 16, 8, 10];
point2.sort((a, b) => a- b); //asc
//point2.sort(a, b) => b - a); //desc
console.log(point2);

//REVERSE -> membalikkan urutan element dalam array
const fruits5 = ["banana", "orange", "lemon", "apple", "mango"];
fruits4.reverse();
console.log(fruits5);

// //FOREACH -> melakukan looping pda array tapi tidak mereturn apapun

// const fruit6 = ["banana", "orange", "lemon", "apple","mango"];

// const result = fruits6.array.forEach((value, index) => {
    
// });

// //MAP => melakukan looping sama kaya forEach tapi mereturn array baru

// const fruits7 = ["banana","orange", "lemon","apple","mango"];

// const result = fruits7.map[{fruit, idx}] => {

// }

// //FILTER -> melakukan looping juga sama kaya map dan menghasilkan array baru
// //berdasarkan kondisi pada return function yang dimasukkan ke filter parantheses

// const age = [40, 10, 30, 41, 55];
// const resultt4 = ages.filter((age.index) => {
//     return age > 20;
// });

// console.log(result2);

//FIND -> mencari value yang ditemukan pertama kali di dalam array
const ages2 = [3, 10, 20, 19];

const resultt4 = ages2.find((age) => age > 18 );

console.log(resultt4);

//FINDIDEX -> MIRIP KAYA FIND TAPI YANG DIHASILKAN ADALAH INDEXNYA
const ages3 = [3, 10, 20, 19];

const resulttt3 = ages3.findIndex((age) => age > 18);

console.log(resulttt3);


//REDUCE -> BIASA DIGUNAKAN UNTUK MELAKUKAN OPERASI ARITMATIKA PADA TIAP ISI ARRAY
const numbers = [175, 50, 25];
const resulttt5 = numbers.reduce((a, b) => a + b);

console.log(result);

//Includes -> mengecek value pada array ada apa tidak, hasil return nya adalah boolean

const fruitc7 = ["banana", "orange", "apple"]

console.log(fruitc7);