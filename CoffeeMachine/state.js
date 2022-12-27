const coffeeStock = {
    arabica: 100,
    robusta:  150,
    liberica: 200,
};

const isCoffeeMachineReady = true;

// Mengekspor object coffeeStock menggunakan class Module, propertinya exports.
// module.exports = coffeeStock;

// Mengekspor dua atau lebih nilai menggunakan objeck literal.
// module.exports = {coffeeStock, isCoffeeMachineReady};


//=================== ES6 Module =================
    // Mengekspor satu nilai saja
// export default coffeeStock;

    // Mengekspor banyak nilai dalam berkas JS.
    // Cara kerja mirip node.js, nilai ditulis dalam bentuk objek literal.
export {coffeeStock, isCoffeeMachineReady};