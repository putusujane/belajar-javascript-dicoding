// Function dengan parameter
function myFunc1(param1, param2) {      // param adalah parameter.
    return param1 * param2;
}

console.log(myFunc1(5, 5));     // 5 adalah argumen / expression.
// Parameter dari function dapat berupa tipe data apapun.

    // Destructuring objek menggunakan function parameter
const person1 = {
    fName: "Putu",
    fullName: `Putu Sujane`,
    age: 27,
};

function greeting({fName, fullName}) {
    console.log(`Nama lengkap ${fName} adalah ${fullName}.`);
}

greeting(person1);

    // Destructuring Array menggunakan function
const fruits = ["Apple", "Mango", "Orange"];

function funcFru([firstFru, secoFru, thFru]) {
    console.log(firstFru, secoFru, thFru);
}

funcFru(fruits);


    // Default parameter
function exponentsFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber} ** ${exponent} = ${result}`);
}

exponentsFormula(4);


    // Rest Parameter pada function
let sum = (...numbers) => {
    let result = 0;

    for (let number of numbers) {
        result += number;
    }

    return result;
}

console.log(sum(1, 2, 3, 4, 5));        // 15
