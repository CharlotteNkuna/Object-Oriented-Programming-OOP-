//inheritance method: adding a new method

//import { vehicle } from "./classes.js";

class vehicle{
    constructor(make)  {
        this.make = make;
    }

    toString() {
        return `vehicle make: ~${this.make}`
    }
}


class cars extends vehicle{
    constructor (make, model, engine, color) {
        super(make)
        this.model = model;
        this.engine = engine;
        this.color = color
    }
    toString(){
        return(`${super.toString()}, ${this.color}, ${this.model}`)

    }
}


let car1 = new vehicle("BMW", "3 Series", "2.0-liter TwinPower Turbo inline 4-cylinder petrol engine", "red"); 
let car2 = new vehicle("Mercedes benz", "AMG", "M177/M178: A 4.0-liter V8", "white");

//console.log(car1.toString(), "\n", car2.toString())
console.log(car1.toString())
console.log(car2.toString())


