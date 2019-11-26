const myObject = {
    name: 'Jane Doe'
};
  
// This is illegal: TypeError: Assignment to constant variable.
myObject = {
    name: 'John Doe'
};
  
// This is legal. console.log(myObject.name) -> John Doe
myObject.name = 'John Doe';