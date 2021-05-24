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

// game - Array
// games - Objects assigned as items to the game array

game.forEach(function(games){
    console.log('name: '+ games.name);
    console.log('price: '+ games.price);
    console.log('sold: '+ games.sold);
    console.log('console: '+ games.console);
    console.log('\n');
});

/*
name: Crash Bandicoot N. Sane Trilogy
price: 1060
sold: 20
console: PS4


name: Lego Marvel Super Heroes
price: 700
sold: 25
console: XBOX


name: Gta V
price: 1449
sold: 30
console: PS4

and so on

name: Resident Evil 7
price: 1390
sold: 10
console: PS4


name: Dragon Ball XX
price: 1390
sold: 25
console: XBOX

*/

//-------------------------------------------

var game = [
    {
        name: 'Crash Bandicoot N. Sane Trilogy', 
        price: 1060, 
        sold: 20, 
        console: 'PS4',
        // Object Method below
        showDetail: function(){
            console.log('name: '+ this.name);
            console.log('price: '+ this.price);
            console.log('sold: '+ this.sold);
            console.log('console: '+ this.console);
        }
    },
    {
        name: 'Lego Marvel Super Heroes',
        price: 700,
        sold: 25,
        console: 'XBOX',
        showDetail: function(){
            console.log('name: '+ this.name);
            console.log('price: '+ this.price);
            console.log('sold: '+ this.sold);
            console.log('console: '+ this.console);
        }
    },
    {
        name: 'Gta V',
        price: 1449,
        sold: 30,
        console: 'PS4',
        showDetail: function(){
            console.log('name: '+ this.name);
            console.log('price: '+ this.price);
            console.log('sold: '+ this.sold);
            console.log('console: '+ this.console);
        }    
    },
    {
        name: 'Mortal Kombat Xl',
        price: 1190,
        sold: 34,
        console: 'PS4',
        showDetail: function(){
            console.log('name: '+ this.name);
            console.log('price: '+ this.price);
            console.log('sold: '+ this.sold);
            console.log('console: '+ this.console);
        }
    },
    {
        name: 'Gta V',
        price: 1250,
        sold: 60,
        console: 'XBOX',
        showDetail: function(){
            console.log('name: '+ this.name);
            console.log('price: '+ this.price);
            console.log('sold: '+ this.sold);
            console.log('console: '+ this.console);
        }
    },
    {
        name: 'Fifa 2017',
        price: 890,
        sold: 15,
        console: 'PS4',
        showDetail: function(){
            console.log('name: '+ this.name);
            console.log('price: '+ this.price);
            console.log('sold: '+ this.sold);
            console.log('console: '+ this.console);
        }
    },
    {
        name: 'Uncharted 4',
        price: 950,
        sold: 30,
        console: 'PS4',
        showDetail: function(){
            console.log('name: '+ this.name);
            console.log('price: '+ this.price);
            console.log('sold: '+ this.sold);
            console.log('console: '+ this.console);
        }
    },
    {
        name: 'Mortal Kombat Xl',
        price: 940,
        sold: 30,
        console: 'XBOX',
        showDetail: function(){
            console.log('name: '+ this.name);
            console.log('price: '+ this.price);
            console.log('sold: '+ this.sold);
            console.log('console: '+ this.console);
        }
    },
    {
        name: 'Need For Speed',
        price: 790,
        sold: 10,
        console: 'PS4',
        showDetail: function(){
            console.log('name: '+ this.name);
            console.log('price: '+ this.price);
            console.log('sold: '+ this.sold);
            console.log('console: '+ this.console);
        }
    },
    {
        name: 'Lego Batman',
        price: 1000,
        sold: 18,
        console: 'PS4',
        showDetail: function(){
            console.log('name: '+ this.name);
            console.log('price: '+ this.price);
            console.log('sold: '+ this.sold);
            console.log('console: '+ this.console);
        }
    },
    {
        name: 'Fifa 17',
        price: 1290,
        sold: 12,
        console: 'PS4',
        showDetail: function(){
            console.log('name: '+ this.name);
            console.log('price: '+ this.price);
            console.log('sold: '+ this.sold);
            console.log('console: '+ this.console);
        }
    },
    {
        name: 'Resident Evil 7',
        price: 1390,
        sold: 10,
        console: 'PS4',
        showDetail: function(){
            console.log('name: '+ this.name);
            console.log('price: '+ this.price);
            console.log('sold: '+ this.sold);
            console.log('console: '+ this.console);
        }
    },
    {
        name: 'Dragon Ball XX',
        price: 1390,
        sold: 25,
        console: 'XBOX',
        showDetail: function(){
            console.log('name: '+ this.name);
            console.log('price: '+ this.price);
            console.log('sold: '+ this.sold);
            console.log('console: '+ this.console);
        }
    }
];

game.forEach(function(games){
    games.showDetail(); // Calling "showDetail" method for each games object
    console.log('\n');
});

/*

name: Crash Bandicoot N. Sane Trilogy
price: 1060
sold: 20
console: PS4


name: Lego Marvel Super Heroes
price: 700
sold: 25
console: XBOX


name: Gta V
price: 1449
sold: 30
console: PS4

and so on

name: Fifa 17
price: 1290
sold: 12
console: PS4


name: Resident Evil 7
price: 1390
sold: 10
console: PS4


name: Dragon Ball XX
price: 1390
sold: 25
console: XBOX

*/