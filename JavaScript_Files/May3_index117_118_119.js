var students = ['Cindy','Carol','Lisa','Noah','Oliver'];
console.log(students[0]); // Cindy
console.log(students[2]); // Lisa
console.log(students[4]); // Oliver

//-------------------------------------------------

var grades=[1,2,3,4,5,6,7,8,9,10];
var result=[grades[0] + grades[2] + grades[4] + grades[9]];
console.log("Sum: " + result); // Sum: 19

//-------------------------------------------------

const data = [42, true, function() {return 'The meaning of life is: '}];
if(data[1] = true){
    let newVal = data[2]; // Assigned function to a variable
    console.log(newVal() + data[0]);
}

// The meaning of life is:  42