var myName=null;//name--> theName 
if(myName){
    console.log(`Your name is ${myName}`);
}
else{
    console.log('Please input a valid name'); // This string gets printed
}

var myName='Happy';
if(myName){
    console.log(`Your name is ${myName}`); // This string gets printed
}
else{
    console.log('Please input a valid name');
}
// Your name is Happy

//------------------------------------------------

var balance=0;
if(balance && balance>0){
    console.log("Your balance is $" + balance);
}
else{
    console.log("Sorry, no money in your account"); // This string gets printed
}

var balance=100;
if(balance && balance>0){
    console.log("Your balance is $" + balance); // This string gets printed
}
else{
    console.log("Sorry, no money in your account");
}