// Array - List of 0 or more expressions

// An array is created using an array literal, it's initialized with the specified values as its elements, and its length is set to the number of arguments specified.

// Array allows us to store more than one value into a variable.

var names = ['George', 'Jason', 'Mike', 'Lisa', 'Peter'];

// index 0 value - George
// index 1 value - Jason

var addresse = []; // Empty Array

// We can retrieve any array item using the item index

console.log(names[3]); // Lisa

// Length of Array METHOD

console.log(names.length); // 5

// Using index we can also assign new values to the array

names[0] = 'Bill'; // We replace George by Bill

names[3] = 'Nathan'; // We replace Lisa by Nathan

names[5] = 'Adam'; // Assigning a value to Array at index 5

console.log(names); // [ 'Bill', 'Jason', 'Mike', 'Nathan', 'Peter', 'Adam' ]

names[7] = 'Chris'; // Assigning a value to Array at index 7

//If the array doesn't have assigned values in the given index it will create empty items
// On index 6 of the Array "names", we have an empty item, since we assigned an item on index 7 of this Array.

console.log(names); 

// [
//    'Bill',
//    'Jason',
//    'Mike',
//    'Nathan',
//    'Peter',
//    'Adam',
//    <1 empty item>,
//    'Chris'
//  ]

// JavaScript has dynamic memory so it's already reserving the spaces

names[6] = 'Kyle'; // Assigning a value to Array at index 6 - Now we did not leave any empty array items

console.log(names); 

// [
//  'Bill',  'Jason',
//  'Mike',  'Nathan',
//  'Peter', 'Adam',
//  'Kyle',  'Chris'
//]

// In JavaScript, arrays can have mixed types of values

const data = [
    'hello', 
    42, 
    false, 
    null, 
    function() { console.log('Have a good day!') }
];

console.log(data); // [ 'hello', 42, false, null, [Function (anonymous)] ]

const message     = data[0];
const lifeMeaning = data[1];
const single      = data[2];
const nullValue   = data[3];
const greeting    = data[4];

console.log(message); // hello
console.log(lifeMeaning); // 42
console.log('single?:', single); // single?: false
console.log(greeting); // [Function (anonymous)]

console.log(greeting()); // Have a good day!

// Going back to our initial array named "names".

names[8] = 13; // Assigning a number value to Array at index 8

names[9] = true; // Assigning a boolean value to Array at index 9

console.log(names);

// [
//  'Bill',  'Jason',
//  'Mike',  'Nathan',
//  'Peter', 'Adam',
//  'Kyle',  'Chris'
//   13,     true
//]

//----------------------------------------------------

// Length of Array METHOD - This property works in the same way as the string length property

// Array index in JavaScript starts in 0

// The length property will return the number of elements

// To get the last element index we can subtract one from the array length

console.log(names.length); // 10

const countOfNames = names.length;
const lastIndexOfNames = countOfNames - 1;

console.log(names[lastIndexOfNames]); // true

// Alternatively

console.log(names[names.length - 1]); // true

//----------------------------------------------------

// Push METHOD

names.push('Henry'); // The push method adds one or more elements to the end of an array

// This method returns the new length of the array

console.log(names);

// [
//  'Bill',  'Jason',
//  'Mike',  'Nathan',
//  'Peter', 'Adam',
//  'Kyle',  'Chris'
//   13,     true,
//   'Henry'
//]

const animals = ['dog', 'duck', 'cow'];
console.log(animals.length); // 3

let animalCount = animals.push('cat');

console.log(animals); // [ 'dog', 'duck', 'cow', 'cat' ]

console.log(animalCount); // 4

animalCount = animals.push('elephant', 'dolphin');

console.log(animals); // [ 'dog', 'duck', 'cow', 'cat', 'elephant', 'dolphin' ];

console.log(animalCount); // 6

// Using "const" type with array allows us to change the array items but we can't assign a new value to the variable

//----------------------------------------------------

names.unshift('Murray'); // The unshift method adds one or more elements to the beginning of an array.

// This method returns the new length of the array

console.log(names);

//[
//    'Murray', 'Bill',
//    'Jason',  'Mike',
//    'Nathan', 'Peter',
//    'Adam',   'Kyle',
//    'Chris',  13,
//    true,     'Henry'
//  ]

//----------------------------------------------------

names.shift(); // The shift method removes the first element from an array and returns that removed element

// This method changes the length of the array

console.log(names);

//[
//    'Bill',  'Jason',
//    'Mike',  'Nathan',
//    'Peter', 'Adam',
//    'Kyle',  'Chris',
//    13,      true,
//    'Henry'
//  ]

const petAnimals = ['dog', 'duck', 'cow'];
const firstElement = petAnimals.shift();

console.log(petAnimals); // ['duck', 'cow']

console.log(firstElement); // dog

console.log(petAnimals.length); // 2

const secondElement = petAnimals.shift();

console.log(petAnimals); // ['cow']

console.log(petAnimals.length); // 1

console.log(secondElement); // duck

const thirdElement = petAnimals.shift();

console.log(petAnimals); // [] -> Empty Array

console.log(petAnimals.length); // 0

console.log(thirdElement); // cow

//----------------------------------------------------

names.pop(); // The pop method removes the last element from an array and returns that removed element

// This method changes the length of the array

console.log(names);

//[
//    'Bill',  'Jason',
//    'Mike',  'Nathan',
//    'Peter', 'Adam',
//    'Kyle',  'Chris',
//    13,      true
//  ]

//----------------------------------------------------

// Sort Method - This method sorts the elements of an array in place and returns the array

// This method accepts a function as parameter to be executed to change the way it will sort the elements

const randomNumbers = [1, 4, 2, 5, 3, 8, 9];
const sortedNumbers = randomNumbers.sort();

console.log(sortedNumbers); // [ 1, 2, 3, 4, 5, 8, 9 ]

//----------------------------------------------------

// Reverse - This method reverses an array in place

// The first array element becomes the last, and the last array element becomes the first

var mixedNumbers = [1, 4, 2, 5, 3, 8, 9];
const reversedNumbers = mixedNumbers.reverse();

console.log(reversedNumbers); // [ 9, 8, 3, 5, 2, 4, 1 ]

//----------------------------------------------------

// Concat - This method is used to merge two or more arrays

// This method does not change the existing arrays, but instead returns a new array

var myAnimals = ['dog', 'cow', 'cat'];
var mutants = ['Professor X', 'Cyclops', 'Beast', 'Jean Grey'];
const animalsAndMutants = myAnimals.concat(mutants);

console.log(animalsAndMutants);
/*
[ 'dog', 'cow', 'cat', 'Professor X', 'Cyclops', 'Beast', 'Jean Grey' ]
*/

//----------------------------------------------------

// Join - This method joins all elements of an array into a string and returns this string

// This method accepts a string value to join by

mixedNumbers = [1, 4, 2, 5, 3, 8, 9];

const joinedNumbersByDash = mixedNumbers.join(' - ');

console.log(joinedNumbersByDash); // 1 - 4 - 2 - 5 - 3 - 8 - 9

const joinedNumbersByComma = mixedNumbers.join(', ');

console.log(joinedNumbersByComma); // 1, 4, 2, 5, 3, 8, 9

//----------------------------------------------------

// IndexOf - This method returns the first index at which a given element can be found in the array

// This method returns -1 if the element is not present

mutants = ['Professor X', 'Cyclops', 'Beast', 'Jean Grey'];

mutants.indexOf('Beast'); // 2

if (mutants.indexOf('Beast') > -1) {
  console.log('Beast is X-Men team member'); // This string gets printed
}

mutants.indexOf('Logan'); // -1

if (mutants.indexOf('Logan') > -1) {
  console.log('Logan is X-Men team member');
} else {
  console.log('Logan is on his own'); // This string gets printed
}

//----------------------------------------------------

// toString - This method returns a string representing the specified array and its elements

// It's like calling array.join(',');

mutants = ['Professor X', 'Cyclops', 'Beast', 'Jean Grey'];

console.log(mutants); // [ 'Professor X', 'Cyclops', 'Beast', 'Jean Grey' ]

console.log(mutants.toString()); // Professor X,Cyclops,Beast,Jean Grey