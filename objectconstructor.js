function person(firstname,last_name){
    this.firstname = firstname;
    this.last_name = last_name
}
//assign names on the constructor 
let person1 = new person("Charlotte", "Nkuna");
let person2 = new person("Xolelwa", "Cekiso")
console.log("lets try to print the firdt person constructor", person1.firstname, person1.last_name)


// Object.create() example a
// simple object with some properties
const coder = {
    isStudying: false,
    printIntroduction: function () {
    console.log(`My name is ${this.name}. Am Istudying?: ${this.isStudying}.`)
     }
    }

    // Object.create() method
    const me = Object.create(coder);
    // "name" is a property set on "me"
    me.name = 'Mukul';
    
    // Inherited properties can be overwritten
me.isStudying = true;
me.printIntroduction();