// /*

// Create a code that could handle a queue on food ordering process, with this specification:
// ● Create a class to handle queuing process in a file.
// ● Create file to handle and execute queue class.
// ● Each queue process takes a random interval from 1-10 seconds.
// ● Clue : Use while & promise

// */

// //quue.js

// class Queue {
//   constructor() {
//     this.task = [];
//   }

//   enqueue(task) {
//     return new Promise((resolve) => {
//       this.task.push(task);
//       resolve();
//     });
//   }

//   dequeue() {
//     return new Promise((resolve) => {
//       if (this.tasks.length === 0) {
//         resolve(null);
//       } else {
//         const task = this.task.shift();
//         resolve(task);
//       }
//     });
//   }
//   async process() {
//     while (this.tasks.length > 0) {
//       await this.dequeue();
//       await new Promise((resolve) =>
//         setTimeout(resolve, Math.random() * 10000 + 1000)
//       );
//     }
//   }
// }

// module.exports = Queue;

// //index.js
// /*forloop, variable, condition, object, typeof, built in method, convert number, cara kita declare variable, fifo lifo, data structur, array. built method array
// comparis operator. big conotation */
