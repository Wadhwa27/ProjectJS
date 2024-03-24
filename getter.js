class User {
  constructor(name, password) {
    (this.name = name), (this.password = password);
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value.toUpperCase();
  }

  // if undersscore is not apllying then error come due to the maximum call stack
  get name() {
    return this._name.toUpperCase();
  }
  set name(value) {
    this._name = value;
  }
}
const neha = new User("Neha", "abcds");

console.log(neha.password);
// get and set always come together
// and there is chance of error coming

// get or setter me nam same rahega jo uski property hai

// return `${this._password }neha`
//  👆 hm yeh bhi value set kar skte hai in the getter method to modify it

// get yani ki value of lena
//  jabki set ka matlab hai wo wali value set kerke db mebejna

// properties _get_set me yeh dab kuch hai
// for more geter or setter synstacx go tto git repo

//  getter or setter is a private property
