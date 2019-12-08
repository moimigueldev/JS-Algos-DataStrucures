// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]



function levelWidth(root) {
    let counterArr = [0];
    let arr = [root, 's'];

    while(arr.length > 1) {
        let node = arr.shift();
        
        if (node === 's') {
            arr.push('s')
            counterArr.push(0);
            
        } else {
                arr.push(...node.children)
                counterArr[counterArr.length -1 ]++
        }
    }
  

    return counterArr
}


module.exports = levelWidth;
 

// function levelWidth(root) {

//     testCounter = 8;

//     let counterArr = [0];
//     const pointer = 's';
//     let arr = [root, pointer];

    
//     while(arr.length > 1) {
//         let node = arr.shift();
//         if (node === pointer) {

//             arr.push(pointer)

//             counterArr.push(0);
            
//         } else {
//             console.log('node', node.children.length)
//             if(node.children.length) {
//                 // console.log('children', node.children)
//                 arr.push(...node.children)
//                 counterArr[counterArr.length -1 ]++
           
//             } else {
//                 console.log('skipuing', node)
//                 counterArr[counterArr.length -1 ]++
//             }
//         }

        

//         testCounter--;

//     }
  
//     console.log('*'.repeat(50))
//     console.log('counter', counterArr)
//     console.log('arr', arr)

//     return counterArr
// }