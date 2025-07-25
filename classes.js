//defining the class
export class vehicle{
    constructor (make, model, engine) {
        this.make = make;
        this.model = model;
        this.engine = engine;
    }
    //method
    getDetails() {
        return(`The name of this vehicle is: ${this.make}, ${this.engine}, ${this.model}`)
    }
} // end of the class object


