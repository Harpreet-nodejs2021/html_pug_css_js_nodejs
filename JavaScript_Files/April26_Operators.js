//Comparison Operator

//Equality operators

let firstNum=10, secondNum=5, thirdNum=5, fourthNum=6;

let result;

result = firstNum == secondNum;

console.log(result);// returns Boolean Value = false

result = firstNum != secondNum;

console.log(result);// returns Boolean Value = True

result = firstNum > secondNum;

console.log(result);// returns Boolean Value = true

result = thirdNum < secondNum;

console.log(result);// returns Boolean Value = false

result = thirdNum == secondNum;

console.log(result);// returns Boolean Value = true

result = thirdNum != secondNum;

console.log(result);// returns Boolean Value = false

console.log(10 == '10'); // This is true even though the variables have different value type - Number & String

result = thirdNum <= fourthNum;

console.log(result);// returns Boolean Value = true

result = firstNum >= fourthNum;

console.log(result);// returns Boolean Value = true

// === -> Tripple equal to signs can also be used - Strict Equality Comparison

result = thirdNum === secondNum;// Strict Equality Comparison

console.log(result);// returns Boolean Value = true

console.log(10 === '10'); // false - One type is Number, and the other one is String

console.log(10 !== '10'); // true

// Logical Operators

// Using pipe symbol (|| for OR Operator) - to check if at least one of the expressions is true

// && (AND Operator) - to know if both expressions are true
// ! (NOT Operator) - Using the not operator ! we can negate a condition

let myAge = 40;
let residence='NorthPoint';

let eligibleForCovidVaccine1 = (myAge >= 40 || residence == 'Downtown');
console.log(eligibleForCovidVaccine1); // Returns result as TRUE

let eligibleForCovidVaccine2 = (myAge >= 41 || residence == 'Downtown');
console.log(eligibleForCovidVaccine2); // Returns result as FALSE

let eligibleForCovidVaccine3 = (myAge >= 40 && residence == 'Downtown');
console.log(eligibleForCovidVaccine3); // Returns result as FALSE

let eligibleForCovidVaccine4 = (myAge >= 40 && residence == 'NorthPoint');
console.log(eligibleForCovidVaccine4); // Returns result as TRUE as both expressions are true

console.log(!false); // Negation Operator -> Returns result as True

let isNumber=true;

isNumber = !isNumber;

console.log(isNumber);// Result is False

console.log(!isNumber);// True

// Special Characters -> \n - newline , \t - tab, \r - Carriage Return

console.log("Hi Team, \n It is Monday today. \t It's the first day of this week."); 
// Hi Team,
// It is Monday today.     It's the first day of this week.

// Using Escaping backslash - 

let folderPath1 = 'C:\\Git\\html_css_nodejs_mongodb\\JavaScript_Files'; // Proper Folder Structure - "C:\Git\html_css_nodejs_mongodb\JavaScript_Files"
console.log(folderPath1);

let folderPath2 = 'C:\Git\html_css_nodejs_mongodb\\JavaScript_Files'; // Without Escaping backslash - Improper Folder Structure - "C:Githtml_css_nodejs_mongodb\JavaScript_Files"

console.log(folderPath2);

console.log("Hi Team, \n It is \"Monday\" today. \t It's the first day of \r this week."); // \r - Carriage Return - Cut the text after \r "this week." and paste at the start of the sentence.
// Hi Team,
// this week.day" today.   It's the first day of

let message1 = "Riders are \"the\" best CFL team";

console.log(message1); // Riders are "the" best CFL team

let message2 = "I love to have coffee at Gianu\'s";

console.log(message2); // I love to have coffee at Gianu's