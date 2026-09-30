function greet(name) {
  return "Hello, " + name;
}
 
const square = (num) => {
  return num * num;
};
 
function calculator(a, b) {
  return { sum: a + b, product: a * b };
}

console.log(greet("Yelena"));
console.log(square(16));
console.log(calculator(3, 5));
