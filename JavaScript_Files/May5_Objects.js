// Objects - Used when working with data

// An object literal is a list of zero or more pairs of property names and associated values of an object

const myObject = {}; // object assigned to a variable

// Key-Value pair (properties & their values)

// Object is defined as "var" or "const" and using Curly brackets.

// Person is an Object. His/her name, age, height, etc. are his/her properties.

// Properties have a name (just like variables). To assign a value to a property we use colon.

// Properties are separated using comas. Properties can be of any type of value.

// We do not need to define properties as var or const as we are defining them in the Object.

var person = {
    myName: 'Harry Singh',
    age: 30,
    // Method of an Object. This function has access to all properties of this Object when we use the keyword "this method"
    greet: function(){
        console.log("Hello! " + this.myName); // In the methods body, we can access the current object properties using the "this" reserved word.
    },
    // In JS, an object method is a property with a function as value.
    birthday: function(){
        // Inside an object method, we can update an object property value
        this.age++; // Object Property "birthday": has a function assigned as value
    },
    covid19: function(myName) {
        // A method can also accept parameters
        console.log(`Hi ${myName}, are you vaccinated?`);
      }
};

console.log(person); // Printing the object - Output below

/*
{
  myName: 'Harry Singh',
  age: 30,
  greet: [Function: greet],
  birthday: [Function: birthday],
  covid19: [Function: covid19]
}
*/

// We can access an object property using the object name, dot and the property name.
console.log(person.myName); // Harry Singh

//-------------------------------------------------

// Object dynamic properties

console.log(person['myName']); // Harry Singh

// Using [] and a string value with the property name we can access the object property value
console.log(person['age']); // 30

// Alternatively, we can also use variables to do the same

const whatName = 'myName';

console.log(person[whatName]); // Harry Singh

const age = 'age';

console.log(person[age]); // 30

//-------------------------------------------------

console.log(person.city); // We can access a property that doesn't exist on the object and get undefined as value.

console.log(person.married); // undefined

/* 
Object properties in JavaScript are dynamic. We will not get any Error.

This means that if we assign a value to an object property that hasn't been defined it will create it.
*/
person.city = "Winnipeg"; // Dynamically adding a property & its value

console.log(person.city); // Winnipeg

person.married = true;

console.log(person.married); // true

//-------------------------------------------------

// "greet();" -> Calling a function without the object

person.greet; // "person.greet" without the parenthesis will return the function definition (No Output)

person.greet();// Hello! Harry Singh -> Calling an object method

console.log(person.age); // 30

person.birthday(); // Calling an object method - it will execute the Method/ function code

console.log(person.age);// 31

//-------------------------------------------------

// Calling a method is similar to calling just a function.
// We are actually calling a function that's an object property.

person.covid19('Chloe'); // Hi Chloe, are you vaccinated? -> Passing parameter to an object method

//-------------------------------------------------

// Changing a property value can be done the same way that you would do it for a variable

person.myName = 'Henry';
person.age = 25;

console.log(person);
/*
{
  myName: 'Henry',
  age: 25,
  greet: [Function: greet],
  birthday: [Function: birthday],
  covid19: [Function: covid19],
  city: 'Winnipeg',
  married: true
}
*/

//-------------------------------------------------

// Defining a function named PRINT

function print(yourInfo){
    console.log("Hello! I am " + yourInfo + " years old");
}

print(person.age); // Calling the function "PRINT" -> Hello! I am 25 years old

// A function is another piece of code located in another memory address. We can see the function call process at low level programming stage/ linear programming

// "Object.keys" returns an array value with all the objects properties names.
// This method accepts an object as parameter.

var properties = Object.keys(person);
console.log(properties); 

/*
[
  'myName',  'age',
  'greet',   'birthday',
  'covid19', 'city',
  'married'
]
*/

properties.forEach(function(property) {
  console.log(person[property]);
});

/*
Henry
25
[Function: greet]
[Function: birthday]
[Function: covid19]
Winnipeg
true
*/

console.log(properties[0]); // myName - Property at index 0

var firstProp = properties[0];
console.log(person[firstProp]); // Property's value gets printed - Henry

console.log(properties[3]); // birthday

// Alternative way to print value of property without assigning it to a variable.
console.log(person[properties[3]]); // [Function: birthday]

//-------------------------------------------------

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

/*
A callback is just a function passed as parameter to other function.

The function that received the function as parameter will call it.

A callback function can get one or many parameters.
*/

let tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Callback (to iterate over arrays)
tenNumbers.forEach(function(number) {
  console.log(number); /*
1
2
3
4
5
6
7
8
9
10
  */
})

// Callback
let evenNumbers = tenNumbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]

// Callback
let result = 0;

result = tenNumbers.reduce(function(result, number) {
  return result + number;
});

console.log(result); // 55

// Callback
let mappedNumbers = tenNumbers.map(function(number) {
  return number + 10;
});

console.log(mappedNumbers); /* [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
] */

// We can see that the filter, reduce and map functions receive a function as parameter.

//-------------------------------------------------

// Functions inside functions - Child functions can access their parent function's parameters

function welcome(someName) {// Parent Function
  let message = 'Hello';
  
  function greet(value) {// Child Function
    return message + ' ' + value;
  }

  return greet(someName);
}

console.log(welcome('Ruby')); // Hello Ruby

//-------------------------------------------------

// "Recursion" is an act of a function calling itself.

function showNumber(startingNum) {
  
  if (startingNum <= 10) { 
    console.log('Playing with Recursion:',startingNum)
    startingNum++;
    showNumber(startingNum); // "showNumber" is a recursive function. If "startingNum" is bigger than 10, then the "showNumber" function stops calling itself.
  }
}

showNumber(0);

/*
Playing with Recursion: 0
Playing with Recursion: 1
Playing with Recursion: 2
Playing with Recursion: 3
Playing with Recursion: 4
Playing with Recursion: 5
Playing with Recursion: 6
Playing with Recursion: 7
Playing with Recursion: 8
Playing with Recursion: 9
Playing with Recursion: 10
*/

//-------------------------------------------------

// Returning a function from a function - 

/*
A function can return a value.

In JavaScript, functions are a type of value.
*/

function total(someNumber) {
  
  let addBothNumbers = function(anotherNumber) {
    return someNumber + anotherNumber;
  }
  
  return addBothNumbers;
}

// We call the "total" function and pass 10 as a parameter.

// The "total" function returns a function that's "addBothNumbers"
const adding = total(10); // We assign the returned function in the "adding" variable.

const amount = adding(20); // We can pass a parameter when we call the "adding" function.

/*
The "addBothNumbers" gets executed using the "adding" function.

"addBothNumbers" will add number 20 that is the value that we get from the "anotherNumber" parameter and 10 that was the number passed as parameter to the parent function.
*/

console.log(amount); // 30

console.log(typeof adding); // function

console.log(typeof amount); // number