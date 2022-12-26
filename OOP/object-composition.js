// Object Composition
// ========================================================
    // Contoh struktur pewarisan class.
    // Cara ini tidak disarankan

// Parent class (Superclass)
class Developer {
    constructor(name) {
        // Property
        this.name = name;
    }

    // Method
    commitChanges() {
        console.log(`${this.name} is committing changes.`);
    };
}

// Sibling class (Subclass)
class FrontEndDev extends Developer {

    // Method
    buildUI() {
        console.log(`${this.name} is building UI.`);
    };
}

// Sibling class (Subclass)
class BackEndDev extends Developer {

    // Method
    buildAPI() {
        console.log(`${this.name} is building API.`);
    };
}

// Sibling class (Subclass)
class DevOps extends Developer {

    // Method
    deployApp() {
        console.log(`${this.name} is deploying App`);
    };
}

// Sibling class (Subclass)
class FullStackDev extends Developer {

    // Method
    buildUI() {
        console.log(`${this.name} is building UI.`);
    };
    buildAPI() {
        console.log(`${this.name} is building API.`);
    };
    deployApp() {
        console.log(`${this.name} is deploying App.`);
    };
}
// ========================================================

    //========== Menggunakan metode Object Composition =====
    // Gunakan metode seperti ini.
class Dev {
    // Method internal
    constructor(name) {
        // Property
        this.name = name;
    }

    // Method yang bisa dilakukan semua developer
    commitChanges() {
        console.log(`${this.name} is committing changes.`);
    };
}

// Function regular yang bisa dilakukan masing2 provesi developer
function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI.`);
        }
    };
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API.`);
        }
    };
}

function canDeployApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is deploying App.`);
        }
    };
}

// Fungsi Object Creator, untuk mengomposisikan kemapuan developer yg dibutuhkan
// Mengomposisikan object menggunakan method Object.assign();
function createFrontEndDev(name) {
    const developer = new Dev(name);
    return Object.assign(developer, canBuildUI(developer));
}

const frontEnd = createFrontEndDev("Putu");
frontEnd.commitChanges();
frontEnd.buildUI();
console.log(`is ${frontEnd.name} developer? ${frontEnd instanceof Dev}`);
//----------------------------

function createBackEndDev(name) {
    const developer = new Dev(name);
    return Object.assign(developer, canBuildAPI(developer));
}

const backEnd = createBackEndDev("Tame");
backEnd.commitChanges();
backEnd.buildAPI();
console.log(`is ${backEnd.name} developer? ${backEnd instanceof Dev}`);
// ----------------------------

const createDevOps = (name) => {
    const developer = new Dev(name);
    return Object.assign(developer, canDeployApp(developer));
}

const devOps = createDevOps("Rangga");
devOps.commitChanges();
devOps.deployApp();
console.log(`is ${devOps.name} developer? ${devOps instanceof Dev}`);
// ----------------------------

const createFullStackDev = (name) => {
    const developer = new Dev(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

const fullStack = createFullStackDev("Dodi");
fullStack.commitChanges();
fullStack.buildUI();
fullStack.buildAPI();
fullStack.deployApp();
console.log(`is ${fullStack.name} developer? ${fullStack instanceof Dev}`);
console.log(fullStack);