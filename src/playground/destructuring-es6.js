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

// array destructuring

const address = ['320 Mallard Creek', 'Charlotte', 'North Carolina', '28080'];

// object destructuring happens with {} but array destructuring happens with []
// it is destructuring on index number
// skip the item we don't want with a comma, set default value with =

const [, , state = 'California', zip] = address;
console.log(`I am in ${state}.`);