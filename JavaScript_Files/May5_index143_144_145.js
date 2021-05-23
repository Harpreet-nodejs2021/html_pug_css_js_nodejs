var user = {}; // literal object
console.log(user); // {}
console.log(typeof user); // object

//----------------------------------------------

var user = {
    username:'batman',
    password:'Alfred1960ROCKS!'
};
console.log(user.username); // batman
console.log(user.password); // Alfred1960ROCKS!

user.username = user.username.slice(0,1).toUpperCase() + user.username.slice(1,6);
user.password = user.password.slice(0,6) + ' ' + user.password.slice(10,16);

console.log(user.username); // batman
console.log(user.password); // Alfred ROCKS!

//----------------------------------------------

if(user.username == 'batman' && user.password == 'Alfred1960KPO!'){
    console.log('Welcome back batman!!');
}else{
    console.log("Sorry, you can't enter the Batcave, try again.."); // This string gets printed
}