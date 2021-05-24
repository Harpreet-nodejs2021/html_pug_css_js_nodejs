var consoleXBOX = 'XBOX';
var game = [
    {
        name: 'Crash Bandicoot N. Sane Trilogy',
        price: 1060,
        sold: 20,
        console: 'PS4'
    },
    {
        name: 'Lego Marvel Super Heroes',
        price: 700,
        sold: 25,
        console: 'XBOX'
    },
    {
        name: 'Gta V',
        price: 1449,
        sold: 30,
        console: 'PS4'    
    },
    {
        name: 'Mortal Kombat Xl',
        price: 1190,
        sold: 34,
        console: 'PS4'
    },
    {
        name: 'Gta V',
        price: 1250,
        sold: 60,
        console: 'XBOX'
    },
    {
        name: 'Fifa 2017',
        price: 890,
        sold: 15,
        console: 'PS4'
    },
    {
        name: 'Uncharted 4',
        price: 950,
        sold: 30,
        console: 'PS4'
    },
    {
        name: 'Mortal Kombat Xl',
        price: 940,
        sold: 30,
        console: 'XBOX'
    },
    {
        name: 'Need For Speed',
        price: 790,
        sold: 10,
        console: 'PS4'
    },
    {
        name: 'Lego Batman',
        price: 1000,
        sold: 18,
        console: 'PS4'
    },
    {
        name: 'Fifa 17',
        price: 1290,
        sold: 12,
        console: 'PS4'
    },
    {
        name: 'Resident Evil 7',
        price: 1390,
        sold: 10,
        console: 'PS4'
    },
    {
        name: 'Dragon Ball XX',
        price: 1390,
        sold: 25,
        console: 'XBOX'
    }
];

var gamesOnXBOX = game.filter(function(games){
    return games.console === consoleXBOX;
});

console.log('Games played on XBOX: ', gamesOnXBOX); // Filtered Array Below

/*

Games played on XBOX:  
[
  { name: 'Lego Marvel Super Heroes', price: 700, sold: 25, console: 'XBOX'},
  { name: 'Gta V', price: 1250, sold: 60, console: 'XBOX' },
  { name: 'Mortal Kombat Xl', price: 940, sold: 30, console: 'XBOX' },
  { name: 'Dragon Ball XX', price: 1390, sold: 25, console: 'XBOX' }
]

*/

//----------------------------------------------------

var gamesOnPS4 = game.filter(function(games){
    return games.console !== consoleXBOX;
});

console.log('Games played on PS4: ', gamesOnPS4);

/*

Games played on PS4:  
[
  { name: 'Crash Bandicoot N. Sane Trilogy', price: 1060, sold: 20, console: 'PS4'},
  { name: 'Gta V', price: 1449, sold: 30, console: 'PS4' },
  { name: 'Mortal Kombat Xl', price: 1190, sold: 34, console: 'PS4' },
  { name: 'Fifa 2017', price: 890, sold: 15, console: 'PS4' },
  { name: 'Uncharted 4', price: 950, sold: 30, console: 'PS4' },
  { name: 'Need For Speed', price: 790, sold: 10, console: 'PS4' },
  { name: 'Lego Batman', price: 1000, sold: 18, console: 'PS4' },
  { name: 'Fifa 17', price: 1290, sold: 12, console: 'PS4' },
  { name: 'Resident Evil 7', price: 1390, sold: 10, console: 'PS4' }
]

*/

var budget = 0;

for (let i = 0; i < gamesOnPS4.length; i++){
    budget = budget + gamesOnPS4[i].price;
}

console.log('I need ' + budget + ' CAD to get all these PS4 great games!!'); // I need 10009 CAD to get all these PS4 great games!!

var gameNames = [];
for(let index = 0; index < game.length; index++){
    gameNames.push(game[index].name);
}
console.log(gameNames);

/*

[
  'Crash Bandicoot N. Sane Trilogy',
  'Lego Marvel Super Heroes',
  'Gta V',
  'Mortal Kombat Xl',
  'Gta V',
  'Fifa 2017',
  'Uncharted 4',
  'Mortal Kombat Xl',
  'Need For Speed',
  'Lego Batman',
  'Fifa 17',
  'Resident Evil 7',
  'Dragon Ball XX'
]

*/

var gamePrices=[];

game.forEach(function(games){
    gamePrices.push(games.price);
});

console.log(gamePrices);

/*
[
  1060,  700, 1449, 1190,
  1250,  890,  950,  940,
   790, 1000, 1290, 1390,
  1390
]
*/