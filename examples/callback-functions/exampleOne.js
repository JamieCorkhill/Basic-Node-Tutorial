function asyncAddFunction(a, b, callback) {
    callback(a + b); // This callback is the one passed in to the function call below.
}
  
asyncAddFunction(2, 4, function(sum) {
    //Here we have the sum, 2 + 4 = 6.
});