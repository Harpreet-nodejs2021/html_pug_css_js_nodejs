// Create the express router to handle our home requests
var express = require('express'); // We are using Express module
var router = express.Router(); // Built-in function to access router functionality in the Express module

// We use Router Object below - GET Request/ Not Express object
router.get('/', function(req, res) {
  res.send('Welcome to our Site!');
});

// Exporting our module - To use this router functionality in other files
module.exports = router; // This makes our code in this file visible to other files