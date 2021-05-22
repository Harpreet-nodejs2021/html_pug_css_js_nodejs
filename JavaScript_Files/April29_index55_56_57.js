var firstNumber=10, secondNumber=5;

var result = (firstNumber > secondNumber) ? firstNumber : secondNumber;

console.log(`${result} is the bigger number`); // 10 is the bigger number

// Alternatively

var value1 = (firstNumber > secondNumber) ? firstNumber : secondNumber;
var value2 = (firstNumber > secondNumber) ? secondNumber : firstNumber;

console.log('Number ' + value1 + ' is bigger than ' + value2); // Number 10 is bigger than 5

var firstNumber=4;

var result = (firstNumber > secondNumber) ? firstNumber : secondNumber;

console.log(`${result} is the bigger number`); // 5 is the bigger number

// Alternatively

var value1 = (firstNumber > secondNumber) ? firstNumber : secondNumber;
var value2 = (firstNumber > secondNumber) ? secondNumber : firstNumber;

console.log('Number ' + value1 + ' is bigger than ' + value2); // Number 5 is bigger than 4

//---------------------------------------------------------

var number = 10;
var oddEven = (number%2==0) ? ' is an even number' : ' is an odd number';

console.log(number + oddEven);

// 10 is an even number

var number = 7;
var oddEven = (number%2==0) ? ' is an even number' : ' is an odd number';

console.log(number + oddEven);

// 7 is an odd number

//---------------------------------------------------------

var username="pepe2017";
var password="12345";

var message = (username=="pepe2017" && password=="12345") ? 'Logged in user, show user home page':'Sorry, there has been a problem, please try it again.';

console.log(message);

// Logged in user, show user home page

var username="peTe2017";
var password="12345";

var message = (username=="pepe2017" && password=="12345") ? 'Logged in user, show user home page':'Sorry, there has been a problem, please try it again.';

console.log(message);
// Sorry, there has been a problem, please try it again.