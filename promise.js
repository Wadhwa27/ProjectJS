const promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("My promise is resolved");
    resolve();
  }, 1000);

  //   resolve();
});
promises.then(() => {
  console.log("It comes in the catch method");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("secone one is running");
    resolve();
  }, 1000);
}).then(() => {
  console.log("second is resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("This is done");
    resolve({ naam: "Neha", roll: 20001003073 });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

const promisefour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ naam: "MOhit", roll: 20001003070 });
    } else {
      reject("something is going on ");
    }
  }, 1000);
});
promisefour
  .then((user) => {
    console.log(user);
    console.log(user.naam);

    return user.naam;
  })
  .then((naam) => {
    console.log("Naam is there", naam);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally it is done");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ naam: "Suhawana", roll: 20001002053 });
    } else {
      reject("No one --- is waiting for me");
    }
  }, 1000);
});

// this part is not catching the error alone  so for this use try catch block

// async function consume() {
//   const response = await promiseFive;
//   console.log(response);
// }
// consume();

async function consume() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
consume();

// using fetch to print the data coming from any url

// async function getting() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log("response is this", response);
//     const data = await response.json();
//     console.log("data is this", data);
//   } catch (err) {
//     console.log("err ", err);
//   }
// }

// getting();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
