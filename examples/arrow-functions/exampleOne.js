const printHelloWorld = () => {
    console.log('Hello, World!');
};

const squareNumberVersionOne = (x) => {
    return x * x;
}

const squareNumberVersionTwo = x => { // Notice we have dropped the parentheses for we only take in one argument.
    return x * x;
}

const squareNumberVersionThree = x => x * x;
  
squareNumberVersionOne(5);   // We can call an arrow function like an ES5 functions. Returns 25.
squareNumberVersionTwo(5);   // We can call an arrow function like an ES5 functions. Returns 25.
squareNumberVersionThree(5); // We can call an arrow function like an ES5 functions. Returns 25.

// Implicitly return object:
const test = () => ({ pi: 3.14 }); // Spaces between brackets are a formality to make the code look cleaner.

// With callback:
function asyncAddFunctionVersionOne(a, b, callback){
    callback(a + b);
}

const asyncAddFunctionVersionTwo = (a, b, callback) => {
    callback(a + b);
};

const asyncAddFunctionVersionThree = (a, b, callback) => callback(a + b); // This will return callback(a + b).

// Call with arrow function as callback:
asyncAddFunctionVersionTwo(10, 12, sum => { // No parentheses because we only take one argument.
    console.log(sum);
});

// Returning a Promise:
function makeAPICall(path) {
    return new Promise(function(resolve, reject) {
        // Make our async API call here.
        if (/* All is good */true) return resolve(res); //res is the response, would be defined above.
        else return reject(err); //err is error, would be defined above.
    });
}

// Using arrow functions for then and catch handlers.
makeAPICall('/example')
  .then(res => makeAPICall(`/newExample/${res.UserName}`))
  .then(res => console.log(res))
  .catch(err => console.log('Error: ', err));