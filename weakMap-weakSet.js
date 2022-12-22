// // Contoh Map
// let visitCountMap = new Map();      // Menyimpan daftar user.
//
// function countUser(user) {
//     let count = visitCountMap.get(user) || 0;
//     visitCountMap.set(user, count + 1);
// }
//
// let jonas = {name: "Jonas"};
// countUser(jonas);
//
// jonas = null;
//
// setTimeout(function () {
//     console.log(visitCountMap);
// }, 10000);


// Contoh weakMap
const {inspect} = require("util");

let visitCountMap1 = new WeakMap();     // Menyimpan daftar user.

function countuser1(user) {
    let count1 = visitCountMap1.get(user) || 0;
    visitCountMap1.set(user, count1 + 1);
}

let jonas1 = {name: "Jonas"};
countuser1(jonas1);             // Menambah user "Jonas".


jonas1 = null;          // Data object "Jonas" dihapus.

// Delay dibutuhkan untuk menunggu garbage collector bekerja.
setTimeout(function () {
    console.log(inspect(visitCountMap1, {showHidden: true}));
}, 10000);