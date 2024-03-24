function setUserName(username) {
  // complex db calls

  console.log("THis is called1111");
  this.username = username;
  console.log("THis is called");
}
function createName(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}
const data = new createName("Neha", "jdhf@gmaik.com", 123);
console.log(data);

// for holding the refernce of another function use call method
