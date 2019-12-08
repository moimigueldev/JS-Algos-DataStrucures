const express = require('express');
const app = express();


let test = require('./exercises/validate/index');
let Node = require('./exercises/validate/node');


// const Node = require('./exercises/levelwidth/node')








app.get('/', (req, res) => res.send('Main url hit'))

app.listen(3000, () => console.log('app runing'));
