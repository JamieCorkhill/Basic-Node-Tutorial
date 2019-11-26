function myFunctionOne() {
    var num = 5;
    console.log(num); // 5
    console.log('--');

    for(var i = 0; i < 10; i++) {
        var num = i;
        console.log(num); //num becomes 0 — 9
    }

    console.log('--');
    console.log(num); // 9
    console.log(i); // 10
}
  
function myFunctionTwo() {
    let num = 5;
    console.log(num); // 5
    for(let i = 0; i < 10; i++) {
        let num = i;
        console.log('--');
        console.log(num); // num becomes 0 — 9
    }
    console.log('--');
    console.log(num); // 5
    console.log(i); // undefined, ReferenceError
}

myFunctionOne();
console.log('-------------------');
myFunctionTwo();