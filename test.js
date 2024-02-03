"use strict";
// var naam = "weew22";
// console.log(typeof naam);
// let score = Boolean(naam);
// console.table([typeof score, score]);
// let val = 2;
// console.log("2" > 1);
// console.log(+true);
// console.log(+"");

// // array :
// const arr = ["Neha", "Wadhwa"];
// const fun = function () {
//   console.log("Hello World");
// };
// const obj = {
//   name: " Neha",
//   class: "Job",
// };
// console.table([obj, fun()]);

// let no = 78;
// let nos = no;
// nos = 90;

// let user = {
//   mail: "neha@gmail.com",
//   id: 88,
// };
// let users = user;
// users.mail = "mohit@gmail.com";
// console.table([user, no, nos, users]);

// // String
// let animal = new String(" lion");

// console.log(animal[3]);
// console.log(`hello ${animal} is coming protect yourself `);
// console.table([
//   `${animal.length}`,
//   `${animal.charAt(1)}`,
//   animal.indexOf("i"),
//   animal.substring(0, 2),
//   animal.slice(-4, 2),
//   animal.trim(),
//   animal.replace("l", "h"),
//   animal.includes("k"),
//   animal,
//   animal.split("i"),
// ]);

// let num = 100000;
// console.log(num.toFixed(2));
// console.log(num.toPrecision(1));
// console.table([
//   num.toPrecision(1),
//   num.toFixed(1),
//   num.toLocaleString("en-In"),
// ]);

// console.table([
//   Math.abs(-4),
//   Math.round(4.2),
//   Math.ceil(4.9),
//   Math.floor(8.6),
//   Math.min(7, 6),
// ]);

// let nos = Math.floor(Math.random() * 10 + 1);
// let min = 20;
// let max = 40;
// console.log(nos);
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor(Math.random() * (max - min + 1) + min));

// let date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toJSON());
// console.log(date.toISOString());
// let Dat = new Date(2024, 1, 3, 3, 45);
// console.log(Dat.toDateString());
// let dat = new Date("2024-02-03");
// console.log(dat.toLocaleString());
// console.log(dat.toDateString());

// let time = Date.now();
// console.log(time);
// let dat = new Date();
// console.log(dat.getTime());
// console.log(dat.getDay());
// const ne = dat.toLocaleString("default", {
//   weekday: "long",
// });
// console.log(ne);

// const arr = new Array(1, 2, 3, 4);
// let arra = [1, 2, 3, 4];
// console.log("12 " + arra);
// const arrs = arra.slice(1, 3);
// console.log("13 " + arrs);

// const air = arra.splice(1, 3);
// console.log("14 " + air);

// let art = arr.join();
// console.log(art);
// console.log(typeof art);

// let arr = [1, 2, 3, 4];
// let arra = [5, 6, 7, 8];
// // arr.push(arra);
// console.log(arr);
// let and = arr.concat(arra);
// console.log(and);
// //Spread operator
// let ans = [...arr, ...arra];
// console.log(ans);
// let array = [1, 2, 3, 5, [5, 6, 7], 3, [88, 90]];
// console.log(array.flat(Infinity));
// let res = Array.from(566890);
// console.log(res);
// let name = "Neha";
// console.log(Array.isArray(name));
// let no1 = 45;
// let no2 = 67;
// let no3 = 89;
// console.log(Array.of(no1, no2, no3));

const sym = Symbol("Neha");
let list = {
  name: "Neha",
  email: "Neha@google.com",
  [sym]: "Wadhwa",
};

console.log(list[sym]);
// Object.freeze(list);
console.log(list);
list.name = "Wadhwas";
console.log(list);
// yha sym par sq bracket aata hai
