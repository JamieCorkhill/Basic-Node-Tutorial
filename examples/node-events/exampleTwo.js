const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('someEvent', (data) => {
    console.log(`The "someEvent" event was fired (emitted) with data: ${data}`);
});

myEmitter.emit('someEvent', 'This is the data payload');
