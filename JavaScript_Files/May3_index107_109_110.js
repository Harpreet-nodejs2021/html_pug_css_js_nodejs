function biggerNumber(firstNumber,secondNumber) {
    if(typeof firstNumber ==='number' && typeof secondNumber ==='number' ){
        if(firstNumber > secondNumber){
            console.log(`Number ${firstNumber} is bigger than ${secondNumber}`);
        }else if(firstNumber < secondNumber){
            console.log(`Number ${secondNumber} is bigger than ${firstNumber}`);   
        }else{
            console.log(`Both numbers are same: ${firstNumber}`);
        }
    }else{
        console.log('Error! Please input numbers.')
    }
}

biggerNumber(3,5); // Number 5 is bigger than 3

biggerNumber(6,3);
// Number 6 is bigger than 3

biggerNumber(2,2);
// Both numbers are same: 2

//----------------------------------------------------------------

function validateUser(username,password) {
    if(username=='nacho' && password=='Nerd1979'){
        console.log(`Welcome ${username}, nice to see you again`);
    }else if(username=='pedro' && password=='Batman0217'){
        console.log(`Welcome ${username}, nice to see you again`);
    }else if(username=='marta' && password=='Mother2312'){
        console.log(`Welcome ${username}, nice to see you again`);
    }else{
            console.log('Please input valid credentials');
    }
}


validateUser("nacho","Nerd1979");
// Welcome nacho, nice to see you again

validateUser("nacho","Nerd19799");
// Please input valid credentials

validateUser("nacho","Batman0217");
// Please input valid credentials

validateUser("marta","Mother231");
// Please input valid credentials

//----------------------------------------------------------------

function average(val1,val2,val3,val4,val5) {
    let output = (val1 + val2 + val3 + val4 + val5)/5
    console.log(`The average is ${output}`)
}

average(2,4,10,20,30);
// The average is 13.2