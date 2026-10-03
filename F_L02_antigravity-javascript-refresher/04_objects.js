const aboutMe = {
  name: "Alex",
  age: 20,
  course: "BSIS",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old. My favorite hobby is ${this.hobby}.`);
  }
};
 
aboutMe.hobby = "reading books";
aboutMe.name = "Kate";

aboutMe.introduce();
// console.log(aboutMe.hobby);