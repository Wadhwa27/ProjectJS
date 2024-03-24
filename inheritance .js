class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username), (this.email = email), (this.password = password);
  }
  addUser() {
    console.log(`A new things will be done ${this.username}`);
  }
}
// object :
const tea = new Teacher("chai", "hdfjh@gmail.com", "1234");
tea.addUser();
const teaa = new User("chais", "hdfjh@gmail.com", "1234");
teaa.logMe();
tea.logMe();

console.log(tea instanceof Teacher);
console.log(tea instanceof User);
