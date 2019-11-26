const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('someEvent', () => {
    console.log('The "someEvent" event was fired (emitted)');
});

myEmitter.emit('someEvent'); // This will call the callback function above.