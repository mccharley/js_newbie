const EventEmitter = require('events'); //new event class

var url = 'https://iconnected.me/log';


//the class extends EventEmitter implying that Logger now also includes all the features of EventEmitter
class Logger extends EventEmitter{
 log(message){
    //send an local request
    console.log(message);

    //Raise an event
    this.emit('messageLogged', { id: 1234, url: 'http://iconnected.me/message' }); //contains event Name and Arguments
                }

 weblog(webmessage){
    //send an HTTP request
    console.log(webmessage);

    //Raise an event
    this.emit('webmessageLogged', { id: 6473, url: 'http://iconnected.me/webmessage' }); //
                 }
            }

//exporting the Logger class which has been extended to include the events module.
module.exports = Logger; //this will allow us access this Logger class inside other modules.

/*
//module.exports = {log, weblog} //export functions as an object
//module.exports = log;
//module.exports.mylogger = weblog;
//module.exports.myweblogger = weblog;
*/