const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);

const chai = {
  name: "gingger",
  price: 345,
  isAvail: true,
  other: function () {
    console.log("not working ");
  },
};
// one side give the name of the object while on the other side give the  property defined

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Now I fix my property,
// that is also not writable or not change or overwrite with this :

// Object.defineProperty(chai, "name", {
//   writable: false,
//   enumerable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// yeh code phate ga :

// for (let [keys, value] of Object.entries(chai)) {
//   console.log(`${keys} : ${value}`);
// }

for (let [keys, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${keys} : ${value}`);
  }
}

// when enumerable become false we can't iterate those property that is not print in the console
