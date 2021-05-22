var startingValue = 1, tableOutput = null;

do {
    tableOutput = 9 * startingValue;
    console.log(`9 times ${startingValue} equals ${tableOutput}`);
    startingValue++;
}
while(startingValue < 11){}

// 9 times 1 equals 9
// 9 times 2 equals 18
// 9 times 3 equals 27
// 9 times 4 equals 36
// 9 times 5 equals 45
// 9 times 6 equals 54
// 9 times 7 equals 63
// 9 times 8 equals 72
// 9 times 9 equals 81
// 9 times 10 equals 90

//-------------------------------------------------

var initNum = 1, numOfStars = ''; // Empty String
do {
    numOfStars = numOfStars + '*';
    console.log(numOfStars);
    initNum++;
}
while(initNum < 14){}

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
// *************

//-------------------------------------------------

var initNum = 13, numOfStars = "*************";
var numOfStars;
do {
    numOfStars = numOfStars.substr(0,initNum);
    console.log(numOfStars);
    initNum--;
}
while(initNum > 0){}

// *************
// ************
// ***********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

//-------------------------------------------------

var initNum = 1, numOfStars = ''; // Empty String
do {
    numOfStars = numOfStars + '*';
    if(initNum % 2 !== 0){
        console.log(numOfStars);
    }    
    initNum++;
}
while(initNum < 14)

// *
// ***
// *****
// *******
// *********
// ***********
// *************

//-------------------------------------------------

// Fibonacci sequence numbers

var n = 11, f = 0, f1 = -1, f2 = 1;
do {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
}
while(f < n) {}

// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13