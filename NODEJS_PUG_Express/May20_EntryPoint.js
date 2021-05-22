// Write "start": "node May20_EntryPoint.js" on the package.json file to execute this file as Entry Point for our execution, otherwise, we are starting with "nodemon" module afterwards

const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', function(req,res){
    res.render('May20_index', {mytitle: 'Hey', message:'I like to code'});
});

// New route defined below for the first page of our website to help our web server to return a response.

app.get('/firstpage', function(req,res){
    res.render('May20_myfirstpage', {mytitle: 'Happy'});
});

app.listen(3002,function(){
    console.log('We are listening to your request');
})