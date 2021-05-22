// DOM - Document Object Model - It is an Interface that allows us to access the elements of HTML/ manipulate the elements using JS (using DOM API)

/* 
DOM - It represents the structure of our HTML pages as Documents and Objects.
(Document - HTML, Object - Elements like head tag, body tag, etc. and node list (Array))
*/

let whereAmI = function(){
    window.alert("You are on the main page");
}

setTimeout(whereAmI, 5000);

window.onload = function(){
    let mainTitle = document.getElementById("firstTitle");
    mainTitle.style.color = "red";
    console.log(mainTitle);
};

setTimeout(() => {
    let mainTitle = document.getElementById("firstTitle");
    mainTitle.style.color = "green";
    console.log(mainTitle);
}, 12000);

//----------------------------------------------

// Query Selector Method allows us the access the HTML elements in the JS file.

var divElements = document.querySelector('div'); // It gives us the first "div" element in our HTML file
console.log(divElements);
console.log(divElements.attributes); // It gives us the list of attributes present in this div element

var allDivElements = document.querySelectorAll('div'); // It gives us the list (Node List) of all "Div" elements in our HTML file
console.log(allDivElements);

//----------------------------------------------

// Get Attribute Method - To find an attribute in an Element/ Tag

console.log(divElements.getAttribute('class'));

//----------------------------------------------

// Set Attribute Method - To add an attribute/ Property in an Element/ Tag

// Has Attribute Method (Built in API) - Returns Boolean Value

console.log('Div element has ID: ' + divElements.hasAttribute('id')); // False

// If "id" attribute is not present in first div element, then set the id = "firstDiv"

if(!divElements.hasAttribute('id')){
    divElements.setAttribute('id', 'firstDiv');
}
console.log('Div element has ID: ' + divElements.hasAttribute('id')); // True

//----------------------------------------------

console.log('Div element has ID: ' + divElements.hasAttribute('class')); // True