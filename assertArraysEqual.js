// FUNCTION IMPLEMENTATION

const assertArraysEqual = function(actual, expected) {

 var i = actual.length;
 if(i != expected.length) { console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} " !== " + ${expected}`);}
 while (i--) {
   if (actual[i] != expected[i]) { console.log(`🛑 🛑 🛑  Assertion Failed: ${actual}  " !== "  ${expected}`);}
 }
 console.log(`✅ ✅ ✅  Assertion Passed: ${JSON.stringify(actual)} " === "  ${JSON.stringify(expected)}`);
}
/*if (actual === expected) {

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
*/
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
