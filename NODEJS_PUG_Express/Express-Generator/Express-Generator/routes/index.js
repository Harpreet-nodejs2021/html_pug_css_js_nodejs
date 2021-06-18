var express = require('express');
var dotenv = require('dotenv');
var router = express.Router();

/*

//------------------------------------------------------------------

// Importing Mongoose Module
var mongoose = require('mongoose'); // Here, the variable name and module name can be different.

// Connection String - DB name "june_db"
var mongoDB = 'mongodb://127.0.0.1/june_db'; // Setting up default DB connection and defining URL
mongoose.connect(mongoDB,{useNewUrlParser:true, useUnifiedTopology:true});

// Get the default connection
var db = mongoose.connection;

// Event handling - in case of an error in connecting to DB using "error" method -> We will see below message on the console
db.on('error', console.error.bind(console, 'MongoDB Connection Error'));

// Define Schema for using ODM/ORM to connect to DB.
// Mongoose has a class called "Schema" to support ODM.

// We can define multiple schema but we are creating just one below.

var Schema = mongoose.Schema;

// JSON Format Schema - To define structure of our data

// new -> Constructor - It makes "SuperHeroSchema" an Object.

var SuperHeroSchema = new Schema({
  name: String,
  movies: Number
});
// "name" and "movies" are properties of Object "SuperHeroSchema"

// Creating model using "model" method

var superheroModel = mongoose.model('superheroCollection',SuperHeroSchema);

// GET home page
router.get('/', function(req, res, next) {
  // "myData" - object/ variable of type "superheroModel"
  var myData = new superheroModel({name:'HappySingh', movies:2});

  // myData.save(); To save info in DB

  // We can also write a call back function as below.
  myData.save(function(err){
    if(err){console.log('err');}
  });

  superheroModel.find({'name':'HappySingh'}, 'name movies', function(err,result){
    console.log(result);
  });
  res.render('index', { title: 'Express' });
});

//------------------------------------------------------------------

*/

var mongoose = require('mongoose');
dotenv.config();

// var mongoDB = 'mongodb://127.0.0.1/june_db'; 

/* MongoDB Atlas Connection String

mongodb+srv://TestUserHappy:<password>@cluster0.hxxgu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

-> Replace <password> with the password for the TestUserHappy user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.

*/

// Connecting our Application with Cloud MongoDB server. Earlier we used local MongoDB Server.

// var mongoDB = 'mongodb+srv://TestUserHappy:<password>@cluster0.hxxgu.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityb';

// Use config variables created on Heroku for our application instead of hard coded URL for DB connection.

var mongoDB = process.env.MongoDB_URI;

console.log(mongoDB); // Just to see if the connection is made to local MongoDB.

mongoose.connect(mongoDB,{useNewUrlParser:true, useUnifiedTopology:true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Connection Error'));

var Schema = mongoose.Schema;

const breakFast = new Schema({
  egg: {
    type: Number,
    min: [6, 'Too few eggs'], // We defined Validation Rules (Mongoose Built-In -> "min" and "max" rules)
    max: 12
  },
  salad:{
    type:Number,
    required:[true,'Salad is Healthy'] // We defined Validation Rule
  }
});

const breakFastModel = db.model('MyBreakfast',breakFast);

// GET home page
router.get('/', function(req, res, next) {
  // myRecord -> Object
  const myRecord = new breakFastModel({
    egg:7, // we will get validation error if the number of eggs is less than 6 or more than 12
    salad:1
  });

  /* To Save data in DB

  myRecord.save(function(err){
    if(err){console.log('err');}
  });
  
  */

  let error = myRecord.validateSync(); // Try-catch error block
  console.log(error);

  res.render('index', { title: 'Happy Singh Express' });
});

module.exports = router;