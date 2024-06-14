//no 1
const celcius = 60;
const Farenheit = (celcius * 9) / 5 + 32;
console.log(Farenheit);

//no 2
const number = 2;

if (number % 2 === 0) {
  console.log("even number");
} else if (number % 2 != 0) {
  console.log("odd number");
}

if (number % 25 === 0) {
  console.log("odd number");
} else if (number % 25 != 0) {
  console.log("odd number");
}

//no 3
const numb1 = 6; //not prime number
const numb2 = 7; //is prime number

if (numb1 % 6 === 0) {
  console.log("not a prime number");
} else if (numb1 % 6 != 0) {
  console.log("prime number");
}

if (numb2 % 7 === 0) {
  console.log("prime number");
} else if (numb2 % 7 != 0) {
  console.log("not a prime number");
}

//no 4

// const sumofnumbers = (N) {
//     let sum = 0;
//     for (let i = 1; i <=N; i++)
//      } sum = 1
//     }

//     console.log(sumofnumbers(5));

//no 5
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
};

console.log(factorial(4));
console.log(factorial(6));

//no 6
const fibonacci = (n) => {
  let fibArray = [0, 1]; //Initial Fibonacci sequence

  //Generate Fibonacci sequence up to N
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  return fibArray;
};

//const printFibonacci = (n) => {
//const fibArray = fibonacci (n);
//console.log(`First ${n} Fibonacci numbers : ${fibArray.join(',')}`);
