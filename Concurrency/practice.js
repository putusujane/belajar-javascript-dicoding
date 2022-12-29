// Callback function

    // Membuat function makeCoffee
const makeCoffee = callback => {
    let coffee = null;

    console.log("Kopi sedang dibuat...");
    setTimeout(() => {
        coffee = "Kopi sudah dibuat!";
        callback(coffee);
    }, 3000);
}

    // Menampilkan ke console
makeCoffee(coffee => console.log(coffee));