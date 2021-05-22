// Scenario 1 - Hoisting

// In javascript, we can define our variable anywhere in the program.

console.log(myInfo);
var myInfo = "Harry"; // undefined variable - Variable defined afterwards

// Scenario 2 - Variable defined beforehand

console.log(myInfo); // Now the value of the variable will get printed - "Harry"

// Scope of variable - global & local

{
    var city = "Winnipeg"; // Variable defined as Global Scope - "var"
    let country = "Canada"; // Variable defined as Local Scope - "let" - It can not be accessed out of scope.
}

// Scope <-> Block -> Whatever is defined within the curly brackets becomes a block/ scope.

// Below function is like a block of code.

// Anything defined outside the function as "var" can be accessed from the function as well.

function printCity(){
    console.log(city);
    city = "Calgary"; // Overriding the city name
    //console.log(country); 
    // We will get error because we are trying to access the local variable - defined within the scope.

    let country = "Ireland"; // local variable in scope of this function
    console.log(country); 
    address = "100 Main St"; // By default, the identified of variable is "var". 
}

printCity(); // function call - Output -> "Winnipeg" & Ireland

console.log(city); // Output - Calgary

console.log(address); // Output - 100 Main St

function assignInfo(){
    // Defining an Object in a function
    var person = {
        myName : 'Harry Singh',
        myAge : 30
    };
    console.log(person); // { myName: 'Harry Singh', myAge: 30 }
}

//console.log(person); // This throw error

assignInfo(); // Function call