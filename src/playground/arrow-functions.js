// normal es5 function
const square = function(x){
    return x*x;
};

console.log(square(2));

// es6 arrow function

const squareArrow = (x) => { return x*x };
console.log(squareArrow(3));

// concise square arrow

const conciseSquare = (x) => x * x;
console.log(conciseSquare(4));

// challenge - take full name and return the first name

const firstName = (fullName) => fullName.split(' ')[0];
console.log(firstName('Mithun Mistry'));

// if we want to use this, stick with ES5 function, else use an arrow function

// challenge two

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());