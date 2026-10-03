const person = { name: "Alexandrian", age: 20 };
const { name, age } = person;
console.log(name, age); // "Alexandrian 20"
 
const hobbies = ["reading", "drawing", "coding"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); // "reading drawing"

// Function parameter destructuring
function printName({ name }) {
  console.log(name);
}

printName(person); // "Alexandrian"