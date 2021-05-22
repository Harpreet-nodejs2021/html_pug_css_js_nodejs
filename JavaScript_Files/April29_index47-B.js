//String.prototype.repeat()

// repeat(count)

// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(4)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy.

// We can input an integer between 0 and +Infinity, indicating the number of times to repeat the string.

// 'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
// 'abc'.repeat(1/0)   // RangeError

//-------------------------------------------------------------------------

// RegExp -> Regular Expressions

// Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. 

// These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.

// Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:

//let regular = /ab+c/;

let regular = new RegExp('ab+c'); // Alteratively, we can call the constructor function of the RegExp object.

//-------------------------------------------------------------------------

//String.prototype.replace()

// replace(regexp, newSubstr) OR replace(substr, newSubstr)

const statement = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(statement.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

// Alteratively, we can use RegExp

const regex = /dog/;
console.log(statement.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

let str = 'The night before Xmas...';
let newstr = str.replace(/xmas/i, 'Christmas'); // i -> ignores the uppercase or lowercase ("Xmas" OR "xmas")
console.log(newstr);  // The night before Christmas...

// Using global and ignore with replace()

let reg1 = /apples/;
let str1 = 'Apples are round, and apples are juicy.';
let newstr1 = str1.replace(reg1, 'oranges'); // Only "apples" (Lowercase) gets replaced
console.log(newstr1);  // Apples are round, and oranges are juicy.

let reg2 = /apples/i; 
// i -> ignores the uppercase or lowercase ("apples" OR "Apples"), and this way the first sub-string gets replaced with the new sub-string.
let str2 = 'Apples are round, and apples are juicy.';
let newstr2 = str2.replace(reg2, 'oranges'); 
console.log(newstr2);  // oranges are round, and apples are juicy.

let reg3 = /apples/gi;
// gi -> Global & Ignore - Using "gi" after the expression (sub-string in this case), all the sub-strings (Regular Expression) gets replaced with the new sub-string.
let str3 = 'Apples are round, and apples are juicy.';
let newstr3 = str3.replace(reg3, 'oranges');
console.log(newstr3);  // oranges are round, and oranges are juicy.

//-------------------------------------------------------------------------

//String.prototype.trim() - The trim() method removes whitespace from both ends of a string.

// trim()

const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.length); // Before Trimming Whitespaces - 18

console.log(greeting.trim());
// expected output: "Hello world!";

// String.prototype.trimStart()

// The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.

// trimStart() <-> trimLeft()

console.log(greeting.trimStart());
// expected output: "Hello world!   ";

// String.prototype.trimEnd()

// The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.

// trimEnd()
// trimRight()

newStr = greeting.trimEnd();

console.log(newStr);
// expected output: "   Hello world!";

console.log(newStr.length); // After Trimming Whitespaces from End/Right of String - 15