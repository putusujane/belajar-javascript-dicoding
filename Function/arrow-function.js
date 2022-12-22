// Arrow Function Expression

    // Penulisan function declaration (Regular)
function myFunction(greet) {
    console.log(`Say hello to ${greet}.`);
}

myFunction("Tame");

    // Arrow function expression
const sayHello = (name) => {
    console.log(`Hai, ${name}!`);
}

sayHello("Putu");
sayHello("Tame");

    // Menulis arrow function hanya satu parameter
const arrowFunc1 = name => {
    console.log(`Nama: ${name}.`);
}

arrowFunc1("Dodi");

    // Tanpa parameter
const arrowF2 = () => {
    console.log(`Welcome to Indonesia!`);
}

arrowF2();

    // Jika body function hanya satu baris
const arrowF3 = age => console.log(`Age: ${age}.`);

arrowF3(27);

const arrow4 = () => console.log("Halo, apakabar?");

arrow4();


    // Tidak perlu lagi menuliskan return untuk mengembalikan nilai
    // Hanya bisa untuk function satu baris.
const multiply = (a, b) => a * b;
console.log(multiply(5,5));