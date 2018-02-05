class Person{
    constructor(name='Anonymous', age=0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi. I am ${this.name}.`
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){

        let greeting = super.getGreeting();
        if(this.hasHomeLocation()){
            greeting += ` I am travelling from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Person();
console.log(me.getDescription());

const traveller = new Traveller();
console.log(traveller.getGreeting());

const traveller2 = new Traveller("Mithun", 22, "Mountain View");
console.log(traveller2.getGreeting());