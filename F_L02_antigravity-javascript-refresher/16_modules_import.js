import greet from "./15_modules_export.js";
import { userInfo } from "./15_modules_export.js";
 
console.log(greet()); // Importing the default export (greet function)
console.log(`User: ${userInfo.name}, Age: ${userInfo.age}`); // Importing the named export (userInfo object)
