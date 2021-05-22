console.log(2+2);
console.log('First js file');

var myName; //Defining the variable
var age=19; //Declaring the variable
var rollNumber,address;

var y;

var address="79 'Jutland' Rd";

const pi=3.14; //When the value of a variable is always the same we can define it as a constant.
//A constant is declared/ assigned value only once throughout our code.

console.log(address);

myName="Harry";
console.log(myName);

var lastName = 'Singh';

// String interpolation

// The string interpolation in JavaScript is performed by template literals (strings wrapped in backticks ` ) and ${expression} as a placeholder.

var finalString = `Welcome ${myName} ${lastName}`; //We can use backtick (`) not single quote

//We can use backtick insted of using "+" to concatenate strings

console.log(finalString);

console.log(typeof finalString);

//concatenation - writing string and variable/ the action of linking things together in a series.

console.log("My name is:" + myName + " " + lastName);

var isWeekDay = false; //Boolean data type
console.log(typeof isWeekDay);

var myScore = null; //null data type. It is different from undefined value.

console.log(myScore);

//let x; Local Variable
//Using let will help us scope our variables in a better way.

function add()
{
    let x=4; //Another way to define the variable using "let"
    //x=4;
    y=7+10;
    console.log(x);
    console.log(y);
}

add();
//console.log(x);
console.log(y);

//Defining variable using let and var. The variable defined using "let" has limited scope. It can not be executed outside the function and we will get error that variable "x" is not defined, but the variable with "var" can.