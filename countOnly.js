// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {

  if (actual === expected) {
console.log(`🛑 🛑 🛑  Assertion Passed: ${actual} === ${expected}`);

  } else if (actual !== expected) {

    console.log(`✅ ✅ ✅  Assertion Failed: ${actual} !== ${expected}`);

  }

};

const countOnly = function(allItems, itemsToCount) {
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
const results = {}
return results;

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

// TEST CODE

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
