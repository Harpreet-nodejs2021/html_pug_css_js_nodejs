var numbers=[]; // Empty Array
for(let i=0; i<1000; i++){
    numbers[i] = i + 1;
}

console.log(numbers);
/*
[
    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99, 100,
   ... 900 more items
 ]
*/

var newNumberArray = numbers.map(function(numIncrement){
    return numIncrement = numIncrement + 10;
})

console.log(newNumberArray);

/*

[
   11,  12,  13,  14, 15,  16,  17,  18,  19,  20,  21,  22,
   23,  24,  25,  26, 27,  28,  29,  30,  31,  32,  33,  34,
   35,  36,  37,  38, 39,  40,  41,  42,  43,  44,  45,  46,
   47,  48,  49,  50, 51,  52,  53,  54,  55,  56,  57,  58,
   59,  60,  61,  62, 63,  64,  65,  66,  67,  68,  69,  70,
   71,  72,  73,  74, 75,  76,  77,  78,  79,  80,  81,  82,
   83,  84,  85,  86, 87,  88,  89,  90,  91,  92,  93,  94,
   95,  96,  97,  98, 99, 100, 101, 102, 103, 104, 105, 106,
  107, 108, 109, 110,
  ... 900 more items
]

*/

for(let position = 0; position < 1000; position++){
    console.log(`index: ${position}, original number: ${numbers[position]}, incremented value: ${newNumberArray[position]}`);
}

/*

index: 0, original number: 1, incremented value: 11
index: 1, original number: 2, incremented value: 12
index: 2, original number: 3, incremented value: 13
index: 3, original number: 4, incremented value: 14
index: 4, original number: 5, incremented value: 15

and so on

index: 701, original number: 702, incremented value: 712
index: 702, original number: 703, incremented value: 713
index: 703, original number: 704, incremented value: 714

and so on

index: 997, original number: 998, incremented value: 1008
index: 998, original number: 999, incremented value: 1009
index: 999, original number: 1000, incremented value: 1010

*/

//------------------------------------------------

var mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

var newMutantsArray = mutants.map(function(mutantName)
{
    if(mutantName == 'Professor X' || mutantName == 'Logan' || mutantName == 'Phoenix' || mutantName == 'Gambit')
    {
        return mutantName = '<3 ' + mutantName;
    }
    else
    {
        return mutantName;
    }
});

console.log(newMutantsArray); 
/* updated mutant array items

[
  '<3 Professor X',
  'Cyclops',
  'Iceman',
  'Angel',
  'Magneto',
  'Beast',
  '<3 Phoenix',
  '<3 Logan',
  '<3 Gambit'
]
*/
console.log(mutants); 
/* original mutant array items
[
  'Professor X', 'Cyclops',
  'Iceman',      'Angel',
  'Magneto',     'Beast',
  'Phoenix',     'Logan',
  'Gambit'
]
*/