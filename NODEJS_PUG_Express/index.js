// When using "start": "nodemon" in package.json file, then it automatically looks for the default "index.js" file that we created now - May 19, 2021

const express = require('express');

const mongoClient = require('mongodb').MongoClient; // We installed the MongoDB Client/driver first.
const objectId = require('mongodb').ObjectID;
const app = express();

const port = 3000; // Local Host random port #

const dbURL = "mongodb://localhost:27017"; // Connection String for DB

// Middleware - This code get executed before we hit the route.

const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended:false}); // This piece will be used to access the Post Request's body which is otherwise not part of the URL.

// "bodyParser" - Deprecated

// We use "connect" method to connect to our DB, and use the call back function to print the message if connection is made or reference any error, if comes during the connection.

mongoClient.connect(dbURL,function(err,client){
    console.log('Connected with DB');
})

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

// Establishing connection with DB server to access database to load our application
app.get('/', function(req,res){
    //res.render('index', { superheroes: superheroes }); // Returning an Array of JSON Objects
    mongoClient.connect(dbURL,function(err,client){
        const myDB = client.db('comics'); // Name of DB - "comics"
        const myCollection = myDB.collection('superheroes'); // Name of collection in DB - "superheroes"

        myCollection.find({}).toArray(function(err,myData){
            //console.log(myData);
            client.close();
            res.render('index', { documents: myData });
        }); // We can mention criteria/ Query inside {}, but if we want to access all the data then we need not mention any criteria.
        // The data in DB is extracted in form of an Array using "toArray" method.
        // We need to define a call-back function to return the output that we want to see.
        // We have to close the DB client everytime we are done with accessing the DB. 
    });
});

// We use "id" to uniquely identify the superheros

app.get('/superheroes/:id', function(req,res){
    const selectedId = req.params.id; // "params" is a keyword - anything that comes after default route is called a params - say, in this case, ":id" is a params OR anything that is after "superheros/" is a params.
    /*let selectedSuperHeroArray = superheroes.filter(superhero => {
        return superhero.id === +selectedId; // Using Filter function - This function returns an array
    });
    selectedSuperHero = selectedSuperHeroArray[0];
    res.render('superhero', { superhero: selectedSuperHero }); // rendering superhero.pug file
    */

    mongoClient.connect(dbURL,function(err,client){
        const myDB = client.db('comics'); // Name of DB - "comics"
        const myCollection = myDB.collection('superheroes'); // Name of collection in DB - "superheroes"
        const myQuery = {_id: objectId(selectedId)};

        myCollection.find(myQuery).toArray(function(err,myData){
            // we will provide our query in the find method.
            var selectedSuperHero = myData[0];
            client.close();
            res.render('superhero', {superhero:selectedSuperHero});
        });
    });
});

app.post('/superheroes', urlEncodedParser, function(req,res){
    //const newId = superheroes[superheroes.length-1].id + 1; // Accessing Superheroes Array and adding 1 to the id of the last element of the array.
    const newSuperHero = {
        //id: newId, // to generate a New Id
        name: req.body.superhero, // Use same name as of the element defined in textbox of file "May26_createNewSuperhero.pug"
        description: req.body.description
    }
    //superheroes.push(newSuperHero);
    //res.redirect('/'); // New Superhero object gets created/ pushed to the page and page gets refreshed.
    mongoClient.connect(dbURL,function(err,client){
        const myDB = client.db('comics');
        const myCollection = myDB.collection('superheroes');

        myCollection.insertOne(newSuperHero,(err,result)=>{
            client.close();
            res.redirect('/');
        });
    });
}); 

// Another way to write Function Below using Arrow function (=>)

app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});