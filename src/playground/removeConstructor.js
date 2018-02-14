class oldSyntax{
    constructor(){
        this.name = "Mithun";
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting(){
        return `My name is ${this.name}`;
    }
}

class newSyntax{
    name = "Mithun";

    getGreeting = () => {
        return `My name is ${this.name}`;
    }
}