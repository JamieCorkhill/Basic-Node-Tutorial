var fs = require('fs');

// Blocking
var dataBlocking = fs.readFileSync('/example.txt'); // The thread will be blocked here until complete.

// Non-Blocking
var dataAsync = fs.readFile('/example.txt', function(err, data) { // Move on, this will fire when ready.
    if(err) return console.log('Error: ', err);
    console.log('Data: ', data); // Assume var data is defined above.
});
// Keep executing below, don’t wait on the data.

function readFile(path, callback) {
    // Behind the scenes code to read a file stream.
    // The data variable is defined up here.
    callback(undefined, data); // Or, callback(err, undefined);
}