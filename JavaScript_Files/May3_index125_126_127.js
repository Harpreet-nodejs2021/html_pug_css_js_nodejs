var iceCreamFlavors = ['flavor-1', 'flavor-2', 'flavor-3']; // Empty Array
var favFlower = iceCreamFlavors.push('flavor-A');
favFlower = iceCreamFlavors.push('flavor-B');
favFlower=iceCreamFlavors.push('flavor-C');
favFlower=iceCreamFlavors.push('flavor-D');
favFlower=iceCreamFlavors.push('flavor-E');
favFlower=iceCreamFlavors.push('flavor-F');
favFlower=iceCreamFlavors.push('flavor-G');
favFlower=iceCreamFlavors.push('flavor-H');
favFlower=iceCreamFlavors.push('flavor-I');
favFlower=iceCreamFlavors.push('flavor-J');

console.log(iceCreamFlavors);

/*
[
  'flavor-1', 'flavor-2',
  'flavor-3', 'flavor-A',
  'flavor-B', 'flavor-C',
  'flavor-D', 'flavor-E',
  'flavor-F', 'flavor-G',
  'flavor-H', 'flavor-I',
  'flavor-J'
]
*/

//-----------------------------------------------------

var iceCreamFlavors = ['flavor-1', 'flavor-2', 'flavor-3'];
var favFlower = iceCreamFlavors.unshift('flavor-A');
favFlower = iceCreamFlavors.unshift('flavor-B');
favFlower=iceCreamFlavors.unshift('flavor-C');
favFlower=iceCreamFlavors.unshift('flavor-D');
favFlower=iceCreamFlavors.unshift('flavor-E');
favFlower=iceCreamFlavors.unshift('flavor-F');
favFlower=iceCreamFlavors.unshift('flavor-G');
favFlower=iceCreamFlavors.unshift('flavor-H');
favFlower=iceCreamFlavors.unshift('flavor-I');
favFlower=iceCreamFlavors.unshift('flavor-J');

console.log(iceCreamFlavors);

/*
[
  'flavor-J', 'flavor-I',
  'flavor-H', 'flavor-G',
  'flavor-F', 'flavor-E',
  'flavor-D', 'flavor-C',
  'flavor-B', 'flavor-A',
  'flavor-1', 'flavor-2',
  'flavor-3'
]
*/

//-----------------------------------------------------

var iceCreamFlavors=['flavor-1', 'flavor-2', 'flavor-3', 'flavor-A','flavor-B','flavor-C','flavor-D', 'flavor-E','flavor-F', 'flavor-G'];

console.log(iceCreamFlavors[0]); // flavor-1
iceCreamFlavors.shift();

console.log(iceCreamFlavors[0]); // flavor-2
iceCreamFlavors.shift();

console.log(iceCreamFlavors);

/*
[
  'flavor-3',
  'flavor-A',
  'flavor-B',
  'flavor-C',
  'flavor-D',
  'flavor-E',
  'flavor-F',
  'flavor-G'
]
*/