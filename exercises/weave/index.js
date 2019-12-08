// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    let q1 = new Queue();
    let q2 = new Queue();
    let q3 = new Queue();
    let longest = sourceOne.length >= sourceTwo.length ? sourceOne.length : sourceTwo.length;

    sourceOne.map(x => {
        q1.add(x)
    })
    sourceTwo.map(x => {
        q2.add(x)
    })

 

    for (let index = 0; index < longest; index++) {

        if (q2.peek()) {
            
            q3.add(q2.remove())
        }
        
        if (q1.peek()) {
            q3.add(q1.remove())
        }
        
        
    }

    console.log('final', q3.data)
}

module.exports = weave;
