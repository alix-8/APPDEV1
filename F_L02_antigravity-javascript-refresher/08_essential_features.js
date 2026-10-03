// `map` function
const hobbies = ["reading", "drawing", "coding"];
hobbies.map(hobby => console.log(hobby));

// Object destructuring
const student = { name: "Alexandrian", age: 20 };
const { name, age } = student;
console.log(name, age);

// Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);