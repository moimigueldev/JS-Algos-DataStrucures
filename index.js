const express = require('express');
const app = express();


let reverse = require('./exercises/reversestring/index');

console.log(reverse('hello'))

app.get('/', (req, res) => res.send('Main url hit'))

app.listen(3000, () => console.log('app runing'));
