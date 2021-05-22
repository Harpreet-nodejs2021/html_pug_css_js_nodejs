// SLICE METHOD/ Text manipulation is used for search process.

// The slice method extracts a section of a string and returns it as a new string.
// This method accepts two parameters slice(start, end).

// Use 0 index for the beginning of the text.
// The end parameter is optional and if we don't pass any value it will return the rest of the text.

const text = "I am Happy Singh!";// index 0 -16

const outcome = text.slice(5); // appy Singh!

const outcome1 = text.slice(4,15);// string has to print from index 4 till index 14. Index 15 is not included.

console.log(outcome1); // Happy Sing

const outcome2 = text.slice(3,13); // We sliced the string until the 13 index

console.log(outcome2);// m Happy Si

const outcome3 = text.slice(7,6);

console.log(outcome3);// Nothing gets printed since index 6 is lower than index 7 (string has to start printing from index 7).

// The end parameter can be a negative value.
// When using negative values it will position at the end of the string and start counting backwards.

const newText = 'JavaScript and Java are not the same';
const outcome4 = newText.slice(0, -25); // JavaScript

console.log(outcome4);

// Sub string Method - It returns the part of a string between the start index and a number of characters after it.
// We can also use 2 parameters (start and end).
// First parameter is the substring start.
// Second parameter is the number of characters.

//-------------------------------------------------------------

const outcome5 = text.substr(4,8); // add 8 index value starting from index 4

console.log(outcome5);// Happy S

console.log(text.length); // 17
const outcome6 = newText.substr(8, text.length); // 8 + 17 -> "pt and Java are n"

console.log(outcome6);

//-------------------------------------------------------------

// Split Method

let friends = ' Gill, Sidhu, Maan, Bal, Sohal, Sandhu, Brar';
let friendsArray = friends.split (',');

console.log(friendsArray); // Output below
// [
//  ' Gill',  ' Sidhu',
//  ' Maan',  ' Bal',
//  ' Sohal', ' Sandhu',
//  ' Brar'
// ]

//-------------------------------------------------------------

// Number Object

const numberAsAString = '3';
console.log(typeof numberAsAString); // String

const numBer = parseInt(numberAsAString); // Parse Integer Function -> It converts string to integer

// If the first character cannot be converted to a number, NaN (not a number) is returned

const newNumber1 = parseInt('a'); // Output is "NaN"

console.log(newNumber1);

const newNumber2 = parseInt('24'); 

console.log(newNumber2);

console.log(numBer); // 3

console.log(typeof numBer); // number

var amount = numBer + 5;
var strTotal = numberAsAString + 4; // String Concat

console.log(`Total: ${amount} , ${strTotal}`); // Interpolation - using backtick -> Output is 8, 34

var strTotal = newNumber2 + 3;

console.log(`Total: ${strTotal}`); // 24 + 3 = 27

console.log(`Total: ${newNumber2} , ${strTotal}`); // 24, 27

const numberString = '3.20';
const numStr = parseInt(numberString);

console.log(numStr); // 3 -> parseInt will return an integer number/ not float data-type

//-------------------------------------------------------------

// Parse Float

const piAsText = '3.14';

const value1 = parseFloat(piAsText);

console.log(value1); // Float Output is 3.14

const value2 = parseInt(piAsText);

console.log(value2); // Integer output is 3

//-------------------------------------------------------------

// toString - Method

let num = 4;

console.log(typeof num); // number

let message = num.toString() + '2';

console.log(message); // 42 -> String concatenation

console.log(typeof message); // string