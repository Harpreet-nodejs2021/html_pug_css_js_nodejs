var firstNumber=10, secondNumber=5;

if(firstNumber > secondNumber){
    console.log(`Number ${firstNumber} is bigger than ${secondNumber}`)
}

//Number 10 is bigger than 5

var firstNumber=4;

if(firstNumber > secondNumber){
    console.log(`Number ${firstNumber} is bigger than ${secondNumber}`)
}
//If we set firstNumber = 4, we see no output since the condition is not met.

//---------------------------------------------------

var number = 10;
if(number%2==0){
    console.log(number + " is an even number")
}
else{
    console.log(number + " is an odd number")
}

// 10 is an even number

var number = 7;
if(number%2==0){
    console.log(number + " is an even number")
}
else{
    console.log(number + " is an odd number")
}
// 7 is an odd number

//---------------------------------------------------

var username="pepe2017";
var password="12345";
if(username=="pepe2017" && password=="12345"){
    console.log('Logged in user, show user home page')
}
// Logged in user, show user home page