var tableForNine=9;

// Implementing Multiplication Table using while loop
var number = 1;
while (number <= 10){
    let multiplicationTable=tableForNine * number;
    console.log(tableForNine + " times " + number + " equals " + multiplicationTable);
    number++;
}

// 9 times 1 equals 9
// 9 times 2 equals 18
// 9 times 3 equals 27 and so on


//Alternatively using For Loop

//for (var number = 1; number <= 10; number++) 
//{
//   let multiplicationTable=tableForNine * number;
//   console.log(`${tableForNine} times ${number} equals ${multiplicationTable}`);
//}