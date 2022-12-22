// Destructuring Object & Array =========================
    // Sebelum ES6 dilakukan dengan cara berikut pada Object
const person1 =  {fName: "Putu", lName: "Sujane", age: 27, "eye Color": "Black",};

const firstName = person1.fName;
const lastName = person1.lName;
const age = person1.age;
const eyeColor = person1["eye Color"];

console.log(firstName, lastName, age, eyeColor);

    // Destructuring Objek pada ES6 menggunakan object literal {} sisi kiri operator =
const user1 = {name: "Rangga", umur: 4, hairColor: "Black", isMale: true,};

// const { name, umur, hairColor, isMale } = user1;
// console.log(name, umur, hairColor, isMale);

    // Bisa memilih salah satu nilai properti object
const {isMale} = user1;
console.log(isMale)

    // Jika ada variabel yang sudah dideklarasikan gunakan tambahan tanda kurung ()
let name = "Tame";
let umur = 23;

    // Inisialisasi nilai baru melalui destructuring object
({name, umur} = user1);     // expression
console.log(name);
console.log(umur);

//======== Default Values ===========
    // Jika properti tidak ada didalam object, maka hasil undefined
const fruitsArr1 = {fruit1: "Apple", fruit2: "Banana", fruit3: "Cherry",};

const {fruit1, fruit2, fruit3, fruit4} = fruitsArr1;
console.log(fruit1, fruit2, fruit3, fruit4);    // fruit4 akan undefined karena tidak ada.

    // Menambah nilai default
const {fruit5 = "Mango"}  = fruitsArr1;
console.log(fruit5);

//==== Mengasignmentkan ke nama variabel local berbeda
const {fruit1: buah1, fruit2: buah2, fruit3: buah3,} = fruitsArr1;
console.log(buah1, buah2, buah3);