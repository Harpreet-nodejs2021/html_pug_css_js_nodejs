var startingValue = 1, tableOutput = null;

while(startingValue <= 10){
    tableOutput = 9 * startingValue;
    console.log(`9 times ${startingValue} equals ${tableOutput}`);
    startingValue++;
}

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
while(initNum < 14){
    numOfStars = numOfStars + '*';
    console.log(numOfStars);
    initNum++;
}

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
while(initNum > 0){
    numOfStars = numOfStars.substr(0,initNum);
    console.log(numOfStars);
    initNum--;
}

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
while(initNum <= 13){
    numOfStars = numOfStars + '*';
    if(initNum % 2 !== 0){
        console.log(numOfStars);
    }    
    initNum++;
}

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
while(f < n){
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
}

// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13