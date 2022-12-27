// Pengenalan Function

/*
    Apa itu function?
    - Function merupakan blok kode atau prosedur yang dapat digunakan secara berulang.

    Tujuan menggunakan function
    - Agar kode terlihat clean (Bersih).
    - Memanggil berulang-ulang kode, tanpa banyak syntak.

 */

// MEMBUAT FUNCTION
    // Declaration Function
function myFunction() {
    console.log("Hello, World!");
}
    // Memanggil function
myFunction();


    // Function dengan parameter dan conditional
function greeting(name, language) {
    if (language === "English") {
        console.log(`Good morning, ${name}`);
    } else if (language === "Indonesia") {
        console.log(`Selamat pagi, ${name}`);
    } else if (language === "French") {
        console.log(`Bonjour, ${name}!`);
    } else {
        console.log(`Unknown`);
    }
}

greeting("Putu","French");


    // Function dengan parameter dan mengembalikan nilai
function funcParam(a, b) {
    return a + b;
}

console.log(funcParam(1,6));

function ucapan(name, language) {
    if (language === "Indonesia") {
        return `Selamat datang, ${name}!`;
    } else {
        return `Tidak diketahui!`;
    }
}

let pesanUcapan = ucapan("Putu","English");
console.log(pesanUcapan);


    // Expression function / Anonymous function
const data1 = function (name, language) {
    return language === "English" ? `Hello, ${name}!` : "Unknown";
}

console.log(data1("Rangga","Indonesia"));
console.log(data1("Rangga","English"));
