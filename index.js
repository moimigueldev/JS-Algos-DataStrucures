const express = require('express');
const app = express();


let Events = require('./exercises/events/index');






app.get('/', (req, res) => res.send('Main url hit'))

app.listen(3000, () => console.log('app runing'));
