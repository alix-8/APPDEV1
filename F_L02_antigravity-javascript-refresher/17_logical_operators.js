// Truthy & Falsy

const values = [0, "", "hello", null, undefined, [], {}];
 
values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});

// // &&
const username = "alice";
const password = "secret123";
 
const canLogIn = username !== "" && password !== "";
console.log(canLogIn); // true

// // ||
const isAdmin = false;
const isSubscriber = true;
const canWatch = isAdmin || isSubscriber;
console.log(canWatch); // true

// //!
console.log(!canLogIn);                // false

// -----------------------Combining logical operators --------------------
// || -> returns the first truthy value or the last value if all are falsy
console.log("" || "default");        // "default" (first truthy)

// && -> returns the first falsy value or the last value if all are truthy
console.log(username && "Welcome!");  // "Welcome!" (both truthy)