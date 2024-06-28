//type of >> untuk mengetahui tipe data dari sebuah variable

let x = 8;
console.log(typeof x); //"number" >> sorot kursor

//Object >>  struktur data berisi pasangan kunci (key) dg nilai

let people = {
  name: "Cantiq",
  age: 10,
};

//for loop >> untuk menjalankan blok kode yang berulang dengan iterasi tertentu

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//variable >> untuk penyimpanan nilai, nilai dpt di ubah

let age = 10;

//Condition (kondisi) >> dibuat untuk membuat keputusan dalam kode berdasarkn kondisi tertentu

if (age > 35) {
  console.log("Adult");
  -0;
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
console.log(queue);
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
//Javascript behave yang mengangkat deklarasi variabel dan fungsi ke bagian
// flexible boleh ke atas boleh ke bawah, itu hnya variable var dg function declaration saja
// function ekspression tidak bisa

console.log(myDate); //underfined
const myDate = 10;

console.log(null); //hasilnya Object

console.log(typeof 123); //number

console.log(typeof "Yanca"); //tipe data is string

//Perbedaan var > variable diguanakan global
//Perbedaan let > variable yang bisa di ubah
//Perbedaan const > varibale yang tidak bisa di ubah

//Splice adalah fungsi dalam array, untuk mengubah
// splice mengubah konten dari sebuah array dengan menghapus, menambahkan,
//elemen di dalamnya. atau mengurangi, menambah atau merubah value dalam array
//cara menggunakan dari indeksnya

//apa itu shift??
//suatu function build in method dari element depan dalam array

//

let number = 20 * 10;
number = 10;
console.log(number); //output jdi 10

// hasil reassign > hasil nya di ubah

//Perbedaan For Each dg For Map

//for Each digunaay bkan untuk mengeksekusi sebuah fungsi callback untuk setiap elemen dalam array.
//karakteristik For Each : tidak mengembalikan nilai apapun (undefined), Digunakan untuk menjalankan operasi setiap elemen array tanpa mengubah array asli
//tidak menghasilkan array ni baru

//For Map
//dibuat untuk membuat array ni bairu dengan hasil dari pemanggsilan fungsi callback pada setiap elemen dg array yg ada.
//mengembalikan array ni baru, transformasi array, tidak mengubah array asli `map`

//tujuan for Each diguankan ketika anda ingin menjalankan operasi untuk setiap elemen array tanpa memperhatikan nilai kembali
//map untuk waktu menjalankan operasi untuk setiap elemen array tanpa memperhatikan nilai kembali.

//convert string ke number (44XX) > hasil NaN karena huruf dg string tidak bisa
//if number tidak da huruf bisa

// tidak bisa membuat variable menggunakan strip. tetapi bisa menggunakan (_) atau huruf capital
// constnama_Qamu  atau constnamaQamu

// Huruf depan capital bisa untuk membuat variable tetapi bukan best practice
// huruf depan capital untuk buat class

//stack untuk concept LIFO
//queue untuk conccept FIFO

//"20" * 2 > 40 > string if dg * bisa jdi output

//apa itu dia function scope
//variable nya lokal > variable tersebut hanya berfungsi di tempat ia di deklarasikan
//Nested Scope > fungsi yang satu dapat  dibuat difungsi yang lain
//variable yang di deklarasikan di dalam fungsi dalam akan tetap terbatas pada fungsi tersebut, meskipun ada fungsi luar yang menutupinya
//inner var/ const hnya dpt di akses di dlm fungsi scope
