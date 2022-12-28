class User {
    constructor(fName, lName, age, status)
    {
        // Property
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.status = status ? "Menikah" : "Lajang";
    }

    // Method
    say()
    {
        console.log(`${this.fName} ${this.lName} is say Hi!.`);
    }
}

class Car extends User {
    constructor(brand, color, chassisNumber) {
        super();
        // Property
        this.brand = brand;
        this.color = color;
        this._chassisNumber = chassisNumber;
    }

    // Getter and Setter
    get chassisNumber() {
        return this._chassisNumber;
    }

    set chassisNumber(chassisNumber) {
        console.log(`Cannot change this!`);
    }
}

module.exports = Car;