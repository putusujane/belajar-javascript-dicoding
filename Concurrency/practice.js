// Solusinya membuat callback function
// =====================================================
// const orderCoffee = callback => {
//     let coffee = null;
//
//     console.log("Kopi sedang dibuat, mohon tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//         callback(coffee);
//     }, 2000)
// }
//
// orderCoffee(coffee => console.log(coffee));


// Membuat Promise untuk menghindari callback (hell)
//===================================================
    //----- Resolver function (executor function)
    // Fungsi ini dijalankan otomatis ketika constructor Promise dipanggil.
// const executorFunction = (resolve, reject) => {
//     const isCoffeeMakerReady = true;
//
//     if (isCoffeeMakerReady) {
//         resolve("Kopi berhasil dibuat.");
//     } else {
//         reject("Mesin tidak bisa digunakan!.");
//     }
// }
//
//     // Memanggil executorFunction didalam consturctor Promise
// const makeCoffee = () => {
//     return new Promise(executorFunction);
// }

// const coffeePromise = makeCoffee();
// console.log(coffeePromise);

// Consuming promise
//================================================

    // Membuat object stock
// const stock = {
//     coffeeBeans: 250,
//     water: 1000,
// };
//
//     // executor function atau reslover function
// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         if (stock.coffeeBeans >= 16 && stock.water >= 250) {
//             resolve("Stok cukup. Bisa membuat kopi.");
//         } else {
//             reject("Stock tidak cukup!");
//         }
//     })
// }
//
//     // Fungsi handler
// const handleSuccess = (resolveValue) => {
//     console.log(resolveValue);
// }
//
// const handleFailure = (rejectedReason) => {
//     console.log(rejectedReason);
// }
//
//     // Memanggil .then() pada checkStock()
// checkStock().then(handleSuccess, handleFailure);

// onRejected with .catch() method
//=========================================================
    // Membuat object stock
const stock = {
    coffeeBeans: 250,
    water: 1000,
}

    // Executor Function (Resolver function)
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Kopi bisa dibuat!");
        } else {
            reject("Stok kurang. Tidak bisa membuat kopi!");
        }
    })
}

    // Handle function untuk menangani masing2 reslove dan reject
const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
}

const handleFailure = (rejectedReason) => {
    console.log(rejectedReason);
}

// Memanggil memthod .then() dan .catch untuk menangani masing2 Promise
checkStock()
    .then(handleSuccess)
    .catch(handleFailure)
