// Write "start": "node May19_EntryPointFile.js" on the package.json file to execute this file as Entry Point for our execution, otherwise, we are starting with "nodemon" module afterwards

const express = require('express');

const app = express();

app.set('view engine', 'pug');

// GET Route defined below, when it is hit, we are returning a response - That is to render pug file (HTML file for browser) and we are passing two JavsScript Objects as values.
app.get('/', function(req,res){
    res.render('May19_view_engine', {mytitle: 'Hey', message:'I like to code'});
});

app.listen(3002,function(){
    console.log('We are listening to your request');
})