/*
In JavaScript function is a value

We use functions to group functionality

Using functions allows us to avoid repeating code

Use the function reserved word to define a function
*/

function greeting() {
    console.log('Hello');
}

greeting(); // Shows Hello as output

// Each time we call the greeting function it will execute the function block code

var number1 = 3, number2 = 5;
var total;

total = number1 + number2;
console.log(total); // 8

var number1 = 6, number2 = 1;
var total;

total = number1 + number2;
console.log(total); // 7

// Use functions - to avoid repetition of code - take above example

function addition(){
    console.log("The operation is addition"); // Returning undefined value
}

addition(); // Invoking/ calling the function

// We can assign a function to a variable

// When we assign a function to a variable we don't need to name our function

// Functions without a name are considered anonymous

const greet = function() {
    console.log('Hello');
  }
  
greet(); // Shows Hello as output

const subtraction = function(){
    console.log("The operation is subtraction"); // Returning undefined value
}

subtraction(); // The operation is subtraction
//-------------------------------------------------------

// A function always return a value, after the function call is executed. By default, undefined is returned.

// In order to make our function return some value, then we mention the RETURN STATEMENT.

function getGreetingMessage() {
    return 'Hello';
  }
  
  getGreetingMessage(); // we call the function getGreetingMessage() we get a string back

  console.log(getGreetingMessage()); //  we get the returned string value and print it using console.log()

// We can assign the returned value to a variable.
const wishes = getGreetingMessage(); 
console.log(wishes);

// A function can also return any data type

function getUserAge() {
    return 30; // function returns a number
  }
  
  function isUserLoggedIn() {
    return true; // function returns a boolean
  }

  if (getUserAge() >= 18) {
    console.log('The user is older than 18');
  }
  
  if (isUserLoggedIn()) {
    console.log('welcome to the site');
  }

// If the returned value is true then we show the message to the user. 
// If it's false then the if statement block won't be executed.

function third_Scenario(){
    console.log("This is third scenario function");
    return 9; // RETURN STATEMENT
}

var returnValue1 = third_Scenario(); // Calling the function
console.log(third_Scenario()); // Returning the value of the function -> 9
console.log("returnValue:" + returnValue1); // 9

function fourth_Scenario(){
    console.log("This is fourth scenario function");
    var a = 10;
    if (a == 10){
        return 'Hello World';
    }
    else{
        return 5;
    }
}

var returnValue2 = fourth_Scenario(); // This is fourth scenario function
console.log(fourth_Scenario()); // This is fourth scenario function. Hello World
console.log("returnValue:" + returnValue2); // returnValue:Hello World

//-------------------------------------------------------

// Passing arguments or parameters to function

/* 

Functions can accept none, one or many parameters

We can have more flexible functions using parameters

Also we can reuse the function functionality for different parameters values

We can use the functions parameters inside the function block content

function(firstParameter, secondParameter, thirdParameter) {
  console.log(firstParameter, secondParameter, thirdParameter);
}

*/

// function named greeting
// The "welcome" function accepts a "username" parameter
// username works as an function internal variable

function welcome (username) {
    console.log('Hi ' + username + '!!!');
  }
  
// The username parameter will get the value that we pass while calling the function

welcome('Harry'); // Hi Harry!!!
  // We can pass a function different parameters values
welcome('Singh'); // Hi Singh!!! We can pass a function different parameters values
welcome('Henry'); // Hi Henry!!!

// Refactor the code so the function returns a value instead of showing it as output

// In this case we define a getGreetings variable and assin a function as value.

const getGreetings = function(username) {
    return 'Hello ' + username + '!!!';
  }
  
console.log( getGreetings('Harry') ); // Hello Harry!!!
console.log( getGreetings('Singh') ); // Hello Singh!!!
console.log( getGreetings('Henry') ); // Hello Henry!!!

const userInformation = function(username, age) {
    console.log('The user: ' + username + ' has ' + age + ' years!!!');
  }
  
  userInformation ('Brar', 39); // The user: Nico has 39 years!!!
  userInformation (18, 'Maan'); // The user: 18 has Marta years!!!

function multiplication(no1, no2){
    let numTotal = no1 * no2;
    console.log("Total: " + numTotal);
    return numTotal;
}

let num1 = 5, num2 = 3; // Global variables
let resultingVal = 0; // Just a good coding practice to avoid any garbage value

resultingVal = multiplication(num1, num2); // Total: 15
console.log(resultingVal); // 15

resultingVal = multiplication(12, 5); // Total: 60 <- Calling the function
console.log(resultingVal); // 60

function division (no1, no2){
    return no1/no2;
}

console.log(division (20,5)); // 4 <- Calling the function