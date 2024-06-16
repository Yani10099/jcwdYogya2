// class Stack {
//     constructor() {
//         this.container = [];
//         this.maxSize =10;
//     }
//     push(element) {
//         this.container.push(element){
//             return "container penuh";
//         }

//         this.container.push(element);
//     }

//     pop() {
//        if (this.container.pop());
//     }
// }

// QUEUE

class Queue {
  #container;

  constructor() {
    this.#container = [];
  }

  enqueue(element) {
    return this.#container.push(element);
  }

  dequeue() {
    return this.#container.shift();
  }

  showContainer() {
    return this.showContainer;
  }
}

const queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));

//limit di API
//kita mengatur berapa batasan di reload

//Ascii code
//youtube : computer science function Hash

// Boy set tidak bole ada duplicate values

const fruits = ["banana", "apple", "manggo", "apple"];

const result = new Set(fruits); //Boy set

//membuat Boy Set
const mySet = new Set();

//menambah nilai ke set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); //nilai ini tidak akan di tambahkn karena udah ada

//mengecek apakah value yang dimasukkan ada apa tidak di dalam set
console.log(mySet.has(1));

//menhapus nilai dari set
mySet.delete(5);

// Looping isi Set
for (const value of mySet) {
  console.log(value);
}

//Menghitung ukuran Set
console.log(mySet.size);
