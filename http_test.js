const http = require('http');
const server = http.createServer(); //creates a server. A server basically has all the features of an emitter.
var portnum = 6007; //port number


//we start our server setup/handle a port listener action for connections to our port iis detected. 
server.on('connection', (socket) => {
    console.log('New Connection to port', portnum, 'has been detected...');
});

//we start the server listening so it pays attention to events on the port and returns feedback to the 
server.listen(portnum);

//actual 
console.log('listen on port', portnum,'...');