// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log("✅ ✅ ✅  Assertion Passed: " + actual + "  === " + expected);

  } else if (actual !== expected) {

    console.log("🛑 🛑 🛑  Assertion Failed: " + actual + " !== " + expected);

  }

};

function eqArrays (arr1,arr2) {
 var i = arr1.length; 
 if(i != arr2.length) return false; 
 while (i--) {
   if (arr1[i] != arr2[i]) return false;
 }
return true;
}

// TEST CODE

//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual(1, 1);
