// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



function reverse (str) {

    return str.split('').reduce((reversed, character) => {
        return character + reversed
    }, '')
}


module.exports = reverse;


// function reverse (str) {
//     let reversed = '';

//     for (let character of str) { //new syntax for for loops
//         reversed = character + reversed;
//     }

//     return reversed
// }



// function reverse (str) {
//     return str.split('').reverse().join('');
// }