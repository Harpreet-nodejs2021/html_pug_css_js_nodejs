const firstName="Happy Singh";
let firstNameCharacters=firstName.length;
console.log("My name is " + firstName + " and it is " + firstNameCharacters + " characters long");
// My name is Happy Singh and it is 11 characters long

const lastName="Sidhu";
let lastNameCharacters = lastName.length;
let charsDiff = firstNameCharacters - lastNameCharacters;

console.log(`My last name is ${lastName} and it is ${lastNameCharacters} characters long`);
console.log("The character difference between my first name and last name is " + charsDiff);
console.log("My first name is longer than my last name: " + (firstNameCharacters > lastNameCharacters));

// My last name is Cheng and it is 5 characters long
// The character difference between my first name and last name is 6
// My first name is longer than my last name: true