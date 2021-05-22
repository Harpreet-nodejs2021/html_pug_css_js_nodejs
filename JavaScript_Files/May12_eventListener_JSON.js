// Changing the text/ markup of the html element

var para = document.getElementById('details'); // It will give us the paragraph having id = "details"

// document -> Interface

// getElementById -> Method

// "innerText" -> Already built in property / It is a Browser API

para.innerText = "Content Updated"; // This updated the previous text in p-tag of HTML file.

para.innerText = "I  have <span> updated the </span> content"; // I have <span> updated the </span> content

// Using "innerHTML" property, we can sync the HTML markup (such as span tag) with the content

var description = document.getElementById("elaborate");

description.innerHTML = "I  have <span> updated the </span> content"; // I have updated the content

// Other APIs to learn - HTML DOM createElement() Method

//--------------------------------------------------------

// Event Listeners - They are added to our HTML elements

var myButton = document.querySelector('button');

// Reserved work/ In-built HTML Method "addEventListener"

myButton.addEventListener('click', function(){
    alert('You have clicked a button')
});

//--------------------------------------------------------

// JSON Format/ XML Format

// Asynchronous  programming (AJAX) / using fetch Method to process data

// We are trying to use the data from the API, that is why we are fetching this data from an external source, however in order to use this data, we have to transform it to a JSON format (which is usable/ readable by us).

var apiURL = 'https://api.tvmaze.com/search/shows?q=batman';

// Fetch method used to call the API, and return us a "promise" response

// fetch method(API), then execute a code 

// ".then" -> This gives us a success/ failure response

// Not all URL are API, they are just web links

// APIs provide us some kind of response

fetch(apiURL).then(function(response){
    // console.log(response);
    // Without using ".json()" method, we can not understand the response.
    return response.json();
})

// response.json() -> We will get the response in JSON format using ".json()" method

.then(function(data){
    console.log(data);
});

// Data - Array

/* 
We see output as "Array" on the console of "Live Server"

Array(10)
0: {score: 26.169403, show: {…}}
1: {score: 26.050041, show: {…}}
2: {score: 18.205976, show: {…}}
3: {score: 17.545343, show: {…}}
4: {score: 16.397776, show: {…}}
5: {score: 14.741283, show: {…}}
6: {score: 14.092649, show: {…}}
7: {score: 13.382963, show: {…}}
8: {score: 13.2717085, show: {…}}
9: {score: 12.652595, show: {…}}
length: 10
__proto__: Array(0)

*/