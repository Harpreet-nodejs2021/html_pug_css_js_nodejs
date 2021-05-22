var firstNumber,secondNumber;
firstNumber=10;
secondNumber=2;

let outputAdd=firstNumber+secondNumber;
let outputStatement1="I add " + firstNumber + "+" + secondNumber + " and the result is "+ outputAdd;
console.log(outputStatement1);//I add 10 + 2 and the result is 12

let outputSub=firstNumber-secondNumber;
// Interpolation using backtick
let outputStatement2=`II subtract ${firstNumber} - ${secondNumber} and the result is ${outputSub}`;
console.log(outputStatement2);//II subtract 10 - 2 and the result is 8

let outputMul=firstNumber*secondNumber;
let outputStatement3="III multiple " + firstNumber + " * " + secondNumber + " and the result is " + outputMul;
console.log(outputStatement3);//III multiple 10 * 2 and the result is 20

let outputDiv=firstNumber/secondNumber;
let outputStatement4=`IV divide ${firstNumber} / ${secondNumber} and the result is ${outputDiv}`;
console.log(outputStatement4);//IV divide 10 / 2 and the result is 5

let outputMod=firstNumber%secondNumber;
let outputStatement5="V remainder " + firstNumber + " % " + secondNumber +" and the result is " + outputMod;
console.log(outputStatement5);//V remainder 10 % 2 and the result is 0