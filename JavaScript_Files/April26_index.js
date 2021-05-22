// Arithmetic Operations

// Addition of numbers

var total;
total = 5+10;

console.log("Total: " + total);// Output is 15

var number1, number2;
number1=11;
number2=13;

total=number1+number2;

console.log("Total: " + total);//Output is 24

total=(number1+10)*2;// (11+10) * 2 = 21 * 2 = 42 -> BODMAS RULE

console.log("Total: " + total);

total=number1 + 10*2; // 11 + 10 * 2 = 11 + 20 = 31

console.log("Total: " + total);

// Another Example of Addition - We can add variables values and literal numbers too

const myAge = 20;
const myBrotherAge = 15;
const resultingVal1 = myAge + myBrotherAge;

console.log(resultingVal1 + 2); // Output is 37

// Subtraction - Use variables, literal number and different arithmetic operators
console.log(myAge - myBrotherAge + 8);// 20 - 15 + 8 = 13

const resultingVal2 = myAge - myBrotherAge + 12;

console.log('Result: ' + resultingVal2);// 20 - 15 + 12 = 17

//modulus operator

number2 = 16, number1 = 7;

var mod=number2 % number1;// 16 % 7 = 2 -> Remainder of Division
console.log("Modulus: " + mod);

//increment (++), decrement (--)

//Operend - On which the operation is performed
//Operator - Which performs the operation, say ++ or --,etc.

var number3 = 0, number4 = 10;
number3++;
console.log("number 3:" + number3);//Output is 1

++number3;
console.log("number 3:" + number3);//Output is 2

number4--;
console.log("number 4:" + number4);//Output is 9

--number4;
console.log("number 4:" + number4);//Output is 8

var number5=10, newValuePost=0, newValuePre=0;

//Post fix
newValuePost = number5 ++;// newValuePost=10, number5=10+1=11 -> Variable "newValuePost" is assigned value of variable "number 5" i.e. "10", and since the ++ Operator is after number 5, so number 5 is incremented by 1.

console.log("New Value:" + newValuePost);// 10

console.log("Number 5:" + number5); // 11

//Pre Fix
newValuePre = ++ number5;
// The value of Variable "newValuePre" is incremented by 1, and then vaule of variablle "number5" is assigned to variable "newValuePre".

console.log("Number 5:" + number5);// Output is 1+11 = 12

console.log("New Value:" + newValuePre);// Output is 12

// Assignment Operators

total=20;

total +=10; // Addition assignment - We can add 10 to the current number variable value using the addition assignment operator +=
console.log("Total: " + total);// 20+10 = 30

// Alternatively

total=20;
total = total + 10;
console.log("Total: " + total);// 20+10 = 30

// Subtraction assignment

total=20;

total -=10;
console.log("Total: " + total);// 20 - 10 = 10

// Multiplication assignment

total=20;

total *= 10;
console.log("Total: " + total);// 20 * 10 = 200

// Division assignment

total=20;

total /=10;
console.log(`Total: ${total}`); // 20/10 = 2

// Modulus OR Remainder assignment

total=20;
total %= 2;

console.log(total); // 0