// Promise = digunakan untuk menghindari callback hell
// Dengan promise, kita dapat membaca kode lebih mudah. Bahkan non-dev pun paham kode dibawah!.

    // Dibawah ini hanya contoh saja
const make_A_Cake = (...rawIngredients) => {
    collecIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bake_A_Cake)
        .then(console.log)
}

// make_A_Cake("Tepung");

// Promise memiliki perilaku yang sama dengan analogi kita sehari-hari.
// Promise adalah sebuah object digunakan untuk membuat sebuah komputasi (kode)
// ..ditangguhkan dan berjalan secara Asynchronous.
// Promise memiliki tiga kondisi, yaitu:
/*
    1. Pending = Janji sedang proses
    2. fulfilled = Janji terpenuhi
    3. Rejected = Janji gagal terpenuhi
 */

    // Cara membuat Promise
//==================================================
    // Executor function (Resolver function) memiliki dua parameter yang berupa fungsi.
const executorFunction = (resolve, reject) => {
    // kondisi mesin kopi
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat.");
    } else {
        reject("Mesin tidak bisa digunakan.");
    }
}

    // Constuctor Promise untuk mengembalikan objek Promise dengan parameter executorFunction diatas
let makeCoffee = () => {
    return new Promise(executorFunction);
}

    // Menampilkannya ke console.
console.log(makeCoffee());
//============================================================
console.log("=============================================");

// ========= Consuming Promise ============
    // Membuat object stock
const stock1 = {
    coffeeBeans: 15,
    water: 1000,
};

    // Membuat executor function dengan parameter resolve dan reject
    // Berfungsi untuk mengecek ketersediaan nilai object stock diatas.
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock1.coffeeBeans >= 16 && stock1.water >= 250) {      // false && true = false
            resolve("Stok cukup. Bisa membuat kopi.");
        } else {
            reject("Stok tidak cukup!");
        }
    });
}

    // Fungsi handle menangani masing2 status resolve dan reject
const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectedReason => {
    console.log(rejectedReason);
}

    // Memanggil method .then() pada checkStock() untuk menangani hasil yang dikembalikan dari promise.
checkStock().then(handleSuccess, handleFailure);
//==============================================================
console.log("============================================");

// onRejected With catch Method ================================
    // Menerapkan prinsip separation of concerns (Pemisahan masalah)
    // Agar kode lebih rapi dan mudah untuk mencari error.

    // Membuat object stock2
const stock2 = {
    coffeeBeans: 250,
    water: 1000,
};

    // Executor Function
const checkStock2 = () => {
    return new Promise((resolve, reject) => {
        if (stock2.coffeeBeans >= 16 && stock2.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi.");
        } else {
            reject("Stok tidak cukup!");
        }
    });
}

    // Fungsi handle untuk menangani masing2 resolve dan reject
const handleSuccess1 = resolvedValue => {
    console.log(resolvedValue)
}

const handleFailure1 = rejectedReason => {
    console.log(rejectedReason);
}

    // Memanggil method .then() dan .catch() untuk menangani hasil yg dikembalikan Promise
checkStock2()
    .then(handleSuccess1)
    .catch(handleFailure1)

console.log("=================================");


// CHAINING PROMISE ====================================================
    // Object state untuk menyimpan stok dan ketersediaan mesin
const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
};

    // Function memeriksa ketersediaan mesin, didalamnya ada function setTimeOut()
const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan!");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 2000);
    })
}

    // Function Memastikan stok biji kopi dan air cukup untuk membuat kopi
const checkStockCW = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi!");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 2500);
    })
}

    // Fungsi Promise untuk mencampur kopi dan air, lalu menghidangkan ke gelas.
const brewCoffee = () => {
    console.log("Sedang membuat kopi anda...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!");
        }, 3000);
    })
}

    // Function Memanggil semua diatas dengan Chaining Promise
const makeEspresso = () => {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStockCW();
        })

        .then((value) => {
            console.log(value);
            return brewCoffee();
        })

        .then((value) => {
            console.log(value);
            return state.isCoffeeMachineBusy = false;
        })

        .catch((rejectedReason) => {
            console.log(rejectedReason);
            return state.isCoffeeMachineBusy = false;
        });
}

makeEspresso();