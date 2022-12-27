// ===== Struktur data Set =====
 /*
    Data di set tidak berurutan, tidak mempunyai indeks.
    Bersifat unik, tidak ada data duplikat.
  */

    // Deklarasi Set
const numSet = new Set([1, 2, 3, 4, 4, 5, 1]);
console.log(numSet);

    // Menambahkan data kedalam Set
numSet.add(6);
numSet.add(10);
numSet.add(7);
numSet.add(8);
numSet.add([9,11,9]);
console.log(numSet);

    // Menghapus data
numSet.delete(8); // 8 adalah nilai, BUKAN index.
console.log(numSet);

    // Mengembalikan seluruh nilai/value bentuk SetIterator
console.log(numSet.values());

    // Memeriksa ketersediaan nilai
console.log(numSet.has(10));

    // Mengetahui jumlah elemen
console.log(numSet.size);

    // Perulangan pada Set
for (let i of numSet) {
    console.log(i);
}