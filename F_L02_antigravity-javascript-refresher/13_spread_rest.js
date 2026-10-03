// Spread numbers into newNumbers with two extra values
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [ 1, 2, 3, 4, 5 ]

// Spread object properties into newUser with an additional property
const user = { name: "Alex", age: 28 };
const newUser = { ...user, email: "alex@example.com" };
console.log(newUser); // { name: 'Alex', age: 28, email: 'alex@example.com' }

// Spread fuction
function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
