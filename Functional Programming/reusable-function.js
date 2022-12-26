// Reusable function

    // Array Map
        // Contoh 1
const person = ["Putu", "Tame", "Rangga", "Dodi"].map((name) => `${name}!`);
console.log(person);

        // Contoh 2
const person2 = ["John", "Jeff", "Elon", "Mark"].map((name) => {return `${name}!`});
console.log(person2);

    // Array filter
        // Contoh menghilangkan semua nilai false pada array.
        // Catatan: jangan membuat statement trutyArry lagi, karena tidak berefek.
const trutyArray = [1, "", "Hello", 0, null, undefined, true, false].filter((item) => Boolean(item));
console.log(trutyArray);

        // Contoh menyaring objek siswa yang layak mendapatkan beasiswa berdasarkan nilai skor.
const students = [
    {name: "Putu", score: 85},
    {name: "Rangga", score: 88},
    {name: "Dodi", score: 90},
    {name: "John", score: 75},
].filter((student) => student.score >= 85);

console.log(students);

    // Array Reduce
        // Contoh menjumlahkan total nilai siswa
const students1 = [
    {name: "Putu", score: 85},
    {name: "Rangga", score: 88},
    {name: "Dodi", score: 90},
    {name: "John", score: 75},
].reduce((acc, student) => acc +student.score, 0);

console.log(students1);

    // Array Some
        // Contoh mengetahui apakah terdapat angka genap
const array = [1, 2, 3, 4, 5];

const even = array.some((elemen) => elemen % 2 === 0);
console.log(even);

    //Array find
        // Mencari siswa bernama "James"
const arrStudents = [
    {name: "Putu", score: 70},
    {name: "James", score: 80},
    {name: "Ditya", score: 85},
];

const findStudent = arrStudents.find((student) => student.name === "James");
console.log(findStudent);

    // Array Sort
        // Mengurutkan array berdasarkan ascending (semua nilai menjadi string)
const months = ["Jan", "Feb", "Mar", "Apr"];
months.sort();
console.log(months);

        // Data dibawah diurutkan berdasarkan angka awal
const arrX = [1, 20, 30, 4, 1000, 101, 3.14];
arrX.sort();
console.log(arrX);

        // Mengurutkan sesuai nilai siswa atau nilai tertinggi,
        // Menggunakan compare function
const arrNilaiSiswa = [1, 30, 100, 7.5, 3.14];
const compareNum = (a, b) => {return a - b};

const sorting1 = arrNilaiSiswa.sort(compareNum);
console.log(sorting1);

    // Array every
        // Memeriksa apakah semua siswa telah lulus ujian materi.
const scores = [70, 85, 90];
const minimumScore = 65;

const examPassed = scores.every((score) => score >= minimumScore);
console.log(examPassed);

    // Array forEach
        // Contoh cara imperatif (lama)
const persons = ["John", "Putu", "Doni", "Rangga"];
for (let i = 0; i < persons.length; i++) {
    console.log(`Halo, ${persons[i]}!`);
}

console.log("======================================");
        // Contoh cara deklaratif (rekomendasi)
const persons2 = ["Putu", "Tame", "Rangga", "Dodi"];
persons2.forEach((name) => {
    console.log(`Halo, ${name}!`);
});

        // Menggunakn forEach tidak bisa menggunakan operator break atau continue.
        // Pada proses perulangan kita bisa menggunakan perulangan for
        // hal ini juga berlaku ketika pada fungsi map dan filter.

        // Contoh penggunakan continue pada perulangan for
const person3 = ["John", "Doe", 27, true];
for (let i = 0; i < person3.length; i++) {
    if (person3[i] === "Doe") continue;

    console.log(`Hello, ${person3[i]}`);
}

        // Penggunakan continue tidak bisa pada forEach
// person3.forEach((name) => {
//     // if (name === 27) continue;      // Tidak bisa, error.
//
//     console.log(`Hello, ${name}!`)
// })