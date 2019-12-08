// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// result for 4 [0, 1, 1, 2, 3,]

function fib(n) {
    
    if (n < 2) {
        return n;
    } 

    return fib(n - 1) + fib(n - 2)
    
}

module.exports = fib;

// ITERATIVE SOLUTION
// function fib(n) {
//     let result = [0, 1];

//     for (let i = 2; i < n + 1 ; i++) {
//         result.push(result[i - 1] + result[i - 2])
//     }
//    return result[result.length - 1]

// }


// RECURSIVE SOLUTION
// function fib(n, index = 2, arr = [0 , 1]) {

//     if (arr.length === n + 1) return arr[arr.length - 1];

//     arr.push(arr[index - 1] + arr[index - 2])
//     return fib(n, index + 1, arr)

// }