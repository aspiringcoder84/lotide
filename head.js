// FUNCTION IMPLEMENTATION

/*const assertEqual = function(actual, expected) {

  if (actual === expected) {
console.log(`✅ ✅ ✅   Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {

    console.log(`🛑 🛑 🛑   Assertion Failed: ${actual} !== ${expected}`);

  }

};*/
const assertEqual = require('./assertEqual');
function head(arrayElements)
{ 
  return arrayElements[0];
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
