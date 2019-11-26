console.log('Initiated program.');

setTimeout(function () {
    console.log('3000 ms (3 sec) have passed.');
}, 3000);

setTimeout(function () {
    console.log('0 ms (0 sec) have passed.');
}, 0);

setTimeout(function () {
    console.log('1000 ms (1 sec) has passed.');
}, 1000);

console.log('Terminated program');