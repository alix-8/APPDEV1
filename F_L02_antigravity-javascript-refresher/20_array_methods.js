const students = [
  { name: "Lychee", grade: 88 },
  { name: "Diana", grade: 95 },
  { name: "Ydrey", grade: 42 },
];
 
const passing = students.filter(s => s.grade >= 60);
console.log(passing.map(s => s.name)); // ["Lychee", "Diana"]
 
const diana = students.find(s => s.name === "Diana");
console.log(diana); // { name: "Diana", grade: 95 }
 
console.log(students.some(s => s.grade < 60)); // true
console.log(students.every(s => s.grade >= 60)); // false
 
const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(s => s.name)); // ["Diana", "Lychee", "Ydrey"]