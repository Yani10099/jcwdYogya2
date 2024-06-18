/* 
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "08200200200"
    output = "(6282)-002-00200"
*/

//jawab :

// function phoneNumber(input){
//     if (typeof input !== "string") {
//         return "Invalid phone number.";
//     }
//     if (input.length !== 12) {
//         return "Invalid phone number.";
//     }
//     for (let i = 0; i < input.length; i++){
//         const Charcode = input.charCodeAt(i);
//         if (Charcode < 48 || Charcode > 57) {
//             return "Invalid phone number.";
//         }
//         const formattedPhoneNumber = `(${input.slice(0, 4)})-${input.slice(4, 8)}-${input.slice(8)}`;
//         return formattedPhoneNumber;
//     }
//     return true;

// }

// const input = "08200200200"
// const output = phoneNumber(input);
// console.log(output);

//Reference : https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript

//correction

function phoneNumber(input) {
  if (typeof input !== "string") {
    return "Invalid phone number.";
  }
  if (input.length !== 12) {
    return "Invalid phone number.";
  }
  for (let i = 0; i < input.length; i++) {
    const Charcode = input.charCodeAt(i);
    if (Charcode < 48 || Charcode > 57) {
      return "Invalid phone number.";
    }
  }

  input = "62" + input.slice(1);
  let template = "(xxxx)-xxxx-xxxxx";

  input.split("").forEach((item) => {
    template = template.replace("x", item);
  });

  return template;
}

console.log(phoneNumber("082000200200"));

//no 2
// class BankQueue {
//     constructor(){
//         this.queue = [];
//     }
//     isEmpty(){
//         return this.queue.length === 0;
//     }

//     enqueue(input){
//         this.queue.push(input);
//         return "enqueue succes";
//     }

// }

//no 3

class Train {
  constructor() {
    this.container = ["masinis"];
    this.maxSize = 10;
  }

  isFull() {
    return this.container.length === this.maxSize;
  }

  isEmpty() {
    return this.container.length === 1;
  }

  showPassenger() {
    return {
      passenger: this.container,
      remainingSeat: this.maxSize - this.container.length,
    };
  }
  passengerIn(name) {
    if (this.isFull()) {
      return "train full";
    }

    if (this.container.includes(name)) {
      return "passenger already exist";
    }

    this.container.push(name);
    return "add passenger succes";
  }

  passengerOut(name) {
    if (name === "masinis") {
      return "cannot remove masinis";
    }

    if (this.isEmpty()) {
      return "train is empty";
    }
    const index = this.container.indexOf(name);

    if (index === -1) {
      return "passenger not found";
    }
    this.container.splice(index, 1);
    return "remove passenger succes";
  }
}

const train = new Train();

//memasukkan penumpang baru
console.log(train.passengerIn("anjani"));
console.log(train.passengerIn("anica"));
