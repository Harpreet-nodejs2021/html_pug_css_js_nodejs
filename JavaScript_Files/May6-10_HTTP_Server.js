console.log("I am Happy today!");

// User Interaction - Three Window Methods - Alert, Prompt, & Confirm

// Alert Method

window.alert("Hi There!");

// This feature does not allow user to interact with our webpage until user hit "OK" button

//------------------------------------------

// Prompt Method - Used to collect info from user

// window.prompt("Please enter your name");

// We are requesting User's input because we may require to use the user input somewhere in our code as a parameter value. So assign it to a variable.

let visiterName = window.prompt("Please enter your name");

console.log("Your name is " + visiterName);

// If user do not enter any value and hit the "OK" button, then Empty string/ Null gets printed.

//------------------------------------------

// Confirm Method - Returns boolean value - True for Ok button - False for Cancel Button

// window.confirm("Are you sure you want to quit?")

let shouldQuit = window.confirm("Are you sure you want to quit?")
if(shouldQuit){
    console.log("You are successfully Logged Out")
}
else{
    console.log("See you again!")
}

//------------------------------------------

// Location Interface

console.log(location.href); // It shows location of our current file - We get the URL of our file location + what server/ security protocol we are using - http/ https

// It is recommended to use relative path

//------------------------------------------

// Timers

// Set time out Method - It executes a particular function only once when the specified time expires

const whereAreYou = function(){
    window.alert("Your Session is Timed Out");
}

setTimeout(whereAreYou,5000); // 5000 milli-seconds

setTimeout(function(){
    window.confirm("Do you want to continue?")
}, 3000);

//------------------------------------------

// Set Interval - Calls the particular function after every interval

var myTimer = setInterval(whereAreYou, 8000); // Repeatedly executes the function after every 8 seconds

//------------------------------------------

// Clear Interval Method - It clears the timer after set amount of time.

clearInterval(myTimer);