var firstNumber=10,secondNumber=20;
console.log("Both variables have the same value: " + (firstNumber == secondNumber));
console.log("Both variables don't have the same value: " + (firstNumber != secondNumber));
// Both variables have the same value: false
// Both variables don't have the same value: true

var average=6, studentAverage=4;

let output1 = (studentAverage >= average);

let output2 = average - studentAverage;

console.log(`This student has a greater or equal average required to pass: ${output1}`);
console.log(`This student is missing ${output2} to pass`);

// This student has a greater or equal average required to pass: false
// This student is missing 2 to pass