var tvSeries="game of thrones";
var firstChar,secondChar,thirdChar;
firstChar=tvSeries.charAt(0);
secondChar=tvSeries.charAt(5);
thirdChar=tvSeries.charAt(8);

var resultingString = firstChar.concat(secondChar + thirdChar);

resultingString = resultingString.toUpperCase();
console.log(`the final result is: ${resultingString}`); // the final result is: GOT

var fourthChar = tvSeries.charAt(1000);
console.log(`Character at index 1000 is: ${fourthChar}`); // Result is Blank

// Reversing the string

var greeting = "HELLO";

charOne = greeting.charAt(0);
charTwo = greeting.charAt(1);
charThree = greeting.charAt(2);
charFour = greeting.charAt(3);
charFive = greeting.charAt(4);

var reverseString = charFive.concat(charFour + charThree + charTwo + charOne);

// Alternatively, we can use For Loop

// var reverseString = "";

//for (var strIndex = 0 ; strIndex < greeting.length; strIndex++) 
//{
//    reverseString = greeting[strIndex] + reverseString;
//};

console.log(reverseString); //OLLEH

reverseString = reverseString.toLowerCase();
console.log("the final result is: " + reverseString); //the final result is: olleh