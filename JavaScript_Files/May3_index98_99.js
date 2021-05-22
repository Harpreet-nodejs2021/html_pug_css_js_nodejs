for(var initialValue = 0, sum = 0; initialValue <= 1000; initialValue++){
    sum = sum + initialValue;
    if(sum>400){
        console.log("Total = " + sum);
        break;
    }
 }

// Total = 406

//------------------------------------------------

for (var evenOddNum = 0 , sumOfEvenNum = 0, countOfEvenNum = 0; evenOddNum < 1001; evenOddNum++)
{
    if(evenOddNum % 2 == 0){
        sumOfEvenNum = sumOfEvenNum + evenOddNum;
        countOfEvenNum++;
        if(countOfEvenNum == 20){
            break;
        }
    }
}
console.log("Sum of Even Numbers = " + sumOfEvenNum); // 380