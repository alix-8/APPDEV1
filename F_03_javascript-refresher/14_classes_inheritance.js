class Person {
  constructor(name) { this.name = name; }
  sayHello() { console.log("Hi, I am " + this.name + ", a new student"); }
}

// inherits from Person
class Student extends Person {
  study() { console.log(this.name + " is studying."); }
}
 
const student = new Student("Alexandrian");
student.sayHello();
student.study();