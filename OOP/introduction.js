// Introduction Object Oriented Programming (OOP)

    // Contoh Object dengan Properti dan Method
const car1 = {
    // Properti
    brand: "Tesla",
    color: "White",
    maxSpeed: 200,
    chassisNumber: "T-1",

    // Method
    drive: () => {
        console.log("Driving");
    },

    reverse: () => {
        console.log("Reversing");
    },

    turn: () => {
        console.log("Turning");
    },
};

    // Akses properti dan method object
console.log(car1.brand);
console.log(car1.color);
console.log(car1.maxSpeed);
console.log(car1.chassisNumber);

car1.drive();
car1.reverse();
car1.turn();
//=====================================================

//======= CONSTRUCTOR FUNCTION ===========
// Hanya bisa menggunakan regular function
function Car1(brand, color, maxSpeed, chassisNumber) {
    // Properti
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
};

// Method
Car1.prototype.drive = function() {
    console.log(`Mobil ${this.brand} maju.`);
}

Car1.prototype.reverse = function() {
    console.log(`Mobil ${this.brand} berwarna ${this.color}`);
}

Car1.prototype.turn = function() {
    console.log(`Mobil ${this.brand} sedang mundur.`);
}

// Membuat object mobil dengan constructor function Car
const mobil1 = new Car1("Tesla","White",200,"T-1");
const mobil2 = new Car1("BMW","Black",500,"BM-X");
const mobil3 = new Car1("Ford","Red",300,"F-1");

console.log(mobil1);
console.log(mobil2);
console.log(mobil3);

mobil1.drive();
mobil2.drive();
mobil3.drive();

//============ Syntax Class di ES6 ==============
class Car2 {
    constructor (brand, color, maxSpeed, chassisNumber) {
        // Properti
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = chassisNumber;
    };

    drive() {
        console.log(`${this.brand} melaju ${this.maxSpeed}.`);
    };

    reverse() {
        console.log(`${this.brand} berjalan mundur`);
    };

    turn() {
        console.log(`${this.brand} berbelok kiri`);
    };
}

// Membuat object mobil dengan constructor function Car2
const mobilX = new Car2("Tesla","Red",350,"TR-1");
const mobilY = new Car2("Ferrary","Black",400,"FR-11");
const mobilZ = new Car2("Bentley","Blue",450,"BT-1");

console.log(mobilX);
console.log(mobilY);
console.log(mobilZ);

mobilX.drive();
mobilY.drive();
mobilZ.drive();
console.log(typeof Car2);