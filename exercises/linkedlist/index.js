// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
       
    }

    size() {
        let counter = 0;
        let node = this.head;
        
        while (node) {
            counter++;
            node = node.next;
        }
        
        return counter;
    }

    getFirst() {
       return this.getAt(0)
    }

    getLast() {
        // if (!this.head) return null;
        // let node = this.head;
        // while (node.next !== null) {
        //     node = node.next;
        // }
        // return node

        return this.getAt(this.size() - 1)
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;

        this.head = this.head.next
        
    }

    removeLast() {
       if (!this.head) return;

       if (!this.head.next) {
           this.head = null;
           return;
       }

       let previous = this.head;
       let node = this.head.next;

       while(node.next) {
        previous = node;
        node = node.next
       }

       previous.next = null;
    }

    insertLast(data) {
        if(!this.head) this.head = new Node(data, this.head)
        this.getLast().next = new Node(data)
    }

    getAt(index) {
        let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
    } 

    removeAt(index) {
        if (!this.head) {
            return;
          }
      
          if (index === 0) {
            this.head = this.head.next;
            return;
          }
      
          const previous = this.getAt(index - 1);
          if (!previous || !previous.next) {
            return;
          }
          previous.next = previous.next.next;
    } 

    insertAt(data, index) {
        let previous = this.getAt(index - 1)

        if(!this.head) {
            this.head = new Node(data)
            return 
        }

        if (index === 0) {
            this.head = new Node(data, this.head)
            return 
        }

        if (!previous) {
            this.getLast().next = new Node(data)
            return 
        }
        previous.next = new Node(data, previous.next)

    }

    // forEach(fun) {
    //     // console.log('forEach', fun)

    //     Object.keys(this.getFirst().next).forEach((node, index) => {
    //         console.log('hello')
    //     })
    // }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next
        }
    }
}// end of class

module.exports = { Node, LinkedList };  
