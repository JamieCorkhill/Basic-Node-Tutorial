function makeAPICall(path, callback) {
    // Attempt to make API call to path argument.
    // ...
    callback(undefined, res); // Or, callback(err, undefined); depending upon the API’s response.
}

// Example call of `makeAPICall`:
makeAPICall('/example', function (err1, res1) {
    if(err1) return console.log('Error: ', err1);
    // ...
});

// Make second call with response from first:
makeAPICall('/example', function(err1, res1) {
    if(err1) return console.log('Error: ', err1);
    makeAPICall('/newExample/' + res1.userName, function(err2, res2) {
        if(err2) return console.log('Error: ', err2);
        console.log(res2);
    });
});

// Using promises:
makeAPICall('/example').then(function(res) { // Success callback.
    // ...
}, function(err) { // Failure callback.
    console.log('Error:', err);
});

// With .catch:
makeAPICall('/example').then(function(res) { // Success callback.
    // ...
}).catch(function(err) {  // Failure Callback
    console.log('Error: ', err);
});

// For readability:
makeAPICall('/example')
  .then(function(res) {
      // ...
  })
  .catch(function(err) {
      console.log('Error: ', err);
  });

// Creating a promise:
var examplePromise = new Promise(function(resolve, reject) {
    // Do whatever we are going to do and then make the appropiate  call below:
    resolve('Happy!'); // — Everything worked.
    reject('Sad!'); // — We noticed that something went wrong.
});

// Calling `examplePromise`:
examplePromise.then(/* Both callback functions in here */);
// Or, the success callback in .then() and the failure callback in .catch().

// Returning a Promise:
function makeAPICall(path) {
    return new Promise(function(resolve, reject) {
        // Make our async API call here.
        if (/* All is good */true) return resolve(res); //res is the response, would be defined above.
        else return reject(err); //err is error, would be defined above.
    });
}

// Refactor `makeAPICall` to use Promises:
makeAPICall('/example').then(function(res) { // First response callback. Fires on success to '/example' call.
    return makeAPICall(`/newExample/${res.UserName}`); // Returning new call allows for Promise Chaining.
}, function(err) { // First failure callback. Fires if there is a failure calling with '/example'.
    console.log('Error:', err);
}).then(function(res) { // Second response callback. Fires on success to returned '/newExample/...' call.
    console.log(res);
}, function(err) { // Second failure callback. Fire if there is a failure calling with '/newExample/...'
    console.log('Error:', err);
});

// For readability:
makeAPICall('/example')
    .then(function(res) { // Like earlier, fires with success and response from '/example'.
        return makeAPICall(`/newExample/${res.UserName}`); // Returning here lets us chain on a new .then().
    })
    .then(function(res) { // Like earlier, fires with success and response from '/newExample'.
        console.log(res);
    })
    .catch(function(err) { // Generic catch all method. Fires if there is an err with either earlier call.
        console.log('Error: ', err);
    });