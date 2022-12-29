// Callback Function
//---------------------------------------------------

    // Kita tidak bisa mendapatkan nilai variabel coffe didalam function setTimeOut()
const orderCoffee = () => {
    let coffee = null;

    console.log("Sedang membuat coffee, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
    }, 3000);

    return coffee;
}

// console.log(orderCoffee());     // sedang... null

    // Solusinya menggunakan callback function
const orderCoffee1 = (callback) => {
    let coffee1 = null;
    console.log("Sedang membuat kopi, silakan tunggu...");

    setTimeout(() => {
        coffee1 = "Kopi sudah jadi!";
        callback(coffee1);

        console.log("Terimakasih.");
    }, 3000);
}

orderCoffee1(coffee1 => {
    console.log(coffee1);
});