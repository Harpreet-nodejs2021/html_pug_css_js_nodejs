// Calculating perimeter of a square

var sideLength1 = 10;
var perimeterOfASquare=sideLength1 * 4;

console.log("Like any polygon, the perimeter is the total distance around the outside, which can be found by adding together the length of each side. In the case of a square, all four sides are the same length, so the perimeter is four times the length of a side. So for this example, " + sideLength1 + " times four gives us the perimeter of square = " + perimeterOfASquare + ".");

// Calculating area of a square

var sideLength2 = 5;
var areaOfASquare =  sideLength2 ** 2; // Exponentiation (**) OR sideLength2 ^ 2 
console.log(areaOfASquare);
console.log(`The area of a square is calculated as square power of length of each side. So for this example, ${sideLength2} raised to the 2nd power gives us the area = ${areaOfASquare}.`);

// Calculating perimeter of a triangle

var firstSide = 10, secondSide = 20, thirdSide = 5;
var perimeterOfATriangle = firstSide + secondSide + thirdSide;

console.log("Like any polygon, the perimeter is the total distance around the outside, which can be found by adding together the length of each side. So for this example, " + firstSide + " + " + secondSide + " + " + thirdSide + " gives us the perimeter of triangle = " + perimeterOfATriangle + ".");

// Calculating perimeter of a rectangle

var heightOfRectangle = 10, widthOfRectangle = 4;
var perimiterOfARectangle = 2 * (heightOfRectangle + widthOfRectangle);
console.log(perimiterOfARectangle);

console.log(`Like any polygon, the perimeter is the total distance around the outside, which can be found by adding together the length of each side. In the case of a rectangle, opposite sides are equal in length, so the perimeter is twice its width plus twice its height. So for this example, two times of ${heightOfRectangle} plus two times of ${widthOfRectangle} gives us the perimeter of rectangle = ${perimiterOfARectangle}. `);

// Calculating area of a rectangle

var areaOfARectangle = heightOfRectangle * widthOfRectangle;
console.log(areaOfARectangle);

console.log(`To find the area of a rectangle, multiply the length by the width. So for this example, ${heightOfRectangle} multiplied by ${widthOfRectangle} gives us the area of rectangle = ${areaOfARectangle}.`);