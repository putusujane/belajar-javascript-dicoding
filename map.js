// =====Tipe Data Map =====
    // Mendeklarasikan Map langsung
const myMap = new Map([
    ["1", "a String key"],
    [1, "a number key"],
    [true, false]
]);

// mendeklarasikan saja
const myMap1 = new Map();
myMap1.set("nama", "Putu");
myMap1.set(27, "Umur");
console.log(myMap1);
// =================================

    // Menampilkan Map
console.log(myMap);

    // Mengambil nilai Map menggunakan get() berdasarkan key
console.log(myMap.get("1"));
console.log(myMap.get(1));
console.log(myMap.get(true));

    // Menambah key-value Map menggunakan set()
myMap.set("nama", "Putu");
myMap.set("umur", 27);

    // Mengubah nilai berdasarkan key
myMap.set(1, true);

console.log(myMap)

    // Mengetahui panjang Map
console.log(myMap.size);

    // Memeriksa apakah Map ada key tertentu didalam
console.log(myMap.has("umur"));

if (myMap.has("nama")) {
    console.log("myMap mempunyai nama.");
} else {
    console.log("Tidak punya.");
}

    // Menghapus key-value didalam map
console.log(myMap.delete("umur"));
console.log(myMap);

// Menampilkan semua key secara iterator
console.log(myMap.keys());

// Menampilkan semua value secara iterator
console.log(myMap.values());

// Perulangan pada Map
for (let i of myMap) {
    console.log(i);
}