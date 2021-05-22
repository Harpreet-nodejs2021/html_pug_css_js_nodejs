//"start": "node May17_ExpressMount.js" - Mention this statement in the package.json file to execute this file

const express = require('express');
// require(module name)

const app = express();

// Our motive is to create a web server that accepts Requests

// For making the interface, we need to define a Route/URL

// Route <-> URL

// Mounting files together

const home = require('./May17_home');
const products = require('./May17_products');

// Likewise, we have to add other js file that we want to mount in this file. We could have 20 routes that we want to mount. We do not want our entry point file to clutter.

//----------------------------------------

// Set view engine to PUG

app.set('view engine', 'pug');

// PUG is a type of view template engine

app.get('/', function(req,res){
    res.render('May17_TempEngine', {mytitle: 'Hey', message:'I like to code'});
});

// JSON format -> {content}

// Name of the file that we want to render, JSON Object that we want to display

// Using the Render method - to render our HTML pages/ to link JSON Object with the PUG file

//----------------------------------------

app.use('/', home);
app.use('/myproducts', products);

// Call back function below
app.get('/', function(request, response){
    response.send('Hello User');
})

// Get: /products - list all products
// Get: /products/id - details of a particular product

/*
We use POST Request for creating new products on our website

post/ products - create a new product

put/ products/id - update the product by ID, for example, /product/1 (id of the product is 1)

delete/ products/id - delete the product by Id
*/ 

// We do not want all the routes in one "index.js"/ Start entry point file, so we use EXPRESS Router

//----------------------------------------

// Define a local host/ port where we want to listen the requests

app.listen(3002,function(){
    console.log('We are listening to your request');
})

/*
JUST-EAT+harpreet.sidhu2@DESKTOP-EHD2CTA MINGW64 /c/Git/html_css_nodejs_mongodb/NODEJS_PUG_Express (master)
$ npm start

> nodejs_pug_express@1.0.0 start C:\Git\html_css_nodejs_mongodb\NODEJS_PUG_Express
> node May17_Express.js

We are listening to your request

*/

// On typing "http://localhost:3002/" OR "localhost:3002" on web browser, and we will see "Hello User" response on the web page.

// We can use other local hosts such as 8080 but sometimes these ports are reserved for other applications so we may not be able to use it.