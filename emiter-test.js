const EventEmitter = require('events'); //EventEmitter class
const emitter = new EventEmitter(); //object (an actual instance of the EventEmitter class)


//Register a listener for Logging.using arrow function instead of function keyword.
emitter.on('logging', (eventArg) => { // Also event name is case sensitive
    console.log('listener identified a log writing event', eventArg);    
});

//Raise an event for Logging
emitter.emit('logging', { id: 6539, msg: 'system has written a log' }); //contains event Name and Arguments
