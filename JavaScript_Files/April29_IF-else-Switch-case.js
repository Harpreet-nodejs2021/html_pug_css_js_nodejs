// IF Statement

//if (condition) {
    // If statement body
    // We'll add the code that we want to execute if the condition is true
//  }

// if the players life is 0 then show a Game Over message
const playerLife = 0;

if (playerLife == 0) {
  console.log('Game Over!!!!');
}

var myPresentAge = 65;

// if( Put Statment here/ logical operators - AND, OR, NOT)

//-------------------------------------------------

// If / else statement

//if (condition) {
    // if true then execute this code
//  } else {
    // if not, then execute this code
//  }

// IF number equals 2 THEN show the number is 2 message ELSE show the number is not 2 message

const number = 5;

if (number === 2) {
  console.log('The number is 2');
} else {
  console.log('The number is not 2'); // This string is printed as output
}

if(myPresentAge > 65){
    console.log('Senior Citizen');
}
else{
    console.log("Adult"); // This string is printed as output
}

// Another Example

var myPresentAge = 17;

// if( Put Statment here/ logical operators - AND, OR, NOT)

if(myPresentAge > 65){
    console.log('Senior Citizen');
}
else if(myPresentAge >= 18 && myPresentAge <65 ){
    console.log('Adult');
}
else{
    console.log("Minor"); // This string is printed as output
}

//-------------------------------------------------

// WINDOW.PROMPT Method -> Used to get input from user, and then validate the input as string, parse it to number and send message to user if entered value is invalid.

// Conditional ternary operator

var sum = 20;

var message = (sum === 20) ? 'Pass' : 'Fail'; // Another way to write if-else Statement

console.log(message); // Pass

var sum = 24;

var message = (sum === 25) ? 'Pass' : 'Fail';

console.log(message); // Fail

//-------------------------------------------------

// Switch Case statement - Alternative to IF-ELSE Statement

const myName = 'HENRY';

if (myName === 'Singh') {
  console.log('My name is Singh');
} else if (myName === 'Happy') {
  console.log('My name is Happy');
} else if (myName === 'Harry') {
  console.log('My name is Harry');
} else if (myName === 'Henry') {
  console.log('My name is Henry');
} else {
  console.log('My name is not Singh, Happy, Harry or Henry'); // This string gets printed
}

// Alternnatively

const theName = 'HENRY';
let displayMessage = null;

switch (theName) {
  case 'Singh':
    displayMessage = 'The name is Singh';
    break;
  case 'Happy':
    displayMessage = 'The name is Happy';
    break;
  case 'Harry':
    displayMessage = 'The name is Harry';
    break;
  case 'Henry':
    displayMessage = 'The name is Henry';
    break;
  default:
    displayMessage = 'The name is not Singh, Happy, Harry or Henry'; // This string gets printed
}
console.log(displayMessage);

// The optional break statement associated with each case label ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch

var myCity = 'WPG';

switch(myCity){
    case 'Winnipeg' :
        console.log('My City is Winnipeg');
        break;

    case 'Calgary' :
        console.log('My City is Calgary');
        break;  
    default:
        console.log('No value match found');// This string gets printed
        break;
}

var myCity = 3;

switch(myCity){
    case 1 :
        console.log('My City is Winnipeg');
        break;

    case 2 :
        console.log('My City is Calgary');
        break;  

    case 3 :
        console.log('I live in Lower Mainland');// This string gets printed
        break;  

    default:
        console.log('No value match found');
        break;
}

var myCity = 'Brampton';

switch(myCity){
    case 'Winnipeg' :
        console.log('My City is Winnipeg');
        break;

    case 'Calgary' :
        console.log('My City is Calgary');
        break;  

    case 'Brampton' :
    case 'Oshawa' :
        console.log('I live in GTA'); // This string gets printed - if the variable 'myCity' contains 'Oshawa' or 'Brampton' (Same Result for either case)
        break;      
    default:
        console.log('No value match found');
        break;
}

//-------------------------------------------------

const yourName1 = ''; // Empty String

if (yourName1 === '') {
  console.log('Please input your name'); // This string gets printed
} else {
  console.log('Welcome: ' + yourName1);
}

const yourName2 = null;

if (yourName2) {
  console.log('Welcome: ' + yourName2);
} else {
  console.log('Please input your name'); // This string gets printed
}