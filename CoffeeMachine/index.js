// Belajar Node Package Manager (NPM)
//=========================================
// ==================================================

/*
    Menggunakan module lodash pada Array untuk menjumlahkan tiap
    nilai didalam elemen array.
    */

    // Cara lama menggunakan iterasi for
const myArray1 = [1, 2, 3, 4];
let sum1 = 0;

for (let i = 0; i < myArray1.length; i++) {
    sum1 += myArray1[i];
}

console.log(sum1);

    // Cara lama menggunakan fungsi reduce
const myArray2 = [1, 2, 3, 4, 5];
let sum2 = myArray2.reduce((prev, curr) => {
    return prev + curr;
});

console.log(sum2);

    // Menggunakan module lodash
    // Import module lodash menggunakan perintah ES6
import _ from "lodash";

    // Deklarasi Array
const myArray3 = [1, 2, 3, 4, 5, 6];
const sum3 = _.sum(myArray3);

console.log(sum3);