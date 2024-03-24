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

// const sym = Symbol("Neha");
// let list = {
//   name: "Neha",
//   email: "Neha@google.com",
//   [sym]: "Wadhwa",
// };
// let vlaue = "Neha Wadhwa";
// console.log(list[sym]);
// Object.freeze(list);
// console.log(list);
// list.name = "Wadhwas";
// console.log(list);
// yha sym par sq bracket aata hai

// list.greetings = function naam() {
//   console.log(`hey neha is here ${vlaue}`);
// };

// console.log(list.greetings);
// console.log(list.greetings());
// // console.log(list.greetings.naam());
// // console.log(list.naam());
// console.log(list.naam);

// let list1 = {
//   1: "a",
//   2: "b",
// };
// let list2 = {
//   list,
//   list1,
// };
// // console.log(list2);

// const list3 = { ...list, ...list1 };
// // console.log(list3);
// // console.log(Object.keys(list3));
// // console.log(Object.values(list2));
// const list4 = Object.assign({}, list, list1);
// const { name: n } = list;
// console.log(n);

// function twono(no1, no2) {
//   return no1 + no2;
// }
// const name = twono(4, 5);
// console.log(name);

//
// one(5);
// function one(num) {
//   console.log(num + 1);
// }

// const name = function two(num) {
//   console.log(num + 2);
// };

// const user = {
//   price: 999,
//   users: function one() {
//     console.log(this.price);
//     console.log(this);
//   },
// };
// console.log(user.users());
// console.log(this);

// let user = {
//   name: "Neha",
//   email: "nehawadhwa89@gmail",
//   greetings: function () {
//     console.log(`Hii ${this.name} is here`);
//     console.log(this);
//   },
// };

// user.greetings();
// user.name = "Shweta";
// user.greetings();

// function naam() {
//   let naam = "Neha";
//   console.log(this.naam);
// }
// naam();

// const greet = function () {
//   let naam = "Neha";
//   console.log(this.naam);
// };
// function greetw() {
//   let naam = "Neha";
//   console.log(this.naam);
// }
// const greets = () => {
//   let naam = "Neha";
//   console.log(this.naam);
// };
// greet();
// greets();
// greetw();

// const add = (no1, no2) => {
//   return no1 + no2;
// };
// console.log(add(5, 8));
// const add2 = (no1, no2) => no1 + no2;
// console.log(add2(6, 2));

// const addy = (nu1, nu2) => ({ user: "Neha" });
// console.log(addy(1, 3));

// (function chai() {
//   console.log("hello");
// })();
// ((nisha) => {
//   console.log(`db is connected ${nisha}`);
// })("nehaW");

// ((int) => {
//   console.log("This is runnig", int);
// })(7);
// let test = 8;
// if (test == 8) console.log("good score");

// let month = 4;

// switch (month) {
//   case 6:
//     console.log("this is june month");
//     break;

//   default:
//     console.log("april month");
//     break;
// }

// let help = {};
// if (Object.keys(help).length == 0) {
//   console.log("this is true");
// }
//truth or falsy

// let userEmail = {};
// if (userEmail) {
//   console.log("You logged in");
// } else {
//   console.log("log in please");
// }

//Nullish Coalescing Operator (??) : null undefined

// let val;
// val = 69 ?? 67;
// console.log(val);
// val < 67 ? console.log("67 is there") : console.log("69 is there");

// let i = 9;
// let j = 3;
// console.log(`${i} * ${j} = ${i * j}`);
// console.log(i, "*", j, "=", i * j);
// console.log(i + " * " + j + " = " + i * j);

// let no = 12;
// do {
//   console.log("athe nin is greater than 1");
//   no++;
// } while (no < 16);

// const arr = ["HII", "NEHA", "MOHIT", "WADHWA"];
// for (val of arr) {
//   console.log(val);
// }

// const map = new Map();
// map.set("In", "India");
// map.set("Fr", "France");

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ":=", value);
// }

// const obj = {
//   email: "m@gmail",
//   loggedIn: "Neha is here",
// };

// for (const key in obj) {
//   console.log(obj[key]);
// }

// for (const key in arr) {
//   console.log(arr);
// }
// arr.forEach(function (val) {
//   console.log(val);
// });

// arr.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

// for of loop

let arr = [1, 2, 3, 4, 5, 6, 7];
let obj = {
  name: "Neha",
  RollNO: 20001003073,
};

for (const nums of arr) {
  console.log(nums);
}

let map = new Map();
map.set("1", "one");
map.set("2", "two");
console.log(map);
for (const [key, value] of map) {
  console.log(` This is the ${key} and the value is this ${value} `);
}

// for (const [key, value] of obj) {
//   console.log(`This is the key ${key} and the value is ${value}`);
// }
for (const values in obj) {
  console.log(obj[values]);
}

for (const key in map) {
  console.log("Map key is this ", key);
}
for (const key in arr) {
  console.log("Map key is this ", arr[key]);
}

// arr.forEach((nums) => {
//   console.log(nums);
// });
// arr.forEach(function (nums) {
//   console.log(nums);
// });

function prime(item) {
  console.log("This is the item", item);
}
arr.forEach(prime); // just to give refernce of it

let arrO = [
  {
    book: "Atomic Habits",
    price: 89,
  },
  {
    book: "THink and grow rich",
    price: 90,
  },
];

let a = arrO.forEach((nums) => console.log(nums.book));
console.log("The value of a ", a);
let b = arr.map((nums) => nums + 10);
console.log("The value of b ", b);

arr.forEach((nums) => {
  if (nums > 4) console.log("This is nums", nums);
});
console.log("my arr after forEach is this", arr);

let ans = arr.map((nums) => nums + 10);
console.log("This is the ans", ans);
console.log("THis is the new array after map", arr);

let ni = arr
  .map((no) => no * 10)
  .map((no) => no + 10)
  .filter((no) => no > 40);
console.log("The value of ni is ", ni);

// Reduce in  js
//reduce in js means to add something to add in the cart value of it
// like the addition of the array

const total = arr.reduce(function (acc, currV) {
  console.log(`The value of  acc ${acc} and the value of ${currV}`);
  return acc + currV;
}, 0);
console.log("The total is ", total);

const to = arr.reduce((acc, currV) => acc + currV, 0);
console.log(to);

const tot = arr.reduce((acc, currV) => {
  return acc + currV;
}, 0);
console.log("toa", tot);

arr.reduce(function (acc, currV) {
  return acc + currV;
}, 0);

arr.reduce((acc, b) => {
  return acc + b;
}, 0);

// for styling in js :
// documnet.getElementById("title").style.backgroundColor = "red";

arr.reduce((acc, cuurV) => acc + cuurV, 0);

// isNaN (height)
//.toFixed(2)
// getting exact timming

new Date().toLocaleTimeString();

//chroneJOB :=> to get the update time to time

// setInterval is another method for getting the update

// to generate random colour
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    // console.log(Math.floor(Math.random() * 16));
    color += hex[Math.floor(Math.random() * 16)];
    // color += Math.floor(Math.random() * 16);
  }
  return color;
};

console.log(randomColor());

// 5th Project
// const insert = document.getElementById('insert')

// window.addEventListener("keydown", function(e){
// insert.innerHTML= `<table>
// <tr>
//   <th>key</th>
//   <th>Keycode</th>
//   <th>code</th>
// </tr>
// <tr>
//   <td>${e.key === " " ? "Space" : e.key}</td>
//   <td>${e.keyCode}</td>
//   <td>${e.code}</td>
// </tr>

// </table>`
// })
