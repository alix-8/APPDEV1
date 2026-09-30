//Original array
let favoriteFoods = ["Fries", "dishes na luto ng mama ko", "Pizza"];

//add sa dulo
favoriteFoods.push("Ice Cream"); //  ["Fries", "kahit anong luto ng mama ko", "Pizza" "Ice Cream"];

//remove sa unahan
favoriteFoods.shift(); // ["kahit anong luto ng mama ko", "Pizza" "Ice Cream"];
 
for (const food of favoriteFoods) {
  console.log(food);
}
 
const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);
