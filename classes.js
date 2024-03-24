class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
}

const name = new User("neha", "dfjoie", "678");
console.log(name.encryptPassword());
