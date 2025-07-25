//using object literal

//Defining objects
//the variables on the left on an object are called keys, on the right are called values
let person = {
    firstname: "Charlotte",
    last_name: "Nkuna",

//creating a method: fetches the values name, last name
getCredentials: function() {
    return(`These are the credentials of the person: ${person.firstname}, ${person.last_name}`)
 },
 //creating object inside object
 contacts:{
    cell:"0633507617",
    email:"cnkuna920@gmail.com"
 } 
}
//console.log("the person object contains", person.firstname, person.last_name) // without method
//console.log(`The person object cocnsist of:  ${person.firstname}, ${person.last_name}`) //using backticks

//console.log(person.getCredentials()) //with method
console.log(person.getCredentials(), person.contacts.cell) // with object indide object


