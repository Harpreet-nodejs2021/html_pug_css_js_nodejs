var clientId=143245; // number type
var inputClientId='143245'; // string

let comparisonByValue = clientId == inputClientId;
let comparisonByValueAndType = clientId === inputClientId; // Strict Equality Comparison

console.log(`The input client id is correct by value? - ${comparisonByValue}`);
console.log("The input client id is correct by value and type? - " + comparisonByValueAndType);

// The input client id is correct by value? - true
// The input client id is correct by value and type? - false