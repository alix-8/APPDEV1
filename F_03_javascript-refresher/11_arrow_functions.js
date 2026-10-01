// ORDINARY METHOD FUNCTIONS  =========================

const obj = {
  greet(name) {
    return "Hello, " + name;
  },

  square(n) {
    return n * n;
  },

  sayHi() {
    console.log("Hi!");
  }
};

// Testing the methods:
console.log(obj.greet("Alex")); // "Hello, Alex"
console.log(obj.square(5));     // 25
obj.sayHi();                    // "Hi!"



// ARROW FUNCTIONS  =========================
// Converted greet(name), square(n), and sayHi() into arrow functions

const greet = name => "Hello, " + name; // implicit return
const square = n => n * n;               // implicit return

// Testing the arrow functions:
console.log(greet("Alex")); // "Hello, Alex"
console.log(square(5));     // 25

// arrow function
const sayHi = () => {
  console.log("Hi!");
};

sayHi(); // "Hi!"