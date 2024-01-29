"use strict";
var naam = "weew22";
console.log(typeof naam);
let score = Boolean(naam);
console.table([typeof score, score]);
let val = 2;
console.log("2" > 1);
console.log(+true);
console.log(+"");

// array :
const arr = ["Neha", "Wadhwa"];
const fun = function () {
  console.log("Hello World");
};
const obj = {
  name: " Neha",
  class: "Job",
};
console.table([obj, fun()]);

let no = 78;
let nos = no;
nos = 90;

let user = {
  mail: "neha@gmail.com",
  id: 88,
};
let users = user;
users.mail = "mohit@gmail.com";
console.table([user, no, nos, users]);

// String
let animal = new String(" lion");

console.log(animal[3]);
console.log(`hello ${animal} is coming protect yourself `);
console.table([
  `${animal.length}`,
  `${animal.charAt(1)}`,
  animal.indexOf("i"),
  animal.substring(0, 2),
  animal.slice(-4, 2),
  animal.trim(),
  animal.replace("l", "h"),
  animal.includes("k"),
  animal,
  animal.split("i"),
]);
