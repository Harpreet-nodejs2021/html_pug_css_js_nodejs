// While Loop - Condition is checked first, then the pointer enters/ exit the loop

var Counter = 8; // Initializing the variable

while (Counter < 8)
{
    console.log("Inside While Loop");
} // This loop will not execute

// Do While Loop - Condition is executed atleast once, and then check the condition.

do
{
    console.log("Inside Do-While loop");
} 
while (Counter < 8)

var number = 0;

do {
  console.log('number: ', number);
  number++;
} while (number < 10)

var number = 1000;

do {
  console.log('number: ', number);
  number++;
} while (number < 10)

//--------------------------------------------------

// for loop ("initialization" ; "condition" ; "finalExpression - increment/ decrement state")

for (let i=1, j=1 ; i <=10 && j <=10 ; i++, j++)
{
    console.log("i: " + i);
    console.log("j: " + j); // We can add muliple variables in foor loop
}

//i: 1
//j: 1
//i: 2
//j: 2
//i: 3
//j: 3
//i: 4
//j: 4
//i: 5
//j: 5
//i: 6
//j: 6
//i: 7
//j: 7
//i: 8
//j: 8
//i: 9
//j: 9
//i: 10
//j: 10

for (let i=10; i > 0; i--)
{
    console.log("Decrementing value: " + i); // Reverse order
}

//Decrementing value: 10
//Decrementing value: 9
//Decrementing value: 8
//Decrementing value: 7
//Decrementing value: 6
//Decrementing value: 5
//Decrementing value: 4
//Decrementing value: 3
//Decrementing value: 2
//Decrementing value: 1

//--------------------------------------------------

// The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement

for (let i=10; i > 0; i--)
{
    console.log("Scenario 1: " + i);
    if(i==5){
        break; // To break out of loop
    }
}

//Scenario 1: 10
//Scenario 1: 9
//Scenario 1: 8
//Scenario 1: 7
//Scenario 1: 6
//Scenario 1: 5

for (let index = 0; index < 1000; index++){
    if (index < 10) {
      console.log(index);
    } else {
      break; // So we only show numbers from 0 to 9
    }
  }

//--------------------------------------------------

// Nested Loops - Loop within loop

var Counter = 8;

while(Counter > 5)
{
    for(let i = 10 ; i>0 ; i--)
    {
        console.log("Scenario 2: " + i);
        if(i==8){
            break;
        }
    }
    Counter--;
}

//Scenario 2: 10
//Scenario 2: 9
//Scenario 2: 8
//Scenario 2: 10
//Scenario 2: 9
//Scenario 2: 8
//Scenario 2: 10
//Scenario 2: 9
//Scenario 2: 8

var Counter = 8;

while(Counter > 5)
{
    for(let i = 10 ; i>0 ; i--)
    {
        console.log("Scenario 3: " + i);
        if(i==8){
            break;
        }
    }
    Counter--;
    break;
}

// Scenario 3: 10
// Scenario 3: 9
// Scenario 3: 8