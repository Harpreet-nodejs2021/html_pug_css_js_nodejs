var tripExpenses = [400,800,600]; 
// first item is hotel fee
// second item is trip fee
// third item is meals fee

var budget; // sum of all the Trip Expenses

budget = tripExpenses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`);

// hotel: 400, trip: 800, meals: 600

console.log('Total trip budget: ' + budget);

// Total trip budget: 1800

//---------------------------------------------------

var firstPerson,secondPerson;

// First Scenario

firstPerson = ['Kyle','Walker','1 Yonge Street Toronto ON',32];
secondPerson = ['Chloe','Smith','1 Main Street Winnipeg MB',25];

/*
The first item is the person first name (string)
The second item is the person last name (string)
The third item is the person address (string)
The fourth item is the person age (number)
*/

firstPersonUpdated = firstPerson.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

secondPersonUpdated = secondPerson.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

console.log(firstPersonUpdated); // KyleWalker1 Yonge Street Toronto ON32
console.log(secondPersonUpdated); // ChloeSmith1 Main Street Winnipeg MB25

if(firstPersonUpdated == secondPersonUpdated){
    console.log('They are the same person.');
}else{
    console.log('They are different.'); // This string gets printed
}

// Second Scenario

firstPerson = ['Chloe','Smith','1 Main Street Winnipeg MB',25];

firstPersonUpdated = firstPerson.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

console.log(firstPersonUpdated); // ChloeSmith1 Main Street Winnipeg MB25
console.log(secondPersonUpdated); // ChloeSmith1 Main Street Winnipeg MB25

if(firstPersonUpdated == secondPersonUpdated){
    console.log('They are the same person.'); // This string gets printed
}else{
    console.log('They are different.');
}