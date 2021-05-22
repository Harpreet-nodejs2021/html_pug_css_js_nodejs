
var num=0;
while(num <= 10){
    console.log("Scenario 1: number = " + num);
    num++;
}

// Alternative - Do-While Loop

var num = 0;
do{
    console.log("Scenario 2: number = " + num);
    num++;    
}
while(num < 11){
}

// Scenario 2: number = 0
// Scenario 2: number = 1
// Scenario 2: number = 2
// Scenario 2: number = 3
// Scenario 2: number = 4
// Scenario 2: number = 5
// Scenario 2: number = 6
// Scenario 2: number = 7
// Scenario 2: number = 8
// Scenario 2: number = 9
// Scenario 2: number = 10

//--------------------------------------------------------

var val = 100;
while(val >= 0){
    console.log("Scenario 1: value = " + val);
    val--;
}

// Alternative - Do-While Loop

var val = 100;
do{
    console.log("Scenario 2: value = " + val);
    val--;
}while(val > -1){
}

// Scenario 2: value = 100
// Scenario 2: value = 99
// Scenario 2: value = 98
// Scenario 2: value = 97
// Scenario 2: value = 96

// and so on

// Scenario 2: value = 3
// Scenario 2: value = 2
// Scenario 2: value = 1
// Scenario 2: value = 0

//--------------------------------------------------------

var evenOddNum = 0;
while(evenOddNum < 101){
    if(evenOddNum % 2 == 0){
        console.log("Scenario 1: Even Number = " + evenOddNum);
    }
    evenOddNum++;
}

// Alternative - Do-While Loop

var evenOddNum = 0;
do{
    if(evenOddNum % 2 == 0){
        console.log("Scenario 2: Even Number = " + evenOddNum);
    }
    evenOddNum++;
}while(evenOddNum < 101)

// Scenario 2: Even Number = 0
// Scenario 2: Even Number = 2
// Scenario 2: Even Number = 4
// Scenario 2: Even Number = 6
// Scenario 2: Even Number = 8
// Scenario 2: Even Number = 10
// Scenario 2: Even Number = 12
// Scenario 2: Even Number = 14

// and so on

// Scenario 2: Even Number = 96
// Scenario 2: Even Number = 98
// Scenario 2: Even Number = 100

//--------------------------------------------------------

var initialValue = 0, sum = 0;
while(initialValue <= 1000){
   sum = sum + initialValue
   console.log("Scenario 1: Total = " + sum);
   initialValue++; 
}

// Alternative - Do-While Loop

var initialValue = 0, sum = 0;

do{
    sum = sum + initialValue
    console.log("Scenario 2: Total = " + sum);
    initialValue++; 
 }
 while(initialValue < 1001)

// Scenario 2: Total = 0
// Scenario 2: Total = 1
// Scenario 2: Total = 3
// Scenario 2: Total = 6
// Scenario 2: Total = 10
// Scenario 2: Total = 15
// Scenario 2: Total = 21

// and so on

// Scenario 2: Total = 497503
// Scenario 2: Total = 498501
// Scenario 2: Total = 499500
// Scenario 2: Total = 500500

//--------------------------------------------------------

var initVal = 0, sumOddNum = 0;
while(initVal < 1001){
    if(initVal % 2 !== 0){
        sumOddNum = sumOddNum + initVal;
        console.log("Scenario 1: Sum of Odd Numbers = " + sumOddNum);
    }
    initVal++;
}

// Alternative - Do-While Loop

var initVal = 0, sumOddNum = 0;

do{
    if(initVal % 2 !== 0){
        sumOddNum = sumOddNum + initVal;
        console.log("Scenario 2: Sum of Odd Numbers = " + sumOddNum);
    }
    initVal++;
} while(initVal < 1001)

// Scenario 2: Sum of Odd Numbers = 1
// Scenario 2: Sum of Odd Numbers = 4  
// Scenario 2: Sum of Odd Numbers = 9  
// Scenario 2: Sum of Odd Numbers = 16 
// Scenario 2: Sum of Odd Numbers = 25 
// Scenario 2: Sum of Odd Numbers = 36 
// Scenario 2: Sum of Odd Numbers = 49 
// Scenario 2: Sum of Odd Numbers = 64 
// Scenario 2: Sum of Odd Numbers = 81 
// Scenario 2: Sum of Odd Numbers = 100
// Scenario 2: Sum of Odd Numbers = 121
// Scenario 2: Sum of Odd Numbers = 144

// and so on

// Scenario 2: Sum of Odd Numbers = 247009
// Scenario 2: Sum of Odd Numbers = 248004
// Scenario 2: Sum of Odd Numbers = 249001
// Scenario 2: Sum of Odd Numbers = 250000