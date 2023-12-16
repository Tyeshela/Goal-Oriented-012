// Declare an empty object named person.
const person = {};

// Add properties name, age, and email to the person object with values of your choice.
person.name = "John";
person.age = 30;
person.email = "john@example.com";

// Access and log the name property of the person object.
console.log(person.name);

// Change the age property of the person object to a new value.
person.age = 35;

// Add a method called introduce to the person object that logs a greeting message with the person’s name and age.
person.introduce = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create an object called address with properties street, city, and postalCode. Add this as a property of the person object.
person.address = {
  street: "123 Main St",
  city: "New York",
  postalCode: "10001",
};

// Access and log the city property within the address object.
console.log(person.address.city);

// Create two objects, person1 and person2, with the same properties and values. Check if they are equal.
const person1 = { name: "Alice", age: 25 };
const person2 = { name: "Alice", age: 25 };
const areEqual = JSON.stringify(person1) === JSON.stringify(person2);
console.log("Are person1 and person2 equal?", areEqual);

// Create a function that loops through and logs all properties and their values of the person object.
function logProperties(obj) {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
logProperties(person);

// Remove the email property from the person object.
delete person.email;

// Write a function that counts and logs the number of properties in the person object.
function countProperties(obj) {
  const count = Object.keys(obj).length;
  console.log(`Number of properties: ${count}`);
}
countProperties(person);

// Write a function that logs all the keys (property names) of the person object.
function logKeys(obj) {
  const keys = Object.keys(obj);
  console.log("Keys:", keys);
}
logKeys(person);

// Write a function that logs all the values of the properties in the person object.
function logValues(obj) {
  const values = Object.values(obj);
  console.log("Values:", values);
}
logValues(person);

// Declare a function named greet that logs “Hello, world!” when called.
function greet() {
  console.log("Hello, world!");
}
greet();

// Create a variable sayHi and assign it a function expression that logs “Hi there!” when called.
const sayHi = function () {
  console.log("Hi there!");
};
sayHi();

// Write a function called add that takes two parameters, a and b, and returns their sum.
function add(a, b) {
  return a + b;
}
const result = add(7, 3);
console.log("Result:", result);

// Declare a variable x inside a function. Try to log the value of x outside of that function. What does it log?
function testScope() {
  const x = 10;
}
testScope();
console.log("Value of x:", x); // It will log an error because x is not defined outside the function.

// Create an arrow function called double that takes a number as a parameter and returns its double.
const double = (number) => number * 2;
console.log(double(5)); // Output: 10

// Refactor the greet function from exercise 1 using an arrow function with an implicit return.
const greetArrow = () => "Hello, world!";
console.log(greetArrow());

// Create an object person with an arrow function property sayHello that logs “Hello!” when called.
const personWithArrow = {
  sayHello: () => console.log("Hello!"),
};
personWithArrow.sayHello();
