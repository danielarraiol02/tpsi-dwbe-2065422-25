function Person(firstName, lastName) {
  (this.firstName = firstName), (this.lastName = lastName), (this.age = 0);
}

Person.prototype.greet = function () {
  console.log("Hello " + this.firstName + " " + this.lastName);
  console.log(
    this.firstName + " " + this.lastName + " tem " + this.age + " anos"
  );
};

var john = new Person("John", "Doe");
john.age = 18;
john.greet();

var jane = new Person("Jane", "Doe");
jane.age = 27;
jane.greet();

console.log(john.__proto__);
console.log(john.__proto__ == jane.__proto__);
