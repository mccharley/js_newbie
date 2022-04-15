const http = require('http');
var portnum = 2065; //port number

//creates a server. A server basically has all the features of an emitter.
//the create server object takes a call back with 2 parameters (request, response)
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('You hit the new test server. Well done folks.');
        res.end();
    }

    if (req.url === '/api/coins'){
        res.write(JSON.stringify(['BTC', 'ETH', 'ADA']));
        res.end();
    }
});

//we start the server listening so it pays attention to events on the port and returns feedback to the 
server.listen(portnum);

//actual 
console.log('listen on port', portnum,'...');