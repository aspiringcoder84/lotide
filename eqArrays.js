// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log("✅ ✅ ✅  Assertion Passed: " + actual + "  === " + expected);

  } else if (actual !== expected) {

    console.log("🛑 🛑 🛑  Assertion Failed: " + actual + " !== " + expected);

  }

};

function eqArrays (arr1,arr2) {
  arr1.sort;
  arr2.sort;
 let arr3 = [];
 for(let i=0; i < arr1.length; i++) {
  if(arr1[i] == arr2[i] && arr1.length == arr2.length) {
   arr3.push[i];
  } else {
  return false }
  let x = arr3.toString();
  let y = arr1.toString();
  if(x == y) {
  return true }
  else {
   return false; }
}
}

// TEST CODE

//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual(1, 1);
