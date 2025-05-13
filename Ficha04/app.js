var eventConstants = require("./config");

const Person = {
  name: "John",
  age: 99,
  gender: "M",
};

const string = JSON.stringify(Person);

console.log(string);

const manualString = eventConstants.JSONSTRING;

const manualObj = JSON.parse(manualString);
console.log(manualObj);
