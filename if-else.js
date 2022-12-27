// if else Statement
let isRaining = true;

console.log("Persiapan sebelum berangkat.")

if (isRaining) {
    console.log("Hari ini hujan. Bawa payung"); // Akan dieksekusi karena nilai true.
}

console.log("Berangkat kegiatan");
//=-----------------------------------------

// Operasi perbandingan dengan pengkondisian

let nilai1 = 50;

if (nilai1 > 70) {
    console.log(nilai1);
} else {
    console.log(`Nilai kurang dari 70`);
}

// else if

let greeting = "Selamat pagi";
let language = "French";

if (language === "English") {
    greeting = "Good morning!";
} else if (language === "French") {
    greeting = "Bonjour!";
} else if (language === "Japanese") {
    greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);

// Ternary operator / conditional expression
const isMember = true;

const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);

// Truthy dan Falsy
/*
    - 0
    - ''
    - ""
    -0n
    - null
    - undefined
    - NaN atau Not a Number
 */

let fName = "";
if (fName) {
    console.log(`Halo ${fName}!`);
} else {
    console.log("Name is empty.")
}

console.log(fName == true);
console.log(fName == false);

console.log(typeof fName);

// Versi Ternary / kondisi ekspresi
const hasil = fName ? `Halo ${fName}!` : "Nama kosong!";
console.log("\n" + hasil);