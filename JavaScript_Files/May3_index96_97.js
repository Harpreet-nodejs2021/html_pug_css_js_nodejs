for(let startingPoint = 0; startingPoint <= 10000 ; startingPoint++)
{
    if(startingPoint % 10 == 0){
        console.log("Output: " + startingPoint);
    }
}

// 0
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// 100
// 110
// 120

// and so on

// 9960
// 9970
// 9980
// 9990
// 10000

//------------------------------------------------

for (let highestValue = 10000; highestValue >= 0; highestValue--)
{
    if(highestValue % 10==0 && highestValue !== 10000 && highestValue !== 0)
    {
        console.log('**' + highestValue + '**');
    }
    else
    {
        console.log(highestValue);
    }
}

// 10000
// 9999
// 9998
// 9997
// 9996
// 9995
// 9994
// 9993
// 9992
// 9991
// ** 9990 **
// 9989

// and so on

// 21
// **20**
// 19
// 18
// 17
// 16
// 15
// 14
// 13
// 12
// 11
// **10**
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0