
// PROMISE ALL
// Method Promise.all() dapat menerima banyak promise dalam bentuk array pada parameter.
// Kemudian method ini akan mengembalikan nilai seluruh hasil dari promise dalam bentuk array.

    // Membuat object state untuk menyimpan stock dan ketersediaan mesin
const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
};

    // Memeriksa ketersediaan mesin
const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin siap digunakan!");
            } else {
                reject("Mesin masih sibuk!");
            }
        }, 1500);
    })
}

    // Memeriksa kecukupan stock biji kopi dan air
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
            resolve("Stok cukup. Siap membuat kopi!");
        } else {
            reject("Stok tidak cukup. Tidak bisa Membuat kopi!");
        }
    }, 2000);
}

    // Memanaskan air
const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan air...");
        setTimeout(() => {
            resolve("Air panas sudah siap!");
        },2000);
    })
}

    // Menggiling kopi
const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Menggiling biji kopi...");
        setTimeout(() => {
            resolve("Bubuk kopi sudah siap!");
        }, 1000);
    })
}

    // Mencampur kopi dan air, lalu menghidangkan ke gelas.
const brewCoffee = () => {
    console.log("Sedang membuat kopi...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!");
        }, 2500);
    })
}

module.exports = {checkAvailability, checkStock,boilWater, grindCoffeeBeans, brewCoffee}; // Abaikan!
    // Memanggil semua diatas
    // Memanfaatkan Promise.all() untuk menjalankan kedua fungsi diatas sebelum fungsi brewCoffee()
const makeEspresso = () => {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })

        .then((value) => {
            console.log(value);
            const promises = [boilWater(), grindCoffeeBeans()];

            return Promise.all(promises);
        })

        .then((value) => {
            console.log(value);
            return brewCoffee();
        })

        .then((value) => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })

        .catch((rejectedReason) => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        })
}

    // Menampilkan ke console
makeEspresso();

