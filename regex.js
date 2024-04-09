//Some sample Regular expressions to have a play with

const validWholeNumberRegEx = /^[0-9]+$/;
const validPositiveWholeDecimalNumber = /^(?:\d+|\d*\.\d+)$/;
const validAlphabeticString = /^[A-Za-z]+$/;

// Use the test method to check whether something matches the rules. 
console.log(validWholeNumberRegEx.test(456))

// Create three functions which check user input for three pieces of data.
// 1. Their name; 2. Their age; 3. Their height. 




// Other regex methods do exist such as match() (which looks for matching
// characters) and replace() (which replaces characters), but test is 
// probably the most commonly used and the one you should use here.