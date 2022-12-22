// Closure

// Lexical Scope
function init() {
    let name = "Putu";      // Local variable didalam scope init()

    function greet() {      // Inner function, merupakan contoh closure.
        console.log(`Halo, ${name}!`);   // Memanggil variable pada parent function.
    }

    greet();
}

init();

//===================
function init1() {
    let name1 = "Tame";

    function greet1() {
        console.log(`Hello, ${name1}!`);
    }

    return greet1;
}

let myFunc1 = init1();
myFunc1();

// Hindari menggunakan function seperti ini!
let counter1 = 0;

let add = () => {
    return ++counter1;
}

console.log(add());
console.log(add());
console.log(add());
counter1 = 24;
console.log(add());     // 25


// Gunakan closure seperti dibawah ini agar fungsi dan variable menjadi private.
// Program counter dibuat dengan closure.
let add1 = () => {
    let counter1 = 0;

    return () => {
        return ++counter1;
    };
}

let add1Counter = add1();

console.log(add1Counter());
console.log(add1Counter());
console.log(add1Counter());
counter1 = 25
console.log(add1Counter());
console.log(counter1);
