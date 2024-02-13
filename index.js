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

//? Quick Challenge:
/*
    Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (invoke) your function
*/

//! Arguments


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

//? Block Body

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

