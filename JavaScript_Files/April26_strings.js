// String Objects

const text = 'Hello Team';
const characterCount = text.length;

// String index is 0

console.log(characterCount); //10

console.log(text.length);

console.log('Hello Team'.length);// 10

// String Method - Convert to Upper Case

let myName= 'Harry Singh';
newValue = myName.toUpperCase();
console.log(newValue); // HARRY SINGH

newValue = myName.toLowerCase();
console.log(newValue); // harry singh

// String Concatenation
// Using the + operator we can concatenate string values.

// The String object has a concat method to do the same using methods instead of operators.

// The concat method also accepts multiple parameters.

const strA = "My mom's name is "; // Note the trailing space!  It's a common mistake to forget whitespace when using concat
const strB = 'Marta';

// We get one string back as result with both strings concatenated
const message = strA.concat(strB);

console.log(message); // My mom name is Marta

let str = 'Java'; // Sometimes we don't want that trailing space ;)

console.log(str.concat('Script', ' is the best', ' Programming language!!'));

const str1 = "Henry";
const str2 = "Singh";

console.log(str1.concat(' ', str2, '!')); // Henry Singh!

console.log(str1.concat(str2)); // HenrySingh

console.log(str2.concat(',', str1)); // Singh,Henry

// String Manipulation - we use it to say for reversing a string

// String Index in JavaScript starts at 0. The first character is at the 0 index position. The charAt method returns the character at the specified index. We will use Method "char At" for finding position/index of a particular character.

var position = str1.charAt(0); // index 0 - H, index 1 - e, index 2 - n, index 3 - r, index 4 - y
console.log(position); // Output is 'H'

var position = str1.charAt(1);
console.log(position); // Output is 'e'

// To know the last string character we can combine charAt and the length property.

// As length will return the amount of characters and the index starts at 0 to know the last character we need to substract one from the length value.

console.log(str1.charAt(str1.length));//  String index starts from '0'. Here, string Length for "Henry" is '5' but last index/position is '4', so there is no value at position - length (i.e. position 5)

const lastCharacterPosition = str1.length - 1;

console.log(str1.charAt(lastCharacterPosition)); // Output is 'y' - Last Character

console.log(str1.charAt(str1.length - 2)); // Output is 'r' - Second Last Character