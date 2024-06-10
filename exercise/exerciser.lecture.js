//no 2
const width = 5;
const length = 3;
const perimeter = 2 * (length + width);

console.log("Perimeter:" + perimeter);

//no 3
const radius = 14;
const diameter = 2 *radius;


//console.log(`Diameter : ${diameter}, ${Circumtance}




//no 5
const date1 = new Date("2023-11-01");
const date2 = new Date("2023-11-20");
const bedaTanggal = Math.abs(date1-date2);
const bedaHari = Math.round(bedaTanggal / (1000*3600*24));

console.log(`perbedaan hari tanggal 1 & 2 = ${bedaHari}`);


//no 6 
const hari = 400;
const tahun = Math.floor(hari/365);
const bulan = Math.floor(hari % 365) / 30 ;
const tanggal = Math.floor(hari % 365) % 30


