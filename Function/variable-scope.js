// Variable Scope

    // Scoping

    // Global variable
const a = 'a';

    // Function parent
function parent() {
    // Variabel didalam function ini adalah local variable.
    // Hanya bisa diakses parent dan child, tidak bisa diakses luar function.
    const b = 'b';
    console.log(b);
    // console.log(c);  error

    // Function child
    function child() {
        // Local variable, hanya bisa diakses pada child saja.
        const c = 'c';
        console.log(c);
        console.log(b);
    }

    child();
}

console.log(a);
// console.log(b);      // Error, not defined.
// console.log(c);      // Error, not defined.

parent();


    // hati hati penulisan / mendefinisikan variabel didalam fungsi
let multiply = num => {
    total = num * num;
    return total;
}

let total = 9;
let number = multiply(20);

console.log(total);     // Menampilkan nilai 400, karena variabel total global.
// Gunakan tanda keyword let atau const agar tidak terjadi bentrokan.

console.log(number);        // 400

    // Jika menggunakan keyword let atau const
let add = angka => {
    let jumlah = angka + angka;
    return jumlah;
}

let jumlah = 15;
let tambah = add(100);

console.log(jumlah);
console.log(tambah);