const express = require('express');
const app = express();


let test = require('./exercises/levelwidth/index');






const Node = require('./exercises/levelwidth/node')

// const root = new Node(0);
//   root.add(1);
//   root.add(2);
//   root.add(3);
//   root.children[0].add(4);
//   root.children[2].add(5);

const root = new Node(0);
  root.add(1);
  root.children[0].add(2);
  root.children[0].add(3);
  root.children[0].children[0].add(4);

//   expect(levelWidth(root)).toEqual([1, 1, 2, 1]);

  console.log(test(root))




app.get('/', (req, res) => res.send('Main url hit'))

app.listen(3000, () => console.log('app runing'));
