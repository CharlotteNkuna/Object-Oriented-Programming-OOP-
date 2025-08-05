//defining the class

//templete
export class vehicle{
    constructor (make, model, engine, color) {
        this.make = make;
        this.model = model;
        this.engine = engine;
        this.color = color
    }
    //method
    getDetails() {
        return(`The name of this vehicle is: ${this.make}, ${this.engine}, ${this.model}`)
    }

    //car method
    getCar() {
        return(`The name of this vehicle is: ${this.make}, ${this.engine}, ${this.model}, ${this.color}`)
    }

} // end of the class object

export class vehicle{
    constructor(make)  {
        this.make = make;
    }

    toString() {
        return `vehicle make: ~${this.make}`
    }
}




