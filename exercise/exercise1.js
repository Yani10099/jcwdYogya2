const length = 5;
const width = 3;

console.log(5*3); //answer no 1

console.log(5+5+3+3); //answer no 2

console.log(5*2); //diameter
console.log(2*3.14*5); //circumference
console.log(3.14*5*5); //area

//answer no 4
const a = 80 
const b = 65

const c = 180 -(80+65);
console.log(180-80-65);

//answer no 5.1

function convertDays(days) {
    // Hitung jumlah tahun
    const years = Math.floor(days / 365);
    
    // Sisa hari setelah dihitung tahun
    let remainingDays = days % 365;

    // Hitung jumlah bulan
    const months = Math.floor(remainingDays / 30);
    
    // Sisa hari setelah dihitung bulan
    remainingDays %= 30;
    
    // Output hasil
    console.log(`${days} days -> ${years} year(s), ${months} month(s), ${remainingDays} day(s)`);
}

// Test cases
convertDays(400); // Output: 1 year, 1 month, 5 days
convertDays(366); // Output: 1 year, 0 month, 1 day

//answer no 6
function dateDifferenceInDays(date1_str, date2_str) {
    const date1 = new Date(date1_str);
    const date2 = new Date(date2_str);
    
    // Calculate the difference in milliseconds
    const differenceInMs = Math.abs(date2 - date1);
    
    // Convert the difference from milliseconds to days
    const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
    
    return differenceInDays;
}

const date1 = "2022-01-20";
const date2 = "2022-01-22";
console.log("Difference in days:", dateDifferenceInDays(date1, date2));

