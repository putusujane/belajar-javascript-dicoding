// Program pertama
console.log("Hello, World!");

// Contoh Expression
// 5;
//
// 2 + 3;

// Contoh Statement
// var yourName;
// let fName;
// const person;

// Expression merupakan kode yang menghasilkan nilai.
// Statement menunjukkan aksi yang dilakukan.

// Declaration statement
let fName;
fName = "Putu";

console.log(fName);

// Inisialisasi atau assignment expression
let lName = "Sujane";
console.log(lName);

// let fullName = let data;                 // Error
let fullName = (lName = "Putu");            // ekspresi tidak error
let fullName1 = "Komang" + "Rangga";         // ekspresi tidak error


// Variabel tidak bisa diubah
const nama = "Putu";
// nama = "Sujane";     // Menghasilkan error

const nilai1 = 100;
console.log(nilai1);

// nilai1 = 170;        // Error

// Tipe data
// Undefined
let dataU;
console.log(dataU);
console.log(typeof dataU);

console.log("\n====Perhitungan Aritmatika Tipe Data Number====\n");
let tambah = 10 + 10;
console.log(tambah);

let kurang = 15 - 7;
console.log(kurang);

let kali = 9 * 5;
console.log(kali);

let bagi = 21 / 7;
console.log(bagi);

let modulus = 5 % 2;
console.log(modulus);

let pangkat = 3 ** 3;
console.log(pangkat);

console.log("\n==== Increment dan Decrement ====\n");
let postfixPositif = 5;
console.log(postfixPositif++);
console.log(postfixPositif);

let prefixPositif = 5;
console.log(++prefixPositif);
console.log(prefixPositif);


let postfixNegatif = 10;
console.log(postfixNegatif--);
console.log(postfixNegatif);

let prefixNegatif = 7;
console.log(--prefixNegatif);
console.log(prefixNegatif);

console.log("\n==== BigInt ====\n");

const bigNumber = 123456789n;
const myInt = 123456789

console.log(bigNumber);
console.log(myInt);

console.log("=== Operasi Aritmatika BigInt ===");
console.log(1n + 1n);
console.log(1n - 1n);
console.log(2n * 2n);
console.log(5n / 2n);   // hasilnya akan dibulatkan kebawah.
console.log(2n % 2n);
console.log(2n ** 2n);

console.log("==== String Template (Interpolation) ====");

let person1 = "Putu";
console.log(`Halo, perkenalkan nama saya ${person1}.`);

console.log("=== Data Boolean ===");
let dataBool1 = true;
let dataBool2 = false;

console.log(typeof dataBool1);
console.log(typeof dataBool2);

const nilai1X = 10;
const nilai2 = 5;

let isGreater = nilai1X > nilai2;
let isLess = nilai1X < nilai2;

console.log(isGreater);
console.log(isLess);

let dataNull = null;
console.log(dataNull);

console.log("=== Tipe Data Symbol ===");

const id = Symbol("id");
const id1 = Symbol("id");
console.log(id);
console.log(id1);

console.log(id === id1);

console.log(typeof id);