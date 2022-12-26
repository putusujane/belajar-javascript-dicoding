// Overriding
    // Contoh Constructor pada class superclass (father)
// class LayananMail {
//     constructor(sender) {
//         this.sender = sender;
//     }
//
//     // Method
//     sendMessage(message, receiver) {
//         console.log(`${this.sender} sent ${message} to ${receiver}`);
//     };
//
//     sendDelayedMesssage(message, receiver, delay) {
//         setTimeout(() => {
//             this.sendMessage(message, receiver);
//         }, delay);
//     };
// }
//
// // Membuat objek mail dari constructor class LayananMail
// const mail = new LayananMail("putu@gmail.com");
// console.log(mail);
//
// mail.sendMessage("Apa kabar?","rd@gmail.com");
// mail.sendDelayedMesssage("pesan delay","tame@gmail.com",2000);

    //===== Contoh menggunakan overriding pada subclass (sibling class)
    // untuk mengindikasikan akun bisnis atau bukan.

// Overriding constructor
// ==== Superclass ====
class LayananMail {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    };
}

// ==== Subclass ====
class WhatsAppService extends LayananMail {
    // Overriding constructor
    constructor(sender, isBusiness) {
        super(sender);

        this.isBusiness = isBusiness;
    }

    // Method
    sendBroadcastMsg(message, receiver) {
        for (const receive of receiver) {
            this.sendMessage(message, receive);
        }
    };
}

const email = new LayananMail("putu");
console.log(email);
email.sendMessage("Halo","t@gmail.com");

const whatsApp = new WhatsAppService("tame",true);
console.log(whatsApp);
whatsApp.sendMessage("abc","822");
whatsApp.sendBroadcastMsg("yooo",["088", "777", "222"]);
//========================================================

console.log("=================================\n");

// Overriding method
class Car {
    constructor(brand) {
        this.brand = brand;
    }

    drive(speed) {
        console.log(`${this.brand} melaju ${speed}.`);
    };
}

class Motor extends Car{
    constructor(brand, type) {
        super(brand);
        this.type = type;
    }

    // Overriding method
    drive(speed) {
        super.drive(speed);     // Bila perlu kita panggil menggunakan keyword super.
        console.log(`${this.brand} melaju ${speed}. bertipe ${this.type}`);
    };
}

const mobil = new Car("Tesla");
console.log(mobil);
mobil.drive("cepat");

const motor = new Motor("Honda","Matic");
console.log(motor);
motor.drive("lambat");