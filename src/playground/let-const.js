let name = 'Mithun';
const age = 22;

// block level scoping

if(name){
    // This let statement is not accessbile outside if loop
    // let and const have block level scoping 
    let statement = 'Welcome ' + name;
    console.log(statement);
}

console.log(name);