const express = require('express');
const app = express();


let Events = require('./exercises/events/index');



let events = new Events();

events.on('click', () => {
  console.log('click')
});
events.on('click', () => {
  console.log('click')
});
events.on('click', () => {
  console.log('click')
});


console.log(events.trigger('click'))
console.log(events.off('click'))

console.log('events', events.events)





app.get('/', (req, res) => res.send('Main url hit'))

app.listen(3000, () => console.log('app runing'));
