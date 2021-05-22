for( var startingValue = 1, tableOutput = null; startingValue <= 10; startingValue++){
    tableOutput = 9 * startingValue;
    console.log(`9 times ${startingValue} equals ${tableOutput}`);
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

for ( var initNum = 1, numOfStars = ''; /*Empty String*/ initNum < 14; initNum++){
    numOfStars = numOfStars + '*';
    console.log(numOfStars);
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

for(var initNum = 13, numOfStars = "*************"; initNum > 0 ; initNum--)
{
    numOfStars = numOfStars.substr(0,initNum);
    console.log(numOfStars);
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

for( var initNum = 1, numOfStars = ''; /*Empty String*/ initNum <= 13; initNum++)
{
    numOfStars = numOfStars + '*';
    if(initNum % 2 !== 0){
        console.log(numOfStars);
    }
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

for( var n = 11, f = 0, f1 = -1, f2 = 1; f < n; /* No Optional final Expression */)
{
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