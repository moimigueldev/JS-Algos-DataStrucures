// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// [-124, -40, 0, 7, 21, 100, 500]

function bubbleSort(arr) {  // n^2
    
 for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <( arr.length - i - 1); j++) {
        let current = arr[j];
        let next = arr[j + 1];
        
        if(current > next) {
            arr[j] = next;
            arr[j + 1] = current;
        }
    } 
 }//end of for loop

 return arr;
}

function selectionSort(arr) { // n^2

    for (let i = 0; i < arr.length; i++) {

        let indexofMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            
            if(arr[indexofMin] > arr[j]) {
                indexofMin = j
            }
        }

        if (indexofMin !== i) {
            let lesser = arr[indexofMin];
            arr[indexofMin] = arr[i]
            arr[i] = lesser;
        }

    }//end of first for loop

    return arr

}

function mergeSort(arr) { // n*log(n)
    if(arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2)
    
    const left = arr.slice(0, center)
    const right = arr.slice(center)
    
   return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right) {
    let results = [];

    while(left.length && right.length) {
        if(left[0] < right[0] ) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }
    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
