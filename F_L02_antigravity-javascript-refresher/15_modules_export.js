const userInfo = { name: "Aleexandrian", age: 21 };
 
function greet() {
  return "Hello from module!";
}

export default greet; // Exporting the greet function as the DEFAULT export
export { userInfo }; // Exporting the userInfo object as a NAMED export
