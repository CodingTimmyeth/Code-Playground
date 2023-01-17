// Math  

const colors = ['orange', 'green','yellow', 'purple', 'blue'];

const randomIndex = Math.floor(Math.random() * colors.length)

const randomColor = colors[randomIndex];

// if (randomColor === 'orange'){
//     console.log('Your color is Orange')
// } else if (randomColor === 'green'){
//     console.log('Your color is Green')
// } else if (randomColor === 'yellow'){
//     console.log('Your color is Yellow')
// } else if (randomColor === 'purple'){
//     console.log('Your color is Purple')
// } else if (randomColor === 'blue'){
//     console.log('Your color is Blue')
// } else {
//     console.log('Sorry no more players allowed')
// }
// console.log(randomColor)


// for (let i = 0; i < ye.length; i++) {
//     if (typeof ye[i] === 'number') {
//         console.log(ye[i]);  
//     }
// }

// Regular Function
function regularFunction () {
    console.log('something')
}

// Anonymous Function
const anonymousFunction = function() {
    console.log('another thing')
}

// Arrow Functions 
const arrowFunction = () => {
    console.log('arrow function')
}
// Return Functions
const returnFunction = () => {
    const a = 'ye'
    return a 
}
// console.log(returnFunction())

function myFunction () {
    return 20;
}
// console.log(myFunction())

const myObject = {
    prop1: 50,
    prop2: myFunction
}
// console.log(myObject.prop2)

const myString = 'zach';
myString.toUpperCase()
// console.log(myString)

function solution (str){
    return str.split('').reverse().join('')
}
console.log(solution('word'))