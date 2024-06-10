// //Conditional statement

// //IF STATEMENT
// const age = 18;
// if(age>=17) {
//     //code blobk
//     console.log("anda bisa buat ktp");
// }




// //ELSE IF STATEMENT =========================================
// //memberikan kondisi lain pada if statement

// //const grade = "A";


// //if (grade ==="A"); {
// //    console.log("nilai bagus");
// // } else if (grade === "B"){
// //    console.log("nilai lumayan");
//  //} 

//  //SWITCH CASE

//  const day = "senin";

//  switch (day) {
//     case "senin":
//     console.log("hari senin");
//     break;
//   case "selasa" :
//         console.log("hari selasa");
//         break;
//  }


//  //truthy and falsy values --> da di ujian

// //LOGICAL OPERATOR ===========================================
// //&& -> dan
// // || -> atau
// // ! -> not

// const car = "mercy";
// const car2 = "bmw";

// if (car2 === "bmw" || car === "mercy") {
//     console.log("mobil jerman"); 'mobil jerman'
// } else {
//     console.log("mobil jepang")
// }

// //AND
// const umur =17;
// const punyaSIM =true;
// //TRUE   TRUE
// if (umur >= 18 && punyaSIM === true) {
//     console.log("boleh bawa kendaraan");
// }else {
//     console.log("belum boleh bawa kendaraan");
// }

// //NOT -> membalikkan nilai boolean

// const isSunny = true;
// const isRaining = !isSunny;

// console.log(isSunny);
// console.log(isRaining);

//TERNARY OPERATOR =====================================================================
//shortcut untuk if else condition

const str = "javascript";

if(str === "javascript") {
    console.log("javascript");
} else {
    console.log("not javascript");
}
//       condition                      true                            false
console.log(str === "javascript" ? "javascript" : "not javascript");

console.log( 'javascript')
str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"

// loop statement-> ulangan
// rangkaian instruksi yang dilakukan berulangkali
//hingga kondisinya tidak dipenuhi, if stop it false, if run is true
//type loop : for loop, while loop, do while loopp

//FOR LOOP --> memnyuai 3 statement
//statement 1 : menginisialisasi variable dari looping itu sendiri
//statement 2 : mendefine kondisi dari looping tersebut
//statement 3 : kode yang di eksekusi di akhir setiap literasi

//syntax
//for(statement1;statement2;statement3){}

// for loop

for(let i = 0; i < 3; i++){
    //code block
    console.log("hello world");
}

//WHILE LOOP ============================================================================================================
let i = 0;
while(i<20) {
  console.log("hello wolrd");
  i++;
}

//DO WHILE LOOP <mesti tau ya buat interview)

let count = 1




do {
    console.log("ini iterasi ke : " + count);
    count++;
} while (count <= 5);

//BREAK==============================================================================================
//untuk menghentikan loop

let sum = 0

while(true){
    console.log("sum = " + sum);

    if (sum >= 5) break; //bisa return bisa break

    sum += 1;
}

// CONTINUE==========================================================================================
// melakukan skip pada looping tertentu

for (let i = 0; i < 5; i++) {
   //if (i === 3) continue;
   
    console.log("hello");
}