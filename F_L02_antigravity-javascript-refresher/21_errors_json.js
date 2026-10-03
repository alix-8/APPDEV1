// Error handling with try-catch
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Something went wrong:", error.message);
}

// JSON serialization and deserialization
const user = { name: "Alice", age: 21, isStudent: true };
 
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Alice","age":21,...}'
 
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // "Alice"
console.log(typeof jsonString, typeof parsedUser); // string object
