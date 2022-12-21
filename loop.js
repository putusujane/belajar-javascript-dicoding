// Looping

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For of (for..of)
const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (const arrItem of fruits) {
    console.log(arrItem);
}

// While loop
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

// do while loop
let j = 0;

do {
    console.log(j);
    j++;
} while (j < 5);

// Infinite Loops
// while (1 < 5) {
//     console.log("This is infinite loop");
// }

// for (let k = 0; k < 5; k=0) {
//     console.log(k);
// }

let score = 80;
let result = null;

if (score >= 90) {
    result = "Selamat! Anda mendapatkan nilai A.";

} else if (score >= 80 && score <= 89) {
    result = "Anda mendapatkan nilai B.";

} else if (score >= 70 && score <= 79) {
    result = "Anda mendapatkan nilai C.";

} else if (score >= 60 && score <= 69) {
    result = "Anda mendapatkan nilai D.";

} else if (score < 60) {
    result = "Anda mendapatkan nilai E.";
}