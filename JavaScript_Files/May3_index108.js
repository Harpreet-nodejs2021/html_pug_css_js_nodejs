function sort1(number1,number2,number3) {
    if(number1>number2 && number2>number3){
        console.log(number3,number2,number1);
    }
    else if(number1>number3 && number3>number2){
        console.log(number2,number3,number1);
    }
    else if(number2>number1 && number1>number3){
        console.log(number3,number1,number2);
    }
    else if(number2>number3 && number3>number1){
        console.log(number1,number3,number2);
    }
    else if(number3>number2 && number2>number1){
        console.log(number1,number2,number3);
    }
    else if(number1>number2 && number3>number1){
        console.log(number2,number1,number3);
    }
    else{
        console.log('Atleast Two numbers are same');
    }
}

sort1(10,8,25);
// 8 10 25

sort1(15,18,14);
// 14 15 18

sort1(15,18,15); // Atleast Two numbers are same

sort1(15,18,17);
// 15 17 18

//---------------------------------------------------------------

function sort2(number1,number2,number3,highToLow) {
    if(highToLow){
        if(number1>number2 && number2>number3){
            console.log(number1,number2,number3);
        }
        else if(number1>number3 && number3>number2){
            console.log(number1,number3,number2);
        }
        else if(number2>number1 && number1>number3){
            console.log(number2,number1,number3);
        }
        else if(number2>number3 && number3>number1){
            console.log(number2,number3,number1);
        }
        else if(number3>number2 && number2>number1){
            console.log(number3,number2,number1);
        }
        else if(number1>number2 && number3>number1){
            console.log(number3,number1,number2);
        }
        else{
            console.log('Atleast Two numbers are same');
        }
    }else{
        if(number1>number2 && number2>number3){
            console.log(number3,number2,number1);
        }
        else if(number1>number3 && number3>number2){
            console.log(number2,number3,number1);
        }
        else if(number2>number1 && number1>number3){
            console.log(number3,number1,number2);
        }
        else if(number2>number3 && number3>number1){
            console.log(number1,number3,number2);
        }
        else if(number3>number2 && number2>number1){
            console.log(number1,number2,number3);
        }
        else if(number1>number2 && number3>number1){
            console.log(number2,number1,number3);
        }
        else{
            console.log('Atleast Two numbers are same');
        }
    }
}

sort2(10,8,25,true);
// 25 10 8

sort2(15,18,14,true);
// 18 15 14

sort2(15,18,15,true); // Atleast Two numbers are same

sort2(15,18,17,true);
// 18 17 15

sort2(10,8,25,false);
// 8 10 25