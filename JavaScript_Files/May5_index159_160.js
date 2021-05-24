var jeep = {
    brand:'Jeep Wrangler',
    price:'34000'
};
// Using object dynamic properties
console.log('The ' + jeep['brand'] + ' is $ ' + jeep['price']); // The Jeep Wrangler is $ 34000

//-------------------------------------------

var propertiesNames = ['name','price','sold','console'];

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

game.forEach(function(games){
    console.log('Name: '+ games['name']);
    console.log('Price: '+ games[propertiesNames[1]]);
    console.log('Sold: '+ games['sold']);
    console.log('Console: '+ games['console']);
    console.log('\n');
});
/*

for(let i=0;i<game.length;i++){
console.log(game[i][propertiesNames[0]]);
}

for(let i=0;i<game.length;i++){
    console.log(game[i][propertiesNames[1]]);
}

for(let i = 0; i < game.length; i++){
    console.log(game[i]['sold']);
}

for(let i=0; i < game.length; i++){
    console.log(game[i][propertiesNames[3]]);
}
*/

/* Output

Name: Crash Bandicoot N. Sane Trilogy
Price: 1060
Sold: 20
Console: PS4


Name: Lego Marvel Super Heroes
Price: 700
Sold: 25
Console: XBOX


Name: Gta V
Price: 1449
Sold: 30
Console: PS4

and so on

Name: Fifa 17
Price: 1290
Sold: 12
Console: PS4


Name: Resident Evil 7
Price: 1390
Sold: 10
Console: PS4


Name: Dragon Ball XX
Price: 1390
Sold: 25
Console: XBOX

*/