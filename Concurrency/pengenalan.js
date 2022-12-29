// Pengenalan Concurrency
//------------------------------------------------------------

    //------- Contoh Synchronous
    // Program ini dijalankan dari atas kebawah (Secara sinkron)
console.log("Halo, selamat datang!");
console.log("Ada yang bisa kami bantu?");
console.log("================================");

    //------- Contoh Asynchronous
    // Program ini dijalankan secara tidak berurutan (Asynchronous)
    // Menggunakan function setTimeOut()
console.log("Selamat datang!");
setTimeout(() => {
    console.log("Terimakasih sudah mampir, datang kembali ya :)");
}, 3000);
console.log("Ada yang bisa kami bantu?");