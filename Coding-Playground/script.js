// // String 

// const singleQuotes = 'Hello!';
// const doubleQuotes = 'Hello!!';
// const backticks = `${ 2 + 2}`;

// // Numbers
// const firstNumber = 5;
// const secondNumber = 0.5;

// const result = firstNumber + secondNumber

// // Booleans

// // true - yes, correct, 1
// // false - no, incorrect, 0

// const age1 = 20;

// // NULL
// let age2 = null;

// // Undefined
// let x;

// // Objects - are used to store collections of data, in more complex entities
// // Simpler - are used to group variables

// const person = {
//     name: 'John',
//     age: 25,
// }
// // Dot Notation
// // console.log(typeof person.name)

// // Array - to store ordered collection
// const arr = [1,2,3,4,5]
// const date = new Date();

// // Data Types:
// // Javascript is Dynamically Typed

// //  Comparison Operators (<, >, ===) => true / false
// const a = 5;
// const b = 10;

// //GREATER THAN
// // console.log(a > b);
// // //GREATER THAN OR EQUAL TO
// // console.log (a >= b);
// // // Less than
// // console.log( a < b);
// // // Less than or equal to
// // console.log( a <= b);

// // // Is equal
// // console.log( a == b);
// // // Not equal
// // console.log(a != b);

// // Strict Equality - compares VALUE  and DATA TYPES, returns true if only if both are the same
// // console.log(a === b);
// // Strict Inequality
// // console.log(a !== b);

// // Loose Equality 
// // Doesn't compare DATA TYPES
// // console.log( 20 == '20')

// // The Good Ones: ===, !==
// // The Evil Twins: ==, !=

// // Only Use Strict Equality for best pratices 🌟

// // Logical Operartors => 
// // AND && => All Operands are TRUE => TRUE
// // OR || => At least one Operand is TRUE => TRUE
// // NOT !

// const age = 19;

// if(age > 18) {
//     // block of code
//     // console.log('Welcome to the Club!')
// } else if(age === 18){
//     console.log('Congrats on 18, Welcome!')
// } else {
//     console.log('Sorry you are underaged')
// }

// // The 'while' loop

// let i = 0;

// while(i < 10){
//     // console.log(i);
//     i++;
// }

// // The for loop

// for (let i = 0; i < 10; i++ ){
//     // console.log(i)
// }


// // Functions => A block of code that performs a task

// // A FUNCTION DECLARATION (defining a function)
// function sqaure (number) {
//     return number * number;
// }
// // A FUNCTION CALL (calling/executing a function)
// // console.log(sqaure(7));

// // // A function declaration
// // function name(params){
// //     //statements
// //     // have access to 'this' keyword
// // }

// // // A function expression 
// // const name = function(params){
// //     // statements
// // }

// // // An arrow function => a shorter syntax for writing function expressions
// // const name = (params) => {
// //     // statments
// // }
// // // name()


// function sayHi (name2) {
//     // console.log(`Hi, ${name2}!`);
// }
// sayHi('Tommy');

// // EVERY FUNCTION - Returns undefinded unless specified

// // Arrow Function

// const square1 = (number) => number * number;

// const square2 = (number) => {
//     return number * number;
// }
// const total = square1(5);
// const total2 = square2(5);

// // console.log(total)
// // console.log(total2)