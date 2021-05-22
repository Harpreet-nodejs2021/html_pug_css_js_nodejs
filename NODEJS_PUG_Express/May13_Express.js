/*
var calculator = function(){

}

// Below is another way to write a function (where no keyword "function" is required)

// Arrow Function

var calculator = () => ({

});
*/

// Below are the standard steps to create a Web Server using Express.

const express = require('express');
// require(module name)

const app = express();
// URL - Route
// default route represented by forward slash (check below - app.get('/', followed by our function))

// We use "request" and "response" as two parameters to our function

// We can test our "GET Request" using browser. Just type "localhost:3000" on the browser

app.get('/', function(request, response){
    response.send("Hello! We received your request"); // Static string content

    // response.json("Hello! This is JSON Response"); 
    // Above command "response.json" is used to return info in JSON format which we can use in PUG.
});

app.post('/',function(request, response){
    response.send("Hello! You sent us a post request")
});

app.put('/',function(request, response){
    response.send("Hello! You sent us a put request")
});    

app.delete('/',function(request, response){
    response.send("Hello! You sent us a delete request")
});

// Next level folder named "product"

app.get('/product',function(request, response){
    response.send("Hello! You sent us a get request at next level folder")
});

app.post('/product',function(request, response){
    //response.send("Hello! You sent us a post request at next level folder")
    response.json({productName: 'storage', category: 'Outdoor storage'});
});

/*

We can not use browser to test other API requests such as post, put & delete, rather we use Postman Application.

We are running the server locally.

Our server is running at "http://localhost:3000/"

I see below output on Postman

{
    "productName": "storage",
    "category": "Outdoor storage"
}

*/

app.put('/product',function(request, response){
    response.send("Hello! You sent us a put request at next level folder")
});    

app.delete('/product',function(request, response){
    response.send("Hello! You sent us a delete request at next level folder")
});

// We define local host Port # that we want our server shall listen to.

app.listen(3000,function(){
    console.log("App listening at port 3000");
});

/* Output shown in Terminal till this point

JUST-EAT+harpreet.sidhu2@DESKTOP-EHD2CTA MINGW64 /c/Git/html_css_nodejs_mongodb/NODEJS_PUG_Express (master)
$ npm start

> nodejs_pug_express@1.0.0 start C:\Git\html_css_nodejs_mongodb\NODEJS_PUG_Express
> node May13_Express.js

App listening at port 3000

*/