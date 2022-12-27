// ===== FUNCTIONAL PROGRAMMING =====

    // ====== Pengenalan

//--- Gaya penulisan imperatif
const names = ["Harry", "Ron", "Jeff", "Thomas"];
const newNames = [];

for (let i = 0; i < names.length; i++) {
    newNames.push(`${names[i]}!`);
}

console.log(newNames);

//--- Gaya penulisan Deklaratif
const user = ["Harry", "Ron", "Jeff", "Thomas"];
const newUser = user.map((name) => `${name}!`);

console.log(newUser);

/*
    Ada 4 konsep dasar functional programming (FP), yaitu:
    1.  Pure Function
    2. Immutability
    3. Recursive
    4. High-Order Function
 */

// Contoh impure function
// Jangan menggunakan contoh seperti ini!
let PI = 3.14;
const hitungLuasLingkaran = (jariJari) => {
    return PI * (jariJari * jariJari);
}

console.log(`Hasil: ${hitungLuasLingkaran(4)}`);

PI = 5;
console.log(`Hasil: ${hitungLuasLingkaran(4)}`);
//===========================================================

// Contoh Pure Function
const hLuasL = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
}

console.log(hLuasL(4));
console.log(hLuasL(5));
console.log(hLuasL(3));

// Contoh Pure Function dengan destructuring object
const createPersonAge = (person, age) => {
    return {...person, age};
};

const person = {
    name: "Putu"
};

const newPerson = createPersonAge(person, 27);

console.log({person, newPerson});

console.log(person.name);
console.log(newPerson.age);
// console.log(person.age);     // Menghasilkan undefined.


//==== Immutability =====
// Contoh konsep immutability diterapkan pada penggunakan array map.
const namesX = ["John", "Tame", "Rangga", "Dodi"];
const newNamesX = namesX.map((name) => `${name}!`);

console.log({namesX, newNamesX});


// Contoh penerapan FP pada mengubah nilai object secara langsung.
    // object literal
const userX = {
    fName: "Rangga",
    lName: "Dityaa",    // nama kelebihan huruf a.
};

const createNewUserWithNewLname = (newLname, user) => {
    return {...user, lName: newLname};
}

const newUserX = createNewUserWithNewLname("ditya",userX);
console.log(newUserX);


// ====Recursive==== = merupakan function yang memanggil dirinya sendiri.
    // CONTOH function countDown versi lama menggunakan syntax iterasi.
const countDown = (start) => {
    do {
        console.log(start);
        start -= 1;
    } while (start > 0)
}

countDown(5);

console.log("============================")
    // Contoh bentuk recursive
const countDownRecursive = (start) => {
    console.log(start);
    if (start > 1) countDownRecursive(start - 1);
};

countDownRecursive(5);


//=======Higher-Order Function=======
// Disebut juga function bisa disimpan dalam variabel, memberikan function sebagai
// parameter pada function lainnya. Hingga mengembalikan function didalam function.

    // Contoh
// Menyimpan fungsi didalam variabel.
const hello = () => console.log("Hello dari func hello()");
hello();

const say = (someFunction) => someFunction();
say(hello);

const sayHello = () => {
    return () => {
        console.log("Hello dari function sayHello() mengembalikan arrow function.");
    };
}

sayHello()();


// Membuat fungsi map() versi sendiri.
const namesY = ["John", "Ron", "Jeff", "Thomas"];

const arrayMap = (arr, action) => {
    const loopThrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];

        if (!item) return newArray;

        return loopThrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }

    return loopThrough(arr, action);
}

const newNamesY = arrayMap(namesY, (name) => `${name}!`);

console.log({namesY, newNamesY});