
for(var num=0; num <= 10; num++){
    console.log("number = " + num);
}

// number = 0
// number = 1
// number = 2
// number = 3
// number = 4
// number = 5
// number = 6
// number = 7
// number = 8
// number = 9
// number = 10

//--------------------------------------------------------

for(var val = 100; val >= 0; val--){
    console.log("value = " + val);
}

// value = 100
// value = 99
// value = 98
// value = 97
// value = 96

// and so on

// value = 3
// value = 2
// value = 1
// value = 0

//--------------------------------------------------------

for (var evenOddNum = 0; evenOddNum < 101; evenOddNum++){
    if(evenOddNum % 2 == 0){
        console.log("Even Number = " + evenOddNum);
    }
}

// Even Number = 0
// Even Number = 2
// Even Number = 4
// Even Number = 6
// Even Number = 8
// Even Number = 10
// Even Number = 12
// Even Number = 14

// and so on

// Even Number = 96
// Even Number = 98
// Even Number = 100

//--------------------------------------------------------

for(var initialValue = 0, sum = 0; initialValue <= 1000; initialValue++){
   sum = sum + initialValue;
   console.log("Total = " + sum);
}

// Total = 0
// Total = 1
// Total = 3
// Total = 6
// Total = 10
// Total = 15
// Total = 21

// and so on

// Total = 497503
// Total = 498501
// Total = 499500
// Total = 500500

//--------------------------------------------------------

for(var initVal = 0, sumOddNum = 0; initVal < 1001; initVal++){
    if(initVal % 2 !== 0){
        sumOddNum = sumOddNum + initVal;
        console.log("Sum of Odd Numbers = " + sumOddNum);
    }
}

// Sum of Odd Numbers = 1
// Sum of Odd Numbers = 4  
// Sum of Odd Numbers = 9  
// Sum of Odd Numbers = 16 
// Sum of Odd Numbers = 25 
// Sum of Odd Numbers = 36 
// Sum of Odd Numbers = 49 
// Sum of Odd Numbers = 64 
// Sum of Odd Numbers = 81 
// Sum of Odd Numbers = 100
// Sum of Odd Numbers = 121
// Sum of Odd Numbers = 144

// and so on

// Sum of Odd Numbers = 247009
// Sum of Odd Numbers = 248004
// Sum of Odd Numbers = 249001
// Sum of Odd Numbers = 250000