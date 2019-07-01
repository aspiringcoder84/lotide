/*let tail(words)
{ 
return words.splice(1,2);
}
*/
const words = ["Yo Yo", "Lighthouse", "Labs"];
:q


tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
