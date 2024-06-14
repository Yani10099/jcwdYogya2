//JAVA SCRIPT mampu menjalankan OOP
//object bisa menyimpan banyak, seperti object dalam object

// cara membuat object
// cara 1

const people = {};

//cara 2

const people2 = new Object();

//Properties & methods
const people3 = {
  name: "Heza",

  greet() {
    console.log("Hello"); //function di dalm object di sebut method
  },
};

console.log(people3.name);

//apapun function di dalam class di sebut object/ method
// ingin menjalankan greet, spt ni :

console.log(people3.greet());

// Add & delete property
//menambah dan mendelete sebuah property di dalam object

const people4 = {
  name: "hezack",
  age: 29,
};

//add new property
people4.hobby = "coding";

console.log(people4);

//Delete property
delete people4.age;
console.log(people4);

//Accessing the Value
people4.name;
people4["name"];

console.log(people4.name);
console.log(people4["name"]);
//must w square bracket

// //Optional Chaining

// const people5 = {};

// console.log(people5.address);
// console.log(people5.address.street);
// //waktu dia error bagi optional chanining be like (?)

// console.log(people5.address?.street); //bagi optional chaining

//Accesing Key
const people6 = {
  name: "Bianca",
  age: 2,
};

console.log(Object.keys(people6));
// untuk get acces semua key
console.log(Object.values(people6));
// untuk get access semua value

//FOR IN
const people7 = {
  name: "Bianca2",
  age: "2",
};

for (const key in people7) {
  console.log(key);
  console.log(people7[key]);
}

//kenapa tidak guna .key tapi dengan square braket kenapa??
//karena if .key berarti kita nyari di function dimana itu .key
//

// Destructuring assignment > mengeluarkan property dalam object menjadi sebuah variable
// destruct object
const people8 = {
  name: "sweetpopcorn",
  age: 2,
};

//-> ngebuat ke variable
const { name, age } = people8;

console.log(name);
console.log(age);

// destruct array
const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = [10, 20];
console.log(a);
console.log(b);

// SPREAD OPERATOR > BUAT COPY ISI OBJECT / menggabungkan object
const objectOne = { name: "heza" };
const objecttwo = { email: "hezahemail@gmail.com" };
const result = { ...objectOne, ...objecttwo };

const hasil = { ...result, password: "paramore009;" };

console.log(result);

console.log(hasil);

//THIS KEYWORD > AKSES PROPERTY LAIN DI DALAM SEBUAH OBJECT
const people9 = {
  firtsName: "Sean",
  lastName: "Boy",
  greet() {
    console.log(`Hello ${this.firtsName}`);
  },
};
people9.greet();

//CLASS > template untuk membuat sebuah object
//class declaration

class people10 {
  greeting() {
    console.log("hello world");
  }
}

//Create an object from the class

const student = new people10(); //poeple10 sebab sudah ada
student.greeting();

const student2 = new people10();
student2.greeting();

// constructor > menginisasi object yang dibuat di dalam class
class people11 {
  constructor(name) {
    this.name = name;
    this.greeting();
  }
  greeting() {
    console.log(`Hello ${this.name}`);
  }
}

const student3 = new people11("heza");

console.log(student3.name);

//ACCES MODIFER > public an private

class people12 {
  #email;

  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }

  showEmail() {
    // this.#email bisa di akses krn showEmail 1 class dengan #email
    console.log(this.#email);
  }
}

const student4 = new people12("heza", "heza@gmail.com");
console.log(student4.name);
console.log(student4.email);
student4.showEmail();

//GETTER AND SETTER
//get -> baca data
//set -> set value di dalam object

const people13 = {
  firtsName: "Bianca",
  lastName: "Fene",

  get fullName() {
    return `${this.firtsName} ${this.lastName}`;
  },

  set fullName(value) {
    const split = value.split(" ");
    this.firtsName = split[0];
    this.lastName = split[1];
  },
  fullName2(value) {
    const split = value.split(" ");
    this.firtsName = split[0];
    this.lastName = split[1];
    return `${this.firtsName} ${this.lastName}`;
  },
};

console.log(people13);

console.log(people13.fullName);

people13.fullName = "Aria Cantiqu";

console.log(people13.fullName);

console.log(people13.fullName2("Bianca Pania"));
// dia menggunakan function biasa

// encapsulation
// konsep di OOP untuk ngebundle data dalam 1 detik

//INHERITANCE -> pewarisan dari prents to kid the class. jadi property and method
//dari class prents bisa di miliki  oleh wa kids the class

class Product {
  //if tidak dg concept inheritance
  constructor(name, price) {
    this.productName = name;
    this.price = price;
  }
  readprice() {
    console.log(this.price);
  }
}

class CardSSD {
  //if dg concept inheritance
  constructor(name, price, author) {
    this.productName = name;
    this.price = price;
    this.author = author;
  }
}

const barang = new CardSSD("120GB", 800000, "Bianca");

console.log(barang.price);

//INSTANCE OF -> MENGECEK NI APA SEBUAH OBJECT memiliki HUBUNGAN ke class tertentu
class ComputerComponent {}
class LCDScreen extends ComputerComponent {}
class Keyboard {}

const LCDscreen = new LCDScreen();
console.log(LCDscreen instanceof ComputerComponent);
console.log(LCDscreen instanceof LCDScreen);
console.log(LCDScreen instanceof Keyboard);
