//Defining and declaring variable in single line

const firstName="Harry";
const lastName='Singh';
const age=35;
const dateOfBirth="03/17/1985";
const address="100 Main St";

age=24; // TypeError: Assignment to constant variable.

console.log(firstName,lastName,age,dateOfBirth,address);

console.log("My first name is:", firstName);
console.log("My last name is:", lastName);
console.log("My Age is:", age , "Years");
console.log("My DOB is:", dateOfBirth);
console.log("My Address is:", address);