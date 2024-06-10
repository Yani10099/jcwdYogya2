
//JAVASCRIPT -> buat web pages, machine learnin, iot, etc.

//console.log untuk munculin ke terminal
console.log("Hello wolrd");

//shift + alt + F  >> auto format

/*
ini 
juga
adalah
comment
*/

//VARIABLE -> STORAGE / PENAMPUNGAN DATA

//VARIABLE DECLARATION -> var, let, const

//let bisa di replace, but const cant replace

//var is global variable we didnt need again
//example

var caree = "cantik";

console.log(caree);

//sebab variable var membuat double variable, if kita sudah membuat coding kita memsti remember semua coding kita. kelemahan var, jadi kita tidak menggunakan var lagi

//variable let 

//variable let bisa mereplace isi dari variable tersebut

let caree1 = "cantik1";

console.log(caree1);

let caree2 = "cantik2";

console.log(caree1);

let caree3 = "cantik3";

console.log(caree2);

//variable const tudak akan bisa di replace

const caree4 = "cantik4";

console.log(caree4);

//console4 = "preety" -> tidak bisa diganti

isPaid = false

//VARIABLE NAMING
//must contain only letters, digits, or symbol "$" and "_"
// the firts character must not digit
// Case sensitive

//DATA TYPES
//primitive data types; string, number, boolean. null, undefined
//non primitive data types; object dan array

//string --> "",''
//number --> 1 2 3 4 1000 but if put `1000` datatype tetap string

//boolean -> true dan false
//null -> tanda value itu masih kosong dan belum di isi
//underfined ->variable tidak ada isinya atau kosong

//immutable

let count1 = 4;
let count2 = count1;

count2=10

console.log(count1);
console.log(count2);

//mutable -> object di tandai kurung kurawal

let caree5 = {name : "cantik8"};
let caree9 = caree5;
caree9.hobby = "Photo";

console.log(caree5);
console.log(caree9);

// String build in method

const nama = "CaNtIk18";
const nama2 = "NewCaNtIk109"

console.log(nama.toLocaleLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("I","Y"));
console.log(nama.replaceAll("a","I"));
console.log(nama.split(""));
console.log(nama.split(""));
console.log(nama.concat(nama2));
console.log(nama.slice(0, 2));
console.log(nama.slice(0, 5));



//buat search
const nama22 = "CaNtIk18".toLowerCase();

console.log(nama22.replace("a","E"));


// TEMPLATE LITERALS -> TEMPLATE STRING

const nama3 = "SonAllan"; // bisa juga dengan const nama3 = `Allan`
const message = "Welcome";

console.log(message + "" + nama3);
console.log(`${message} ${nama3}`);
console.log(`Welcome ${nama3}`);

//if mau masuk ke literal mesti dg $$

//Number build in method
const angka = 10000;
const angka2 = "20";

console.log(angka.toString());
console.log(Number(angka2));
console.log(parseInt(angka2));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//Type Convertion
//String conversion
console.log(String(123));

//numeric conversion

const num = "3" * "3";

const num2 = "1" + 1

console.log(num);

console.log(num2);

const num3 = 1 + "1" + 1 //baca dari kiri ke kanan

//simpan nombor telepon -> string
//string + number = string
// number + string + number - > string , jadi hasil jdi "111"

const num4 = 1 + 1 + "1" // hasil jdi 21

console.log(Boolean(-120));
console.log(Boolean(1));
console.log(Boolean(0));

console.log(Boolean("false"));


// Bollean Conversation
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log("false");

//DATE
const tudoy = new Date();  //jam nya +UTC ya bukan jam jadwal tayangan doraemon

console.log(tudoy);

//get method
console.log(tudoy.getFullYear());
console.log(tudoy.getMonth() + 1);
console.log(tudoy.getDate());

// set method
tudoy.setDate(34);
//tudoy.setFullYear(2027);
console.log(tudoy);


// Basic Operator -> +, -, *, /, % (sisa bagi), **

console.log(1 + 1);
console.log(2 - 1);
console.log(2 * 4);
console.log(4 / 2);
console.log(7 % 2);
console.log(3 ** 2);

// 7 : 2 ada 3 sisa 1 jdi % nya 1

//MODIFY IN PLACE
//n = n + 2

let n = 4 

//n = n + 2;

// n = n + 2 -> cara panjang
// n +=2 ->> n = n + 2 -> cara pendek

console.log(n);


//INCREMENT & DECREMENT
let counter = 2;

counter++; //increment
counter--; //decrement

console.log(counter);

// POSTFIX & PREFIX

let counter2 = 2;

console.log(++counter2); //prefix(++/-- before variable)
console.log(counter2++); //postfix(++ after we call variable)

console.log(counter2);

//learn Comparis Operator

5 == 5 //true
5 == 1 //false

console.log(5 == 5)
console.log(5 ==1);
console.log( 5 !== 5);
