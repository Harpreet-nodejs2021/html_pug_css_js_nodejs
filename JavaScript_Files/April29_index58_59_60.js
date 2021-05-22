var hour=12; //1-24
if(hour>=5 && hour<12){
    console.log('Good morning');
}
else if(hour>=12 && hour<18){
    console.log('Good afternoon'); 'This string gets printed'
}
else if(hour>=18 && hour<22){
    console.log('Good evening');
}
else{
    console.log('Good night');
}

var hour=5; //1-24
if(hour>=5 && hour<12){
    console.log('Good morning'); 'This string gets printed'
}
else if(hour>=12 && hour<18){
    console.log('Good afternoon');
}
else if(hour>=18 && hour<22){
    console.log('Good evening');
}
else{
    console.log('Good night');
}

var hour=18; //1-24
if(hour>=5 && hour<12){
    console.log('Good morning');
}
else if(hour>=12 && hour<18){
    console.log('Good afternoon');
}
else if(hour>=18 && hour<22){
    console.log('Good evening'); 'This string gets printed'
}
else{
    console.log('Good night');
}

var hour=22; //1-24
if(hour>=5 && hour<12){
    console.log('Good morning');
}
else if(hour>=12 && hour<18){
    console.log('Good afternoon');
}
else if(hour>=18 && hour<22){
    console.log('Good evening');
}
else{
    console.log('Good night'); 'This string gets printed'
}

//------------------------------------------------------------

var firstNumber=15;
var secondNumber=14;
if(firstNumber==secondNumber){
    console.log('They are the same number');
} 
else if(firstNumber>secondNumber){
    console.log(`${firstNumber} is bigger than ${secondNumber}`); // 15 is bigger than 14
} 
else{
    console.log(secondNumber + ' is bigger than ' + firstNumber);
}

var secondNumber=15;
if(firstNumber==secondNumber){
    console.log('They are the same number'); // They are the same number
} 
else if(firstNumber>secondNumber){
    console.log(`${firstNumber} is bigger than ${secondNumber}`);
} 
else{
    console.log(secondNumber + ' is bigger than ' + firstNumber);
}

var secondNumber=16;
if(firstNumber==secondNumber){
    console.log('They are the same number');
} 
else if(firstNumber>secondNumber){
    console.log(`${firstNumber} is bigger than ${secondNumber}`);
} 
else{
    console.log(secondNumber + ' is bigger than ' + firstNumber); // 16 is bigger than 15
}

//------------------------------------------------------------

var grade=9; //0-10
if(grade>=9){
    console.log('Great work!!');
}
else if(grade<9 && grade>=6){
    console.log("You've done it!");
}
else{
    console.log('You need to do all the exercises again, please try again!');
}
// Great work!!

var grade=7; //0-10
if(grade>=9){
    console.log('Great work!!');
}
else if(grade<9 && grade>=6){
    console.log("You've done it!");
}
else{
    console.log('You need to do all the exercises again, please try again!');
}
// You've done it!

var grade=5; //0-10
if(grade>=9){
    console.log('Great work!!');
}
else if(grade<9 && grade>=6){
    console.log("You've done it!");
}
else{
    console.log('You need to do all the exercises again, please try again!');
}
// You need to do all the exercises again, please try again!