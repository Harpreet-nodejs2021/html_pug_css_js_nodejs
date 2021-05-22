var students=[]; // Empty Array

students[0]='Jackson';
students[1]='Noah';
students[2]='Liam';
students[3]='Lucas';
students[4]='Benjamin';
students[5]='Oliver';

for(let i=0; i < students.length; i++){
    console.log(`index ${i} : ${students[i]}`);
}

/*
Output as follows:

index 0 : Jackson
index 1 : Noah
index 2 : Liam
index 3 : Lucas
index 4 : Benjamin
index 5 : Oliver
*/

//----------------------------------------------------------

var games = ['Grand Theft Auto V',
    'The Last of Us Remastered',
    'Persona 5',
    'Metal Gear Solid V',
    'Uncharted 4',
   'Journey',
    'Bloodborne',
    'The Witcher 3',
    'Diablo III'];

games[0]='FIFA 18'; // Replacing Array Item
games[3]='FIFA 17';
games[2]='FIFA 16';

console.log(games);

/*
Output as follows:

[
  'FIFA 18',
  'The Last of Us Remastered',
  'FIFA 16',
  'FIFA 17',
  'Uncharted 4',
  'Journey',
  'Bloodborne',
  'The Witcher 3',
  'Diablo III'
]

*/

//----------------------------------------------------------

var ingredients = ['Pork',
    'Pomato',
    'Chicken',
    'Lettuce',
    'Beef',
    'Carrots',
    'Cucumber'];

var vegetarian=[];

vegetarian[0]='Pomato';
vegetarian[1]='Lettuce';
vegetarian[2]='Carrots';
vegetarian[3]='Cucumber';

console.log(ingredients);
/*
[
    'Pork',     'Pomato',
    'Chicken',  'Lettuce',
    'Beef',     'Carrots',
    'Cucumber'
  ]
*/

console.log(vegetarian); // [ 'Pomato', 'Lettuce', 'Carrots', 'Cucumber' ]