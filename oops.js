// object literals

const user = {
  //for the current context use => {this} keyword
  username: "Neha",
  signedIn: true,
  getUser: function () {
    console.log("11111", this.username);
    console.log(this);
  },
};

console.log("22222", user.username);
user.getUser();
// console.log("333333", user.getUser());
console.log(this);

// context of this keyword

// function users(naam, logIN, count) {
//   // return;
//   this.naams = naam;
//   this.logINs = logIN;
//   this.counts = count;
//   this.greeting = () => {
//     console.log(`welcome ${this.naam}`);
//   };

//   // return this;
// }
// const one = new users("neha", 344, true);
// const two = new users("chai", 11, true);

// console.log(two);
// console.log(one);

// class User {
//   constructor(naam, logIN, count, greeting) {
//     this.naams = naam;
//     this.logINs = logIN;
//     this.counts = count;
//     this.greeting = function () {
//       console.log(`Welcome ${this.naams}!`);
//     };
//   }
// }

function User(naam, logIN, count) {
  this.naams = naam;
  this.logINs = logIN;
  this.counts = count;
  this.greeting = function () {
    console.log(`Welcome ${this.naams}!`);
  };
  return this;
}

const one = new User("neha", 344, true);
const two = new User("chai", 11, true);

console.log(one.constructor); // khud hi ke bare me reference hai yeh
console.log(two);

const other = {
  nam: "jhfe",
  lig: "kdjf",
  greet: function () {
    console.log("Hey how are you");
  },
};
console.log(other.greet.toString());

// instance of

// prototype in js :

// function mul(num) {
//   return num * 5;
// }
// mul.power = 2;
// console.log(mul(5) * mul.power);
// console.log(mul.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}
// we can create the prototype as by the increment of it
createUser.prototype.increment = function () {
  this.score++;
  console.log();
};
createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};
const chai = new createUser("nehaa", 54);
const tea = createUser("tea", 89);

chai.printMe(); // this is not run without the new keyword it shows why new is necessary
chai.increment();
// chai.printMe;
// printMe

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
