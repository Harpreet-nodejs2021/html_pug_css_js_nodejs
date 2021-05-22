function even(evenOddValue) {
    if(evenOddValue % 2 == 0){
        console.log(`${evenOddValue} is even`);
        return true;        
    }else{
        console.log(`${evenOddValue} is odd`);
        return false;        
    }
}

even(2); // 2 is even
even(5); // 5 is odd
even(3); // 3 is odd
even(24); // 24 is even
even(12); // 12 is even

//---------------------------------------------------------------

function showNumbers(start,end) {
    if(typeof start ==='number' && typeof end ==='number'){
        if(start==end){
            console.log(start);
        }else if(start < end){
            for(let beginningPoint = start; beginningPoint <= end ; beginningPoint++){
                console.log(beginningPoint);
            }
        }else{
            for(let beginningPoint = start; beginningPoint >= end; beginningPoint--){
                console.log(beginningPoint);
            }
        }
           
    }
    else
    {
        console.log('Please input numbers');       
    } 
}

showNumbers(0,1000);
showNumbers(1000,0);
showNumbers(100,100);
showNumbers("100",300);

//---------------------------------------------------------------

function getShapePerimiter(base,height) {
    let perimeter = (base + height) * 2
    if(base == height){
        console.log(`${perimeter} is the Square perimeter`);
        if(perimeter>100){
            console.log('The perimeter is to big'); 
        }else{
            console.log('The perimeter is fine');
        }
        return perimeter;
    }
    else
    {
        console.log(`${perimeter} is the Rectangle perimeter`);
        if(perimeter>100){
            console.log('The perimeter is to big'); 
        }else{
            console.log('The perimeter is fine');
        }
        return perimeter;
    }
}

getShapePerimiter(20,30);
// 100 is the Rectangle perimeter
// The perimiter is fine

getShapePerimiter(100,100);
// 400 is the Square perimeter
// The perimiter is to big