console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
// Exercise 1
 const firstName = "Zachary";
 let lastName = "Webb";
 var age = 27;

// Exercise 2
let templateFullName = `${firstName} ${lastName}`;
let fullName = firstName + " " + lastName;

console.log(fullName)
console.log(templateFullName)

// Exercise 3
let myStory;
let myStoryTwo;
let home ="Circleville"
let pasttime ="reading"
const myWife = "Amber Webb"
var aMonth = 5
var aDay = 21
var aYear = 21

myStoryTwo = `My name is ${fullName}. I live in ${home}. I enjoy ${pasttime}, and my wife, ${myWife}. We got married ${aMonth}/${aDay}/${aYear}.`

myStory = `My name is ${fullName}. I reside in ${home}. I enjoy ${pasttime}`

console.log(myStory)
console.log(myStoryTwo)