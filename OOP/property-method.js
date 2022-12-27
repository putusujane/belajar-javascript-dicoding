// Property and Method
    // Menetapkan nilai properti sendiri didalam fungsi constructor
class Car {
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        // Mengatur nilai acak pada chassisNumber.
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }

    // Method
    drive() {
        console.log(`Mobil ${this.brand} berjalan.`);
    };

    reverse() {
        console.log(`${this.brand} mundur.`);
    };

    turn() {
        console.log(`${this.brand} berbelok.`);
    };
}

// Membuat object mobil menggunakan costructor class Car
const mobil1 = new Car("Tesla","Gray",400);
console.log(mobil1);

mobil1.drive();
mobil1.reverse();
mobil1.turn();

//======== Properti Getter dan Setter =============
    // Hati-hati properti didalam instance class dapat berubah (mutable)
class Car1 {
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 100) + 1}`;
    };

    drive() {
        console.log(`Mobil ${this.brand} maju kedepan.`);
    };

    reverse() {
        console.log(`Mobil ${this.brand} mundur kebelakang.`);
    };

    turn() {
        console.log(`Mobil ${this.brand} berbelok ke kiri.`);
    };
}

// Membuat objek mobil menggunakan constructor class Car1
const mobilA = new Car1("Toyota","Brown",400);
console.log(mobilA);

mobilA.turn();

// Properti chassisNumber berubah
const mobilB = new Car1("Tesla","Blue",350);
mobilB.chassisNumber = "TL-1";
console.log(mobilB);

    // Menggunakan getter dan setter agar properti tidak dapat diubah.
    // Data property = properti biasa yang kita lihat (menampung nilai didalam suatu objek)
    // Accessor property = properti yg dikontrol oleh sebuah getter dan setter.
    // nilai dikontrol oleh "get" dan di atur/tetapkan oleh "set".
class Person {
    constructor(fName, lName, age, eyeColor, status) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.eyeColor = eyeColor;
        this.status = (status ? "Menikah": "Belum menikah");
    }

    get fullName() {
        return `${this.fName} ${this.lName}`;
    }

    set fullName(fullName) {
        const [fName, lName] = fullName.split(' ');
        this.fName = fName;
        this.lName = lName;
    };
}

// Membuat objek user menggunakan constructor class Person
const user = new Person("Putu","Sujane",27,"Black",true);
console.log(user);
console.log(user.fullName);

// Mencoba mengganti fullName
user.fullName = "Tame Jaya";
console.log(user);
console.log(user.fullName);

// Contoh penggunakan getter dan setter pada properti chassisNumber
class Mobil {
    constructor (brand, color) {
        // Properti
        this.brand = brand;
        this.color = color;
        this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    };

    // Method
    drive() {
        console.log(`${this.brand} maju perlahan.`);
    };

    // Getter
    get chassisNumber() {
        return this._chassisNumber;
    };

    // Setter
    set chassisNumber(chassisNumber) {
        console.log("You are not allowed to change the chassis number!");
    };
}

// Membuat objek mobil menggunakan constructor clas Mobil
const mobilX = new Mobil("Tesla","Gray");
const mobil2 = new Mobil("BMW","Brown");

console.log(mobilX);
console.log(mobil2);

// Instance class
mobilX.drive();
mobil2.drive();

// Nilai properti tidak bisa diubah.
mobilX.chassisNumber = "TS-01";
console.log(mobilX.chassisNumber);

//=============== METHOD ===================
/*
    Method bisa berisi argumen.
    Method juga memiliki akses ke nilai properti atau method lainnya menggunakan
    keyword "this" .
 */

// Method dengan argumen dan private method
class Orang {
    constructor(nama, umur, status) {
        // Property
        this.nama = nama;
        this.umur = umur;
        this.status = (status ? "Menikah" : "Belum menikah");
        this._angkaUnik = this._generateAngkaUnik();
    }
    get angkaUnik() {
        return this._angkaUnik;
    };
    set angkaUnik(angkaUnik) {
        console.log("Anda tidak bisa merubah angka unik ini!.");
    };

    // Method
    talk(bahasa) {
        console.log(`${this.nama} berbicara menggunakan bahasa ${bahasa}.`);
    };

    _generateAngkaUnik() {
        return `${this.nama.slice(0,2)}-${Math.floor(Math.random()* 1000) + 1}`;
    };
}

// Membuat objek person menggunakan constructor class Orang
const person1 = new Orang("Putu",27,false);
console.log(person1);

person1.talk("Inggris");

person1.angkaUnik = "LR-11"
console.log(person1.angkaUnik);

//=========MEMBER VISIBILITY===========
class Member {
    #unikCode = null        // Enclosing class (Properti private)
    constructor(name, age, address) {
        // Property
        this.name = name;
        this.age = age;
        this.address = address;
        this.#unikCode = this.#generateUnikCode;
    }

    // Getter and Setter
    get unikCode() {
        return this.#unikCode;
    };

    set unikCode(unikCode) {
        console.log("Anda tidak bisa merubah ini!.");
    };

    // Method
    speak(bahasa) {
        console.log(`${this.name} berbicara berbahasa ${bahasa}.`);
    };

    #generateUnikCode() {
        return `${this.name.slice(0,2)}-${Math.floor(Math.random() * 1000) + 1}`;
    };
}

// Membuat objek anggota menggunakan class constructor Member
const anggota1 = new Member("Rangga",4,"Tubaba");
console.log(anggota1);

// Memanggil method
anggota1.speak("Indonesia");

// anggota1.#generateUnikCode();        //error
// console.log(anggota1.#unikCode);     // error