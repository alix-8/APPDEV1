// The Ternary Operator
const score = 72;
const result = score >= 70 ? "Pass" : "Fail";
console.log(result); // "Pass"
 
const num = 7;
console.log(num % 2 === 0 ? "even" : "odd"); // "odd"

// Optional Chaining (?.) and Nullish Coalescing (??)
const user = { name: "Alice" }; // no address property (usually magka-crash)
 
console.log(user.address?.city); // undefined, no crash


const age = 0;
console.log(age || 18); // 18 -- wrong! 0 is falsy, so || overrides it
console.log(age ?? 18); // 0  -- right, ?? only replaces null/undefined
