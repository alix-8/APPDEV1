// STRINGS
//raw
const raw = "  Alice Rivera  ";


const clean = raw.trim(); //removes whitespace from both ends of the string
const [first, last] = clean.split(" "); // splits the string into an array of substrings based on the space character
console.log(first.toUpperCase()); // "ALICE"
console.log(clean.includes("Rivera")); // true
console.log(clean.slice(0, 5)); // "Alice"
console.log(`Full name: ${first} ${last}`);

// NUMBERS
console.log(parseInt("42px"));   // 42
console.log((19.9999).toFixed(2)); // "20.00"
 
const result = "abc" / 2;
console.log(result);          // NaN
console.log(Number.isNaN(result)); // true
