//polymephosm : the vehicle is now a boat 
import { vehicle } from "./classes.js";

let boat1 = new vehicle("Bayliner ", "VR5 Cuddy ", "Mercury 4.5L 250hp sterndrive "); 
let boat2 = new vehicle("Boston Whaler", "270 Dauntless", "Twin Yamaha 250hp outboards");

console.log(boat1.getDetails(), "\n", boat2.getDetails())