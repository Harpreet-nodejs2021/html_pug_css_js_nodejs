// When using "start": "nodemon" in package.json file, then it automatically looks for the default "index.js" file that we created now - May 19, 2021

const express = require('express');

const app = express();

const port = 3000; // Local Host random port #

// Middleware - This code get executed before we hit the route.

const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended:false}); // This piece will be used to access the Post Request's body which is otherwise not part of the URL.

// "bodyParser" - Deprecated

const superheroes = [
    { id:1, name: 'SPIDER-MAN'},
    { id:2, name: 'CAPTAIN MARVEL' },
    { id:3, name: 'HULK'},
    { id:4, name: 'THOR' },
    { id:5, name: 'IRON MAN' },
    { id:6, name: 'DAREDEVIL' },
    { id:7, name: 'BLACK WIDOW' },
    { id:8, name: 'CAPTAIN AMERICA' },
    { id:9, name: 'WOLVERINE' }
];

// We configure Express in order to use PUG. We are telling Express that our view engine should be PUG
app.set('view engine', 'pug');

app.use(express.static('public')); // To access static assets in the public folder = "static" is a function from Express.

// Default route
app.get('/', function(req,res){
    res.render('index', { superheroes: superheroes }); // Returning an Array of JSON Objects
});

// We use "id" to uniquely identify the superheros

app.get('/superheroes/:id', function(req,res){
    const selectedId = req.params.id; // "params" is a keyword - anything that comes after default route is called a params - say, in this case, ":id" is a params OR anything that is after "superheros/" is a params.
    let selectedSuperHeroArray = superheroes.filter(superhero => {
        return superhero.id === +selectedId; // Using Filter function - This function returns an array
    });
    selectedSuperHero = selectedSuperHeroArray[0];
    res.render('superhero', { superhero: selectedSuperHero }); // rendering superhero.pug file
});

app.post('/superheroes', urlEncodedParser, function(req,res){
    const newId = superheroes[superheroes.length-1].id + 1; // Accessing Superheroes Array and adding 1 to the id of the last element of the array.
    const newSuperHero = {
        id: newId, // to generate a New Id
        name: req.body.superhero // Use same name as of the element defined in textbox of file "May26_createNewSuperhero.pug"
    }
    superheroes.push(newSuperHero);
    res.redirect('/'); // New Superhero object gets created/ pushed to the page and page gets refreshed.
}); 

// Another way to write Function Below using Arrow function (=>)

app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});