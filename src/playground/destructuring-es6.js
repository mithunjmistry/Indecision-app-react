console.log('ES6 object destructuring');

const person = {
    name: 'Mithun',
    age: 22,
    location: {
        temp: 70,
        city: 'Los Angeles'
    }
};

// destructuring the object
// set default value by using =
// assign it to some different name by using :

const {name = 'Anonymous', age} = person;
const {temp: temperature = 72, city} = person.location;

console.log(`${name} is ${age} year(s) old.`);
console.log(`Temperature is ${temperature} degrees in ${city}.`);