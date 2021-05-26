// We can define Functions within functions but it is not recommended

function print(){
    console.log("Hello");

    function greet(){
        console.log("World");
    }

    greet();
}

// greet(); // This will throw error -> Function "greet" is accessible within the function "print".

//------------------------------------------

// Arguments - It is an Array-Like Object

function addition(){
    console.log("Arguments : " + arguments);
    console.log("Number of Arguments : " + arguments.length);
    console.log(arguments[0] + arguments[1]);
}

addition(3,5); // Output below - 

// [Arguments] { '0': 3, '1': 5 }
// 2 -> Length of two
// 8 -> Sum of all arguments

function sampleAdd(){
    console.log(arguments);
    console.log(arguments.length);
    let total = 0;
    for(let count = 0; count < arguments.length; count++)
    {
        total = total + arguments[count];
    }
    console.log("Sum of numbers: " + total);
}

sampleAdd(10,6,8,7,3,1); 

// [Arguments] { '0': 10, '1': 6, '2': 8, '3': 7, '4': 3, '5': 2 }
// 6 -> Length of six
// 35 -> Sum of all arguments 

// Recursion -> Function calling itself -> Repeatedly calling a function -> Say in case of finding factorial of a number.