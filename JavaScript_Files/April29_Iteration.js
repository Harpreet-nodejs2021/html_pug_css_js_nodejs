// Print numbers 1 to 10

console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// Iteration - Using Loops such as While Loops, Do While Loops & For Loops

// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true

// The condition is evaluated before executing the statement.

/*
while (condition) {
    console.log('This code is going to be executed until the condition is false');
  }
*/

var number=0;
while (number <= 10){
    console.log(number++); // Output is 0 to 10
}
console.log('Loop Ended');

// Alternative way

var input = 1;
while (input < 11 ){
console.log(input); // Output is 1 to 10
input++;
}

// Alternative way - For Loop

for(number = 5; number <= 14; number++){
    console.log(number); // Output is 5 to 14
}

for(number = 3; number <= 11; number++){
    console.log('True'); // Output is True
}
console.log('False'); // Output is False - when we are out of loop

// Alternative Example - Infinite loop

/*
var input = 2;
while (input <= 8 ){
    console.log(input);
    if(input == 5){
        input = 0; // Counter assigned to 0, and Infinite loop begins and print 0 to 5 continuously.
    }
    else{
        input++; // Press fn + C OR ctrl + C to exit the loop
    }
}
*/

/* Commenting a piece of code */