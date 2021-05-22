var femaleStudents = ['Lisa','Colleen','Cindy','Chloe','Rachel'];
var maleStudents = ['Murray','Joe','Rob','Glenn','Patrick'];

var students = femaleStudents.concat(maleStudents);

console.log(students);
/*
[
    'Lisa',   'Colleen',
    'Cindy',  'Chloe',
    'Rachel', 'Murray',
    'Joe',    'Rob',
    'Glenn',  'Patrick'
  ]
*/

var sortStudents=students.sort();

console.log(sortStudents);

/*
[
  'Chloe',   'Cindy',
  'Colleen', 'Glenn',
  'Joe',     'Lisa',
  'Murray',  'Patrick',
  'Rachel',  'Rob'
]
*/

// Each femaleStudents name using numeric indexes

for(let index = 0; index < femaleStudents.length; index++)
{
    console.log(femaleStudents[index]);
}

/*
Lisa
Colleen
Cindy
Chloe
Rachel
*/

// Each maleStudents name using while Loop

let initialNum = 0;
while(initialNum < maleStudents.length)
{
    console.log(maleStudents[initialNum]);
    initialNum++;
}

/*

Murray
Joe
Rob
Glenn
Patrick

*/

// Each students name using for loop

for(let startingNum = 0; startingNum < students.length; startingNum++)
{
    console.log(students[startingNum]);
}

/*

Chloe
Cindy
Colleen
Glenn
Joe
Lisa
Murray
Patrick
Rachel
Rob

*/

//-------------------------------------------------

var mutants = ['Professor X','Cyclops','Iceman','Angel','Beast','Phoenix','Logan'];

if (mutants.indexOf('Logan') > -1 && mutants.indexOf('Professor X') > -1) 
{
    console.log('We love X-Men'); // This string gets printed
}
else 
{
    console.log('X-Men sucks'); 
}    

if (mutants.indexOf('Gambit') > -1) 
{
    console.log('We love X-Men');
} 
else 
{
    console.log('X-Men sucks'); // This string gets printed
}

//-------------------------------------------------

var mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

// First part

for (let i=0; i < mutants.length; i++){
    console.log(mutants[i]);
    if(mutants[i]=='Magneto'){
        break;
    }
}
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto

// Second part

let position = mutants.indexOf('Magneto'); // 4

for(let j = position; j< mutants.length; j++){
    mutants[j] =  mutants[j+1];
}

console.log(mutants);

/*

[
  'Professor X', 'Cyclops',
  'Iceman',      'Angel',
  'Beast',       'Phoenix',
  'Logan',       'Gambit',
  undefined
]

*/

mutants.pop(); // To remove the last undefined Array element

console.log(mutants);

/*

[
  'Professor X',
  'Cyclops',
  'Iceman',
  'Angel',
  'Beast',
  'Phoenix',
  'Logan',
  'Gambit'
]

*/

for(let k = 0; k < mutants.length; k++)
{
    console.log(mutants[k].toUpperCase(), '-> index: ' + k);
}

/*

PROFESSOR X -> index: 0
CYCLOPS -> index: 1
ICEMAN -> index: 2
ANGEL -> index: 3
BEAST -> index: 4
PHOENIX -> index: 5
LOGAN -> index: 6
GAMBIT -> index: 7

*/

//-------------------------------------------------

var numbers=[], result = 0;

for(let initNum = 0; initNum < 1000; initNum++){
    numbers[initNum] = initNum + 1;
    console.log(numbers[initNum]); // 1,2,3,4,5,6----999,1000

    result += numbers[initNum];
    console.log(result); // 1,3,6,10,15,21,----499500,500500
}
if(result==500500){
    console.log('Good job!!!');// This string gets printed
}else{
    console.log('Take a look to see if something is wrong');
}