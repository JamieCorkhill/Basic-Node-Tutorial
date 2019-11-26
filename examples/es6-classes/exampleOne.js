class Person {
    constructor(name) {
       this.name = name;
    }
    greeting() {
       console.log(`Hi. My name is ${this.name}.`);
    }
}
 
const person = new Person('John');
person.greeting(); // Hi. My name is John.

class Car {
    constructor(licensePlateNumber) {
       this.licensePlateNumber = licensePlateNumber;
    }
    start() {}
    stop() {}
    getLicensePlate() {
       return this.licensePlateNumber;
    }
    // …
}
 
class SportsCar extends Car {
    constructor(engineRevCount, licensePlateNumber) {
       super(licensePlateNumber); // Pass licensePlateNumber up to the parent class.
       this.engineRevCount = engineRevCount;
    }
    start() {
       super.start();
    }
    stop() {
       super.stop();
    }
    getLicensePlate() {
       return super.getLicensePlate();
    }
    getEngineRevCount() {
       return this.engineRevCount;
    }
 }