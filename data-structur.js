// Object
console.log("===== Object =====");
// ======= Menetapkan objek pada JavaScript =======
    // Cara pertama
const user1 = {fName: "Putu", lName: "Sujane", age: 27, "is Married": false,};

    // Cara kedua
const user2 = {
    fName: "Putu",
    lName: "Sujane",
    age: 27,
    "is Married": false,
};

// ==== Mengakses nilai properti pada objeck
    // Menggunakan notasi titik (.)
console.log(`Halo, nama saya ${user1.fName} ${user1.lName}.`);
console.log(`Umur saya ${user1.age}.`)

    // Menggunakan bracket atau kurung siku
console.log(`Nama saya ${user2["fName"]} ${user2["lName"]}.`);
console.log(`Umur saya adalah ${user2["age"]}. Status perkawinan ${user2["is Married"]}.`);

// ===== Memanipulasi objek =====
    // Mengubah nilai properti
const user3 = {name: "Putu", age: 27, "is male": true,};

user3.name = "Rangga";
user3["age"] = 30;

console.log(user3);

    // Menginisialisasikan ulang objek akan menghasilkan error
// user3 = {name: "Tame", age: 23};     // Menghasilkan error.

    // Menambah properti
user3.eyeColor = "Black";
user3["hairColor"] = "Black";

console.log(user3);

    // Menghapus properti
delete user3.name;
delete user3["age"];

console.log(user3);

// Array
console.log("\n===== Array =====");
// Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkan didalam satu variabel.

    // Membuat Array
const dataArr1 = ["Putu", 27, "Black", false,];
console.log(dataArr1);

const dataArr2 = [
    "Rangga", 4, "Black", false,
];

console.log(dataArr2);

    // Mengakses nilai Array
console.log(dataArr1[0]);
console.log(dataArr2[1]);

    // Jika mengakses diluar ukuran index
console.log(dataArr1[4]);       // Menghasilkan nilai undefined

    // Mengetahui panjang nilai
console.log(dataArr2.length);

    // Menambah data diakhir
dataArr2.push("Apple");
console.log(dataArr2);

    // Mengeluarkan data diakhir
dataArr2.pop();
dataArr2.pop();
console.log(dataArr2);

    // Mengeluarkan elemen pertama menggunakan shift()
dataArr2.shift();
console.log(dataArr2);

    // Menambah elemen awal
dataArr2.unshift("Tame");
console.log(dataArr2);

    // Menghapus data
delete dataArr2[1];     // hanya menghapus data saja
console.log(dataArr2);

    // Menghapus elemen
dataArr2.splice(2, 1);
console.log(dataArr2);

// ======================= Spread Operator ========================
console.log("\n================= Spread Operator ==================");
// Berfungsi untuk menyebarkan nilai array atau iterable
const data1 = ["Fruits", 3.14, true, 50,];
console.log(data1);
console.log(...data1);

    // Menggabungkan dua array atau lebih menggunakan spread operator
const data2 = ["Person", 27, false, "Brown"];
console.log(...data2);

const concatData1 = [...data1, ...data2];
console.log(concatData1);

    // Tanpa spread operator
const concatData2 = [data1, data2];
console.log(concatData2);

// ====Menggabungkan object literal menggunakan spread operator ====
    // Catatan: jika key object sama, maka akan ditimpa oleh obj2
const obj1 = {fName: "Putu", age: 27, status: false,};
const obj2 = {lName: "Sujane", "eye color": "Black",};

const concatObj = {...obj1, ...obj2};
console.log(concatObj);