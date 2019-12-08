// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // MY SOLUTION THAT WORKS
    // stringA.replace(/[!\s.-]/g, '');
    // stringB.replace(/[!\s.-]/g, '');

    stringA = stringA.replace(/[^\w]/g, ''); // \w will only return characters
    stringB = stringB.replace(/[^\w]/g, '');


    return (
        stringA.toLowerCase().split('').sort().join('') 
        === stringB.toLowerCase().split('').sort().join('')
    )

}
module.exports = anagrams;


