const Person = {
    name: 'John Doe',
    greeting: () => {
      console.log(`Hi. My name is ${this.name}.`);
    }
}

// Look - no `this` binding.
Person.greeting();

this.name = 'Jane Doe';

const PersonTwo = {
    name: 'John Doe',
    greeting: () => {
        console.log(`Hi. My name is ${this.name}.`);
    }
}

PersonTwo.greeting(); // Hi. My name is Jane Doe