// console.log("Menyalakan mesin kopi.");
// console.log("Menggiling kopi.");
// console.log("Memanaskan air.");
// console.log("Mencampur air dan kopi.");
// console.log("Menuangkan kopi kedalam gelas.");
// console.log("Menuangkan susu kedalam gelas.");
// console.log("Kopi anda sudah siap!.");

// Mengimport objek coffeeStock pada file state.js
// const coffeeStock1 = require("./state.js");

// Menampilkannya ke console
// console.log(coffeeStock1);

// Contoh pengkondisian pembuatan kopi.
// Jika parameter miligrams lebih dari nilai properti coffeeStock, maka true.
const makeCoffee = (type, miligrams) => {
    coffeeStock1[type] >= miligrams ?
        console.log("Kopi berhasil dibuat!.") : console.log("Biji kopi habis!.");
}

// makeCoffee("arabica",80);

//  argumen pada function abc berguna untuk mengetaui nilai properti tersebut.
// function abc(type) {
//     console.log(coffeeStock1[type]);
// }
// abc("arabica");

// Destructuring object untuk mendapatkan nilai yang diimpor dari file state.
// const {coffeeStock, isCoffeeMachineReady} = require("./state.js");
// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);


//=================== ES6 Module =================
    // Mengimport satu nilai saja
    // penamaan variabel bebas.
    // Nantinya akan muncul error setelah ditampilkan ke console.
    // itu karena berkas JS tidak dianggap module.
    // Gunakan cara dengan menambah properti di file package.json
    // atau mengganti ekstensi .js menjadi .mjs
// import stock from "./state.js";

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
// displayStock(stock);
// ===============================================

    // Mengimpor banyak nilai yang diekspor, menggunakan destructuring object.
    // nama variabel didalam obj literal harus sama agar tidak error.
    // Jika penamaan variabel ingin bebas, gunakan keyword as setelah nama variabel
// import {coffeeStock as stockX, isCoffeeMachineReady as isCMR} from "./state.js";

// console.log(stockX);
// console.log(isCMR);

const Car = require("./practice");

const newCar = new Car("Tesla", "Gray", "TL-1");
console.log(newCar);

newCar.chassisNumber = "Hacked";