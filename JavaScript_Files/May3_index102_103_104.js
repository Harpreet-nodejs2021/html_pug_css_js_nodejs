var showName=function(){
    console.log("===============");
    console.log("= Harry Singh =");
    console.log("===============");
}

showName();
showName();

// ===============
// = Harry Singh =
// ===============
// ===============
// = Harry Singh =
// ===============

//----------------------------------------------------------

var evenNumbers = function() {
    for (var evenOddNum = 0; evenOddNum <= 100; evenOddNum++){
        if(evenOddNum % 2 == 0){
            console.log("Even Number = " + evenOddNum);
        }
    }
}

evenNumbers();
evenNumbers();
evenNumbers();
evenNumbers();
evenNumbers();

/* Output Below

Even Number = 0
Even Number = 2
Even Number = 4
Even Number = 6
Even Number = 8
Even Number = 10
Even Number = 12

and so on

Even Number = 96
Even Number = 98
Even Number = 100
Even Number = 0
Even Number = 2
Even Number = 4
Even Number = 6

*/

//----------------------------------------------------------

var fibonacci=function() {

    for( var n = 11, f = 0, f1 = -1, f2 = 1; f < n; /* No Optional final Expression */)
{
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
}
}

fibonacci();
fibonacci();
fibonacci();

/* Output Below
0
1
1
2
3
5
8
13
0
1
1
2
3
*/