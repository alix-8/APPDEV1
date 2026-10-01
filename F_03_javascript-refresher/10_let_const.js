let name = "Alex";
const age = 20;
 
name = "Bob";        // OK (pwede palitan ng value ang let)
console.log(name)

// age = 30;         // Error: Assignment to constant variable (bawal na kasi palitan ng variable ang const)
console.log(age)
 
var city = "Sorsogon City"; // works, but avoid var (old way na kasi)
console.log(city)
