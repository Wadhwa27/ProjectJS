const naam = "Neha  ";
console.log(naam.trueLength); // want to make this type of method
console.log(naam.trim().length);

let myheroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.thor}`);
  },
};
// to create my prototype as in js all things will going under the main object :

Object.prototype.neha = function () {
  console.log("Neha is making our own protoype");
};
// as below are arrays and
heroPower.neha();
myheroes.neha();

Array.prototype.nehaWork = function () {
  console.log("Making prototype in the array ");
};
// heroPower.nehaWork();
myheroes.nehaWork();

// inheritance

const user = {
  naam: "Mohit",
  email: "mohit@google.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailaible: false,
};

const TASuppoert = {
  makeAssign: "JS",
  fullime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = user;

// Modern syntax:

Object.setPrototypeOf(TeachingSupport, Teacher);
let another = "nehaWadhwa    ";
String.prototype.trueLength = function () {
  console.log(`${this}`);

  console.log(`True Length is: ${this.trim().length}`);
};
another.trueLength();
"nrha".trueLength(); // tjis is string so it is accessible for all
"mohit".trueLength();

// class User {
//   constructor(username, email, password) {
//     (this.username = username),
//       (this.email = email),
//       (this.password = password);
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }
// const chai = new User("neha", "hdfh@gmial.com", "1234");
// console.log(chai.encryptPassword());
// console.log(chai.changeName());

// behind the scene:

function User(username, email, password) {
  (this.username = username), (this.email = email), (this.password = password);
}
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeName = function () {
  return `${this.username.toUpperCase()}`;
};
const chai = new User("neha", "hdfh@gmial.com", "1234");
console.log(chai.encryptPassword());
console.log(chai.changeName());
