// Practice (Latihan)
    // Perintah console
console.log("Hello, World!");
//=============================================================

    // Tipe Data
// console.log(typeof "Hello, World!");
// console.log(typeof 100);
// console.log(typeof 3.14);
// console.log(typeof true);
// console.log(typeof {greeting: "Hello", age: 27});
// console.log(typeof [1, true, "Hello"]);
// console.log(typeof [["name","Putu"], [true, false], [3.14,"PI"]]);
// console.log(typeof 100n);
// console.log(typeof Symbol("a"));
// //=============================================================
//
//     // Operator Aritmatika
// console.log(4 + 5);
// console.log(4 - 5);
// console.log(5 * 5);
// console.log(6 / 2);
// console.log(5 ** 5);
// console.log(10 % 3);
//
//     // Operator Perbandingan
// console.log(5 > 4);
// console.log(4 < 5);
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 == 5);
// console.log(5 != "5");
// console.log(5 !== "5");
// console.log(5 >= 4);
// console.log(5 <= 4);
//
//     // Operator Logika
//         // or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
//
//         // and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
//
//         // not  (negasi)
// console.log(!true);
// console.log(!false);
//
//     // Perbandingan dan Logika
// console.log("Hasil", 5 > 4 || 5 < 4);
// console.log("Hasil", 5 > 4 && 5 < 4);
// console.log("Hasil:", !(5 > 4));
//=========================================================

    // Function constructor
// function Car(brand, color, maxSpeed) {
//     // Property
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this._chassisNumber = this._generateChassisNumber();
// }
//
// // Method (Harus menggunakan regular function)
// Car.prototype.drive = function () {
//     console.log(`${this.brand} is driving.`);
// };
//
// Car.prototype.reverse = function () {
//     console.log(`${this.brand} is reversing.`);
// };
//
// Car.prototype.turn = function (direction) {
//     console.log(`${this.brand} is turn ${direction}.`);
// };
//
// Car.prototype._generateChassisNumber = function () {
//     return `${this.brand.slice(0,2)}-${Math.floor(Math.random() * 500) + 1}`;
// }
//
// // Mebuat objek mobil menggunakan function consturctor Car
// const mobil1 = new Car("Tesla","Gray", 350);
// const mobil2 = new Car("BMW","White",400);
// const mobil3 = new Car("Ford","Red",450);
//
// console.log(mobil1);
// console.log(mobil2);
// console.log(mobil3);
//
// mobil1.drive();
// mobil2.drive();
// mobil3.drive();
//
// mobil1._chassisNumber = "123";
// console.log(mobil1);
// console.log(mobil1._generateChassisNumber());

// Getter dan Setter
class NewCar  {
    constructor(brand, color, maxSpeed, chassisNumber) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.#chassisNumber = chassisNumber;
    }

    // Getter
    get chassisNumber() {
        return this.#chassisNumber;
    }

    // Setter
    set chassisNumber(chassisNumber) {
        console.log(`Anda tidak bisa mengubah ini!.`);
    }
}

const newMobil = new NewCar("BMW","Black",400, "B-11");
console.log(newMobil);

newMobil._chassisNumber = "123";
console.log(newMobil);