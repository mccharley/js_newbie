const { on } = require('events');
const EventEmitter = require('events'); //EventEmitter class

const Logger = require('./logger'); //importing the Logger class into this applet.js module.
const logger  = new Logger();//Object


//Register a listener
logger.on('messageLogged', (eventArg) => { //tracks event name and holds Arguments.
    console.log('Listener called', eventArg);    
});

logger.on('webmessageLogged', (eventArg) => { //tracks event name and holds Arguments.
    console.log('Listener called', eventArg);    
});

logger.log('Testing function call from imported class Logger');
logger.weblog('Hello World');

