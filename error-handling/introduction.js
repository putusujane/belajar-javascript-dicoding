// Pengenalan error handling (Penanganan Error)
//================================================

    // Menggunakan try ... catch
try {
    console.log("Awal blok try.");
    // iniVariabel;     // Menghasilkan error
    console.log("Akhir blok try.");
} catch (error) {
    console.log("Terjadi error!");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log("=============================================");

    // Menggunakan try...catch...finaly
try {
    console.log("Awal blok.");
    console.log("Akhir blok.");
} catch (error) {
    console.log("Baris ini diabaikan.");
} finally {
    console.log("Ini tetap dieksekusi walau terjadi error.");
}
console.log("=============================================");
    // Throwing Errors (melemparkan error)
        // Contoh parsing JSON String ke Object
const json = '{"name": "Putu", "age": 27}';

try {
    const user = JSON.parse(json);
    console.log(user.name, user.age);

} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
console.log("=============================================");

        // Jika JSON String tidak sesuai, maka kode error ditangkap blok catch
const json1 = '{bad json}';

try {
    const user1 = JSON.parse(json1);
    console.log(user1.name);
    console.log(user1.age);

} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
console.log("=============================================");

        // Jika JSON String tidak ada properti yang dicari, maka hasilnya undefined
        // undefined sama saja error.
const json2 = '{"age": 27}';

try {
    const user2 = JSON.parse(json2);
    console.log(user2.name);
    console.log(user2.age);

} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
console.log("=============================================");
    //===========Solusinya menggunakan throw error ===================
const json3 = '{"age": 27}';

try {
    const user3 = JSON.parse(json3);

    if (!user3.name) {
        throw new SyntaxError("'name' is required!");
    }

    console.log(user3.name);
    console.log(user3.age);

} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}
console.log("=============================================");

    //============ Mendapatkan kode tipe error yang terjadi, dan cara menangani error.
const json4 = '{"name": "Putu", "age": 27}';

try {
    const user4 = JSON.parse(json4);

    if (!user4.name) {
        throw new SyntaxError("'eyeColor' is required!");
    }

    console.log(user4.name);
    console.log(user4.age);

} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}.`);

    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
console.log("=============================================");
//========== CUSTOM ERROR ================
// Membuat class Error sendiri dengan nama dan pesan sesuai kita.
// Class ini turunan dari class Error yang sudah ada.
// Dibawah ini contoh untuk cek validasi data dari JSON.

    // Class ValidationError warisan/turunan dari class Error
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

let json5 = '{"age": 27}';

try {
    const user5 = JSON.parse(json5);

    if (!user5.name) {
        throw new ValidationError("'name' is required!");
    }

    if (!user5.age) {
        throw new ValidationError("'age' is required!");
    }

    console.log(user5.name);
    console.log(user5.age);

} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof  ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}