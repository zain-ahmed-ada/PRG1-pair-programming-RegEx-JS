// Module for user input
const readlineSync = require("readline-sync");

//Some sample Regular expressions to have a play with

const validWholeNumberRegEx = /^[0-9]+$/;
const validPositiveWholeDecimalNumber = /^(?:0|[1-9]\d*)(?:\.\d+)?$/;
const validFloatingPoint2DP = /^[0-9]+\.[0-9][0-9]$/;
const validAlphabeticString = /^[A-Za-z]+$/;

// Use the test method to check whether something matches the rules.
// console.log(validWholeNumberRegEx.test(456));

// Create three functions which check user input for three pieces of data.
// 1. Their name; 2. Their age; 3. Their height.
const checkName = (name) => {
	if (validAlphabeticString.test(name)) {
		return true;
	} else {
		return false;
	}
};

// Other regex methods do exist such as match() (which looks for matching
// characters) and replace() (which replaces characters), but test is
// probably the most commonly used and the one you should use here.

// Example code from the lesson slides:

// function validInput(input){
//     const AtoZAndSpaceRegex = /^[A-Za-z]+$/;
//     return AtoZAndSpaceRegex.test(input)
// }

// while (true) {
//     let userInput = readlineSync.question("Please enter alpha characters only: ");
//     if (validInput(userInput)) {
//         console.log("Thank you. Please continue.");
//         break;
//     }
//     else {
//         console.log("Incorrect input.");
//     }
// }
