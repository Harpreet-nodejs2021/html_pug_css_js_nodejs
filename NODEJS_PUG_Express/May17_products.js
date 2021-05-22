// Create the express router to handle our products requests
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('On this call we show a list of products');
});

// For POST Request, we do not need the "id" of the product that we are going to create.

router.post('/', function(req, res) {
  res.send('On this call we create a product');
});

// On postman Tool, type the route - http://localhost:3002/myproducts, and select "POST" option, and then click on "Send", then we see response - "On this call we create a product"

router.put('/:id', function(req, res) {
  res.send('On this call we update a product');
});

// On postman Tool, type the route - http://localhost:3002/myproducts/2, and select "PUT" option, and then click on "Send", then we see response - "On this call we update a product"

// "2" is a random/ dummy number used as an ID

// We have to use a number as an ID since we define our route to include an ID field - "/:id"

router.delete('/:id', function(req, res) {
  res.send('On this call we delete a product');
});

module.exports = router;