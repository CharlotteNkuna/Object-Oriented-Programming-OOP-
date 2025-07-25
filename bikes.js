import { vehicle } from "./classes.js";

let bike1 = new vehicle("Kawasaki", "Hayabusa", "1340cc");
let bike2 = new vehicle("Ninja", "Kawasaki", "998cc");

console.log(bike1.getDetails(), "\n", bike2.getDetails())

