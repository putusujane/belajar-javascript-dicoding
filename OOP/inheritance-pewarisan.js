// class WhatsAppService {
//     constructor(sender) {
//         this.sender = sender;
//     }
//
//     // Method
//     sendMessage(message, receiver) {
//         console.log(`${this.sender} sent ${message} to ${receiver}.`);
//     };
//
//     sendBroadcastMessage(message, receivers) {
//         for (const receiver of receivers) {
//             this.sendMessage(message, receiver);
//         }
//     }
// }
//
// class EmailService {
//     constructor(sender) {
//         this.sender = sender;
//     }
//
//     sendMessage(message, receiver) {
//         console.log(`${this.sender} sent ${message} to ${receiver}.`);
//     };
//
//     sendDelayedMessage(message, receiver, delay) {
//         setTimeout(() => {
//             this.sendMessage(message, receiver);
//         }, delay);
//     };
// }
//
// const waMessage = new WhatsAppService("blogibagi@gmail.com");
// console.log(waMessage);
//
// waMessage.sendBroadcastMessage("Selamat pagi!", "tame@gmail.com");
//
// const email = new EmailService("putu@gmail.com");
// console.log(email);
//
// email.sendDelayedMessage("hay","tame@gmail.com",2000);
//
// email.sendMessage("Selamat datang","rangga@gmail.com")


//======== Membuat satu class saja
// class MailService {
//     constructor(sender) {
//         this.sender = sender;
//     }
//
//     // Method
//     sendMessage(message, receiver) {
//         console.log(`${this.sender} sent ${message} to ${receiver}`);
//     };
//
//     sendDelayedMessage(message, receiver, delay) {
//         setTimeout(() => {
//             this.sendMessage(message, receiver);
//         }, delay);
//     };
//
//     sendBroadcastMessage(message, receivers) {
//         for (const receiver of receivers) {
//             this.sendMessage(message, receiver);
//         }
//     }
// }
//
// const whatsApp = new MailService("putu@gmail.com");
// console.log(whatsApp);
//
// const mail = new MailService("tame@gmail.com");
// console.log(mail);
//
// whatsApp.sendDelayedMessage("Halo","tame@gmail.com",2000);
// mail.sendBroadcastMessage("Haiii","rangga@gmail.com");

//============= Cara benar menggunakan PEWARISAN/INHERITANCE ===========
    // Membuat Superclass (father class)
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    // Method
    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

    // Subclass (sibling class)
class WhatsAppService extends MailService {
    // Method
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message,receiver);
        }
    }
}

    // Subclass (sibling class)
class EmailService extends MailService {
    // Method
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}

const whatsApp = new WhatsAppService("082281716296");
console.log(whatsApp);

const email = new EmailService("putu@gmail.com");
console.log(email);

whatsApp.sendMessage("haii","999");
whatsApp.sendBroadcastMessage("pesan broadcast",["888","999"]);

// whatsApp.sendDelayedMessage(); error

email.sendMessage("ini dari email", "rd@gmail.com");
// email.sendDelayedMessage("lorem","rd@gmail.com",2000);
// email.sendBroadcastMessage();        //error

console.log("==================================================");

//=========OPERATOR instanceof =============
console.log(whatsApp instanceof WhatsAppService);
console.log(whatsApp instanceof MailService);
console.log(whatsApp instanceof EmailService);

console.log(email instanceof MailService);
console.log(email instanceof WhatsAppService);
console.log(email instanceof EmailService);