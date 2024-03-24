class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}
const user = new User("Neha");
// console.log(user.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const iphone = new Teacher("ihidj", "heohe");
iphone.logMe();

// static kisiko accesss nhi karne deta
console.log(iphone.createId());
