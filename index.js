const express = require('express');
const app = express();


let sort = require('./exercises/sorting/index');


function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

console.log(sort.mergeSort(getArray()));




app.get('/', (req, res) => res.send('Main url hit'))

app.listen(3000, () => console.log('app runing'));
