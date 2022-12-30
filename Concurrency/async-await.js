// async-await
//=========================================

    // Membuat function getCoffee()
const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

    // Mendaptkan nilai fungsi getCoffee() menggunakan method .then()
// const makeCoffee = () => {
//     getCoffee().then((coffee) => {
//         console.log(coffee);
//     })
// }
// makeCoffee();

    // Contoh penggunakan async-await
    // Harus menggunakan regular function
    /*
        Keterangan: Keyword async untuk menjalankan fungsi makeCoffee() secara asynchronous.
        keyword await untuk menghentikan proses pembacaan kode selanjutnya sampai ...
        ...fungsi getCoffee() diatas mengembalikan nilai promise resolve.
     */
// async function makeCoffee() {
//     const coffee = await getCoffee();
//     console.log(coffee);
// }
//
// makeCoffee();

// Handle obRejected using async-await
    // Menangani sebuah error atau tolakan dengan menggunakan try...catch.
// async function makeCoffee() {
//     try {
//         const coffee = await getCoffee();
//         console.log(coffee);
//     } catch (rejectedReason) {
//         console.log(rejectedReason);
//     }
// }
//
// makeCoffee();

// Chaining Promise Using async-await
// ===================================================
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
// async function makeEspresso() {
//     try {
//         await checkAvailability();
//         await checkStockCW();
//         const coffee = await brewCoffee();
//         console.log(coffee);
//
//     } catch (rejectedReason) {
//         console.log(rejectedReason);
//     }
// }
//
// makeEspresso();

    // Menjalankan beberapa promise sekaligus secara bersamaan menggunakan Promise.all()
//======================================================
const {checkAvailability1, checkStock1, boilWater1, grindCoffeeBeans1, brewCoffee1} = require("./promise-all");

async function makeEspresso1() {
    try {
        await checkAvailability1;
        await checkStock1;
        await Promise.all([boilWater1, grindCoffeeBeans1]);
        const coffee = await brewCoffee1;
        console.log(coffee);

    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

makeEspresso1();