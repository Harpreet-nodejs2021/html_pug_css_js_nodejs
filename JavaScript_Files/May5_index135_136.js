var mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

mutants.forEach(function(mutantName,index){
    console.log('Item Position :',index);
    console.log(mutantName);
});

/*

Item Position : 0
Professor X
Item Position : 1
Cyclops
Item Position : 2
Iceman
Item Position : 3
Angel
Item Position : 4
Magneto
Item Position : 5
Beast
Item Position : 6
Phoenix
Item Position : 7
Logan
Item Position : 8
Gambit

*/

//---------------------------------------------

let indexA,indexB,indexC;

mutants.forEach(function(mutantName,index){
    //console.log(mutantName);
    if(mutantName == 'Iceman'){
        indexA = index;
    }else if(mutantName == 'Logan'){
        indexB = index;
    }else if(mutantName == 'Phoenix'){
        indexC = index;
    }
})

console.log(`Final String: ${mutants[indexA]}, ${mutants[indexB]} and ${mutants[indexC]}`); // Final String: Iceman, Logan and Phoenix