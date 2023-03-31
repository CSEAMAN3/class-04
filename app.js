"use strict";

// console.log("boooooyaaaaaaa");

function sayHello() {
  console.log("hello world");
}

sayHello();

function sayGoodBye(name) {
  console.log("Goodbye " + name);
}

sayGoodBye("Neo");
sayGoodBye("Tim");

function getFullName(firstName, secondName) {
  return firstName + " " + secondName;
}

let ada = getFullName("ada", "lovelace");
console.log("ada: " + ada);

function yesOrNoPrompt(promptInfo) {
  let userInput = prompt(promptInfo);
  if (userInput === "yes") {
    console.log("hurray");
  } else if (userInput === "no") {
    console.log("nope");
  } else if (userInput === "maybe") {
    console.log("make up your mind");
  } else {
    console.log("Error: incorrect useage");
  }
}

yesOrNoPrompt("Whell yes or no");
yesOrNoPrompt("how bout yes or no");

function chris() {
  let greeting = "Hi";
  return greeting;
}

// console.log(greeting);
console.log(chris());
