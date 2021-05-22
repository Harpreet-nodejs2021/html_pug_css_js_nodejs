const meaningOfLife = function(){
    return 42;
}

console.log(`The meaning of life is: ${meaningOfLife()}`);

// The meaning of life is: 42

//---------------------------------------------------

var getUserID = function(){
    return 50;
}

var isUserValid = function(){
    if(getUserID() > 30)
    {
        return true;
    }
    else
    {
        return false;
    }
}

if(isUserValid()){
    console.log('User valid'); // This string gets printed
}else{
    console.log('User not valid');
}