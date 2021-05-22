var iceCreamFlavors = ['flavor-1', 'flavor-2', 'flavor-3', 'flavor-A','flavor-B','flavor-C','flavor-D', 'flavor-E','flavor-F', 'flavor-G'];

console.log(iceCreamFlavors[iceCreamFlavors.length-1]); // flavor-G
iceCreamFlavors.pop();

console.log(iceCreamFlavors[iceCreamFlavors.length-1]); // flavor-F
iceCreamFlavors.pop();

console.log(iceCreamFlavors[iceCreamFlavors.length-1]); // flavor-E
iceCreamFlavors.pop();

console.log(iceCreamFlavors[iceCreamFlavors.length-1]); // flavor-D
iceCreamFlavors.pop();

console.log(iceCreamFlavors);

/*
[
  'flavor-1',
  'flavor-2',
  'flavor-3',
  'flavor-A',
  'flavor-B',
  'flavor-C'
]
*/

//----------------------------------------------

var iceCreamFlavors = ['flavor-1', 'flavor-2', 'flavor-3', 'flavor-A','flavor-B','flavor-C','flavor-D', 'flavor-E','flavor-F', 'flavor-G'];

for(let index = 0; index < iceCreamFlavors.length; index++){
    console.log('Output: ' , iceCreamFlavors[index]);
}

/*
Output:  flavor-1
Output:  flavor-2
Output:  flavor-3
Output:  flavor-A
Output:  flavor-B
Output:  flavor-C
Output:  flavor-D
Output:  flavor-E
Output:  flavor-F
Output:  flavor-G
*/

//----------------------------------------------

const mutants = ['Professor X','Cyclops','Iceman','Angel','Beast','Phoenix'];

console.log(mutants); 
// [ 'Professor X', 'Cyclops', 'Iceman', 'Angel', 'Beast', 'Phoenix' ]

var sortMutants=mutants.sort(); // The sort() method sorts an array alphabetically
console.log(sortMutants); 
// [ 'Angel', 'Beast', 'Cyclops', 'Iceman', 'Phoenix', 'Professor X' ]

var reverseMutants=mutants.reverse(); // The reverse() method reverses the elements in an array.
console.log(reverseMutants);
// [ 'Professor X', 'Phoenix', 'Iceman', 'Cyclops', 'Beast', 'Angel' ]

var joinMutants=mutants.join('* ');

console.log(joinMutants); // Professor X* Phoenix* Iceman* Cyclops* Beast* Angel