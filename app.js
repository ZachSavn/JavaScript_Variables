console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1 practice declaring variables
const firstName = "Zachary";
let lastName = "Webb";
var age = 27;

console.log(firstName, lastName, age)
// Exercise 2 practice working with strings
let fullName = firstName + " " + lastName;

let templateFullName = `${firstName } ${lastName}`;

console.log(fullName);
console.log(templateFullName);
// Exercise 3 putting first 2 exercises together
let city = "Circleville";
let pastime = "cardistry";
let myStory = `Hello! My name is ${templateFullName}. I live in ${city}, and I really enjoy learning ${pastime} and coding!`;


console.log(myStory);