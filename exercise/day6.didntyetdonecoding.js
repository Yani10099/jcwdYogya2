// // //no 1
// // //Create a function to calculate array of student data

// // const students = [
// //     { name: "Zahed", score: 100, age 17},
// //     { name: "LaBianca", score: 99, age 18},
// //     { name: "Nasredin", score: 94, age 21},
// //     { name: "boywilliam", score: 88, age 24},


//  class Studentcalculator {
//     constructor(student) {
//         this.student = students;
//         console.log(students);
//     }

//     calculate(){
//         let minScore, maxScore, avgScore, minsAge, maxAge, avgAge;
//         const sortScore = this.students.sort(b, a) =>b.score - a.score);
//         const sumScore = this.student.reduce((a,b) => a + b.score, 0);
//         minScore = sortScore[0].score;
//         maxScore = sortScore[sortScore.length -1].score;
//         avgScore = sortScore / this.students.length;

//         const sortAge = this.students.sort((b, a) => b.age - b.age);
//         const sumScore = this.student.reduce(a, b) => a + b.score, 0);

//         sumScore = 

//         console.log(sortScore);

//         console.log(maxScore);
//     }
// }

// const result = new Studentcalculator(students);


// const student = [ 
// {
//     nama : "Zahed",
//     email : "Zahed@gmail.com",
//     age : 20,
//     score : 100,
// },
// {
//     nama : "Labianca",
//     email : "Labianca@gmail.com",
//     age : 18
//     score : 99
// },
// {
//     nama : "Nasredin",
//     email : "Nasredin@gmail.com",
//     age : 21,
//     score : 99,
// },
// };

// const result = new Studentcalculator(student);

class Product {
    coonstructor (name, price) {
        this.name = name;
        this.price = price;
    }
}

class Transaction extend Product {
    constructor( name, price, total, product) {
        super();
        this.total = total;
        this.product = product;
        this.allProductData = [];
        let payment = 0;
    }
}

addToCart(name, price, product) {
    this.allProductData.push({ name, price, product});
    if (price > 0 && product > 0) {
        console.log(` item ditambahkan ${name}, ${price}, ${product}`);
    }
}

ShowTotal() {
    let cost = this.allProductData.reduce(
        (totalPrice, item) => totalPrice + item.price * item.product,
        0
    );
    console.log(`cost : ${cost}`);
}

checkout (payment) {
    console.log(this.allProductData);
}

let totalHarga = this.allProductData.reduce(
    (a), b) => a + b.price * b.product,
        0
    );

    console.log(`total harga : ${totalHarga} ');
        if (payment totalHarga - payment;
        console.log(`Uang anda kurang sebanyak ${bayar}``);
    }

    if (payment === total < totalHarga) {
        console.log("Uang anda pas");
    }
    if (payment == totalHarga) {
        let bayar = payment - totalHarga;
        console.log(`Anda mendapat kembalian sebesar ${bayar}`);
    
    }
}
}


//USE
const buyingItem = new Transaction();
//tambah item disini
buyingItem.addToCart("Tas", 200, 2);
buyingItem.addToCart("pulpen, 400, 3);


    buyingItem.showTotal();

    buyingItem.checkout(2000);

    