const path = require('path');
var pathObj = path.parse(__filename);

//var tester = require('./logger');
const tester = require('./logger'); //set to constant to avoid overwritting accidentally. 
console.log(tester);


//tester.mylogger('get help');
tester.log('getting help');


console.log(__filename);
console.log(__dirname);

var thisdirname = __dirname;

console.log("the path to this file is:", thisdirname);

console.log(pathObj);


