const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var NetInterfaces = os.networkInterfaces();
console.log('Total Memory: ', totalMemory/1073741824);
console.log('Free Memory: ', freeMemory/1073741824);

console.log(`Total Memory: ${totalMemory/1073741824}`);
console.log(`Free Memnory: ${freeMemory/1073741824}`);

console.log(`System Network Interfaces Include: ${os.networkInterfaces()}`);
console.log(`System Platform is: ${os.release()}`);
console.log(`System Uptime is: ${Math.round(os.uptime()/86400)}days`);
console.log(`Current User is: ${os.userInfo()}`);



const fs = require('fs');
//const files = fs.readdirSync('./');
//console.log(files);

//The synchronious function "readdir", requires a callback function which tests for 2 scenarios: error and success.
//The callback is only triggered after the initial operation is complete.
//the callback tests and triggers an error action when an error is observed from the results of the initial operation 
//the callback triggers a success action when the initial operation is observed as successful from the results 
fs.readdir('./node_modules', function(err, files)
{
    if(err) console.log('Operation Error', err);
    else console.log('Operation Result', files);
});
