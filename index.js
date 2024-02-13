//! Parameters
/*
                (1)
    function hi(name) {
        console.log(`Hi, ${name}`)
                        (2)
    }
    
        (3)
    hi('Bruce');
    
    1- The parameter(s) that the function is accepting or holding
    2- Using string interpolation, we can refer to the parameter gave to the function
    3- The argument being passed when invoking the function. This defines the parameter's value.
*/

function order(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}

order('cheese pizza');

//? Quick Challenge:
/*
    Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (invoke) your function
*/

function myname(fName, lName) {
    let fullName = fName + ' ' + lName;
    console.log(`Hello, my name is ${fullName}`)
}

myname("Bruce", 'Wayne');

//! Arguments
let desc1 = 'tall person';
let desc2 = 'short person';

let thisFunction = function(info) {
    console.log(info);
}

thisFunction(desc1);
thisFunction(desc2);

/*
        1. Our functions parameter. 
        2. The argument being passed into the function
        
        The first invoke turns info = "tall person"
        The second turns info = "short person"
*/

//! Arrow Functions
/*
    (1)        (2)
    let hi = () => {
        console.log('hi');
    }
    
    1- We need to set the fat arrow function to a variable
    2- We use the 'fat arrow' to signify its a function
    
    - arrow functions (or fat arrow functions) were introduced in ES6. They are basically just a more concise way to write function expressions - NOT declarations
        - that means that arrow functions do not get hoisted
*/

//? Concise Body
let hi = () => console.log('hi')
hi();

//? Block Body
let hi2 = () => {
    console.log('hello there')
    // requires a return
    return 'hello';
}

// hi2()
console.log(hi2())

let apples1 = x => `There are ${x} apples`;
console.log(apples1(10));

let apples2 = x => {
    return(`There are ${x} apples!`)
}
console.log(apples2(20));

//! Return
/*
let hi = () => {
        (1)
        return 'hi';
    };
    
        (2)       (3)
    let newName = hi();
    
    console.log(newName)
    
    1- The keyword that brings our data out of our function
    2- We need a new variable to hold the value of the return
    3- When called, the function becomes the value of the return
*/

let firstName = fName => {
    return 'steve'
}

let myName = firstName();
console.log(myName);

function capitalizeName(name) {
    let capName = '';
    for(let l in name) {
        if(l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }

    return(capName);
}

const fixedName = capitalizeName(myName);
console.log(fixedName);
const newName = capitalizeName('zach');
console.log(newName);