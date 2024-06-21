//type of >> untuk mengetahui tipe data dari sebuah variable

let x = 8;
console.log(typeof x); //"number" >> sorot kursor

//Object >>  struktur data berisi pasangan kunci (key) dg nilai

let people = {
  name: "Cantiq",
  age: 10,
};

//for loop >> untuk menjalankan blok kode yang berulang dengan literasi tertentu

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//variable >> untuk penyimpanan nilai, nilai dpt di ubah

let age = 10;

//Condition (kondisi) >> dibuat untuk membuat keputusan dalam kode berdasarkn kondisi tertentu

if (age > 35) {
  console.log("Adult");
} else {
  console.log("Kids");
}

//Built in Method

//fungsi pada javascript untuk bekerja dengan tiper data tertentu

let text = "Hello World";

console.log(text.toUpperCase());

//Plus sama dengan
//fungsi untuk menambahkan lalu menyimpan

let y = 10;
y += 5;
console.log(y);

//Build in method for  looping
// metode seperti forEach untuk iterasi pada array

let numbers = [1, 2, 3, 4];
numbers.forEach(function (number) {
  console.log(number);
});

//Convert Number dan String
//convert variable/ data ke bentuk lain

let num = 123;
let str = num.toString();
let numAgain = Number(str);

//Cara Declare Variable
//declare dg var, cont, let

let name = "Bianca";
const pi = 22 / 7;
var numberic = 20;

//LIFO / FIFO
// Last In Firts Out, Firts In Firts Out (Queue)

let stack = [];
stack.push(1);
stack.push(2);
stack.pop(); //2 (LIFO)
console.log(stack.pop());

let queue = [];
queue.push(1);
queue.push(2);
queue.shift(); // 1 (FIFO)
console.log(queue.shift());

//ARRAY
//struktur data yang di gunakan untuk menyimpan beberapa nilai dalam suatu variable

let fruits = ["Apple", " Avocado", "Palm"];
console.log(fruits);

//Function (Fungsi)
//blok kode yang di rancang untuk melakukan tugas tertentu

// const namee = Carlaa
// funtion greet(namee) {
//     return "Hello, ${name}";
// }

//Built in Method Array
//methode bawaan untuk bekerja dg array spt `push`, `pop`, `method`, `shift`, `unshift`.

let colors = ["white", "green", "grey"];
colors.push("yellow");
console.log(colors);

//Condition Ternary
// cara singkat untuk menulis pernyataan `if - else`

const agee = 10;
let status = agee >= 18 ? "Adult" : "CaKids";

console.log(status);

//Comparation Operator (Operator Perbandingan);
// untuk membandingkan 2 nilai

const xx = 8;
const yy = 100;
console.log(x >= y);

//Biog O Nation
//Notasi untuk menggambarkan kinerja atau kompleksitas algoritma

/*
contoh :

O(1): Waktu Konstan
O(n): Waktu Linear

*/

// Hoisting
//Javascript behave yang mengangkat deklarasi variabel dan fungsi ke bagian atas dari lingkup mereka

console.log(myDate); //underfined
const myDate = 10;
