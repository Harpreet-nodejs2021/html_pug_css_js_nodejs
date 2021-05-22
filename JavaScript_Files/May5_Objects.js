// Filter method on Arrays

var grades = [1,7,9,3,4,4,2,5,8,10,6];
var firstClass = grades.filter(function(marks){
    return marks >=6; // It checks conditions. Avoiding Iterations (For Loop/ IF statement, et.)
});

console.log(firstClass); // [ 7, 9, 8, 10, 6 ]

// Objects - Used when working with data

// Key-Value pair (properties & their values)

// Object is defined as "var" or "const" and using Curly brackets.

// Person is an Object. His//her name, age, height, et. are his/her properties.

// We do not need to define properties as var or const as we are defining them in the Object.

var person = {
    myName: 'Harry Singh',
    age: 30,
    // Method of an Object. This function has access to all properties of this Object when we use the keyword "this method"
    greet: function(){
        console.log("Hello! " + this.myName);
    },
    // Another method
    birthday: function(){
        this.age++;    }
};

console.log(person); // Printing the object - Output below

//{
//    myName: 'Harry Singh',
//    age: 30,
//    greet: [Function: greet],
//    birthday: [Function: birthday]
//  }


console.log(person.myName); // Harry Singh
console.log(person.age); // 30

// Objects have Dynamic properties. We will not get any Error.

console.log(person.city); // undefined

person.city = "Winnipeg"; // Dynamically adding a property & its value

console.log(person.city); // Winnipeg

person.greet();// Hello! Harry Singh

person.birthday();

console.log(person.age);// 31

// Defining a function named PRINT

function print(yourInfo){
    console.log("Hello! I am " + yourInfo + " years old");
}

print(person.age); // Calling the function "PRINT" -> Hello! I am 31 years old

// A function is another piece of code located in another memory address. We can see the function call process at low level programming stage/ linear programming

var properties = Object.keys(person);
console.log(properties); // [ 'myName', 'age', 'greet', 'birthday', 'city' ]

console.log(properties[0]); // myName - Property at index 0

var firstProp = properties[0];
console.log(person[firstProp]); // Property's value gets printed - Harry Singh

console.log(properties[3]); // birthday

// Alternative way to print value of property without assigning it to a variable.
console.log(person[properties[3]]); // [Function: birthday]