// Terdapat build-in class bawaan, yaitu:
/*
    1. Date
    2. Object
    3. Array
    4. Math
    5. String
 */

// Contoh Build-in class Date()
const date = new Date();
const timeInJkt = date.toLocaleString("id-ID", {
    timemZone: "Asia/Jakarta",
});

const timeInTokyo = date.toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
});

const timeInMakassar = date.toLocaleString("id-ID", {
    timeZone: "Asia/Makassar",
});

console.log(timeInJkt);
console.log(timeInTokyo);
console.log(timeInMakassar);

// Contoh Build-in class Array()
const myArr = new Array("a", "b", "c", "d");
console.log(myArr);

// Subclass array menggunakan build-in class Array()
// Dibawah adalah struktur data seperti array, tetapi nilai tiap elemen unik.
class UniqueArray extends Array {
    constructor(...args) {
        // Pastikan args adalah unik sebelum melewati super.
        const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);

        super(...uniqueValue);
    }

    // Method
    add(item) {
        // Pastikan hanya item unik yang ditambahkan.
        if (!this.includes(item)) {
            super.push(item);
        }
    }
}

// Membuat object someArray dari consturctor class UniqueArray
const someArray = new UniqueArray("a","b","c","d","a","b","e");
console.log(someArray); // Menghasilkan nilai unik. item sama tidak ditampilkan.

someArray.add("d");
console.log(someArray);