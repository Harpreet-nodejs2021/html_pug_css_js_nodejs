var pets = ['Jimmy', 'Marvel','Rocky', 'Tiger'];
// Array

// Call back function - executed on each item of array

// Function less function - It has no name. "myDog" is the Argument/ parameter of this Call Back Function. 
// This call back function is executed for all items of this Array named pets.

pets.forEach(function(myDog){
    console.log(myDog);
});

// Output - Jimmy
// Marvel
// Rocky
// Tiger

var petsUpperCase = pets.map(function(UprCase){
    return UprCase.toUpperCase();
});

console.log(pets); // [ 'Jimmy', 'Marvel', 'Rocky', 'Tiger' ]
console.log(petsUpperCase); // [ 'JIMMY', 'MARVEL', 'ROCKY', 'TIGER' ]

// If we are not returning any value, then we need not use MAP Operation.

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