// ======= Destructuring Array =================
    // Destructuring array pada ES6
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [fFood, sFood, tFood, foFood] = favorites;    // Penamaan variabel sesuai urutan.
console.log(fFood, sFood, tFood, foFood);

    // Memilih sesuai posisi nilai
const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];

const [, , tFood1] = favorites1;    // memilih posisi 3
console.log(tFood1);

const [fFoof1] = favorites1;        // memilih posisi 1
console.log(fFoof1);

    // Destructuring Assignment
const fruits1 = ["Apple", "Mango", "Orange"];
let foodPertama = "Semangka";
let foodKedua = "Rambutan";
console.log(foodPertama);

([foodPertama, foodKedua] = fruits1);   // Tanda kurung opsional.
console.log(foodPertama);
console.log(foodKedua);

//======Cara manual menukar nilai antar variabel
var a = 1;
var b = 2;
var temp;

console.log("Sebelum swap");
console.log(`Nilai a: ${a}`);
console.log(`Nilai b: ${b}`);

temp = a;
a = b;
b = temp;

console.log("Setalah swap");
console.log(`Nilai a: ${a}`);
console.log(`Nilai b: ${b}`);

//===== Cara Menukar variabel ES6 Menggunakan destructuring assignment
var x = 1;
var y = 2;
var temporary;

console.log("Sebelum swap");
console.log(`Nilai x: ${x}`);
console.log(`Nilai y: ${y}`);
//==============================

[x, y] = [y, x];
console.log("Setelah swap");
console.log(`Nilai x: ${x}`);
console.log(`Nilai y: ${y}`);

//============ Default value
const food = ["Seafood"];

const [foodP, foodK] = food;
console.log(foodP, foodK);      // foodK menghasilkan undefined karena tidak ada.

    // memberikan nilai default pada foodScnd
const [foodFrst, foodScnd = "Rice"] = food;
console.log(foodFrst, foodScnd);