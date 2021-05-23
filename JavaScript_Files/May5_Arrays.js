var pets = ['Jimmy', 'Marvel','Rocky', 'Tiger'];
// Array

// Call back function - executed on each item of array

// The "forEach" method executes a provided function once for each array element

pets.forEach(function(myDog){
    console.log(myDog);
});

// Output - Jimmy
// Marvel
// Rocky
// Tiger

/*

In the above case, we use the forEach array method to iterate over each element of the pets array.

We pass a function as parameter.

This anonymous function (Name less function) that we pass gets a parameter.

We can use any parameter name. The Call Back Function's Argument/parameter name is "myDog".

Only remember that this parameter is each array item.

*/

// We can add a second parameter to the function to know the item index

pets.forEach(function(myDog, index) {
  console.log('Array Index', index); 
  console.log(myDog);
});

// Here, we can see how the index parameter changes value on each iteration.

/*
Array Index 0
Jimmy

Array Index 1
Marvel

Array Index 2
Rocky

Array Index 3
Tiger
*/

//-------------------------------------------------------

// The "map" method creates a new array with the results of calling a provided function on every element in the calling array.

var petsUpperCase = pets.map(function(petName){
    return petName.toUpperCase();
});

console.log(petsUpperCase); // [ 'JIMMY', 'MARVEL', 'ROCKY', 'TIGER' ] -> new array with all upper cases value.

console.log(pets); // [ 'Jimmy', 'Marvel', 'Rocky', 'Tiger' ] -> the pets array hastn't been modified.

/*

On each iteration the function is going to be executed and we can return a value.

Each returned value is going to be an item on the array that map will return once is over iterating all items. The original array is not modifed.

If we are not returning any value, then we need not use MAP Operation.

*/

//-------------------------------------------------------

let words = ['One', 'Two', 'Three', 'Four'];

// Modifying array during iteration (say During For Loop) will impact the array items being executed.

// "wording" is a parameter/ argument/ variable

// Iteration is done in the below example using IF-Statement.

words.forEach(function(wording){
    console.log(wording);
    // We can apply any loop here for Iterations (IF-Statement/ While loop/ For Loop)
    if(wording == 'Two'){
        words.shift();
    }
});

// Output - One
// Two
// Four

// Index 0 - One
// Index 1 - Two
// Index 2 - Three
// Index 3 - Four

// During the Iteration, when pointer reaches at "index 1 - word - Two", then "SHIFT OPERATOR" removes the first item at index 0 (which is word - One), and now the word "Two" shifts to index 0, and now since the pointer has reached index 1 (which had word "Two" earlier , and now word "Three" at this index 1), so the pointer skips index 1 (since it is already executed in the IF-Statement) and moves to next index (which is index 2 - word "Four") and prints "Four" on the console log.

// Index 0 - Two
// Index 1 - Three
// Index 2 - Four

console.log(words); // [ 'Two', 'Three', 'Four' ] -> Shift operator removed the first item of the Array.

//-------------------------------------------------------

// The "filter" method creates a new array with all elements that pass the test implemented by the provided function

const marks = [1, 2, 3, 4, 7, 10, 8, 5];

const goodGrades = marks.filter(function(grade) {
    return grade >= 7;
});

console.log(goodGrades); // [ 7, 10, 8 ] -> Filtered Array

/*
The iterated item will be part of the returned array only if the functions return a true value.

If the function returns false then the item doesn't get added to the return array.
*/

const topScore = marks.filter(function(grade) {
    return grade === 10;
});

console.log(topScore); // [ 10 ] -> array with only one item

console.log(marks); // Original Array
/*
origina array 
[
    1,  2, 3, 4,
    7, 10, 8, 5
]
*/ 

//-------------------------------------------------------

// The "reduce" method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

/*
The reduce function that we pass as parameter accepts the following parameters:

- The first param is the "accumulator".
- The second value is the "currentValue".
*/

const randomValues = [1, 2, 3, 4, 10, 5];
const result = randomValues.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(result); // 25 We get only one value as final result