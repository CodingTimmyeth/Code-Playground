// // ES6 Arrow Function
// // Object 
// // Template Literals
// const introducer = (name, shirt) => {
//     const person = {
//         name: name,
//         shirt: shirt,
//         assets: 10000,
//         liabilities: 5000,
//         netWorth: function() {
//             return this.assets - this.liabilities
//         }
//     }

//     const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()}`

//     return intro
// }
// // console.log(introducer('Qazi', 'Black'))
// // console.log(introducer('Leonardo', 'white'))
// // console.log(introducer('Tommy', 'Black'))

// const fruits = ['banana', 'apple', 'orange', 'pear']

// // for (let i = 0; i < fruits.length; i++) {
// //     console.log(i, fruits[i])
// // }

// for (const fruit of fruits) {
//     // console.log(fruit)
// }

// const numbers = [1,2,3,4,5,6]

// // sum all numbers in array

// const double = (numbers) => {
//     let result2 = []
    
//     for (const number of numbers) {
//         result2.push(number * 2)
//     }
//     return result2
// }

// // console.log(double([1,2,3,4,5,6,7]))

// const squared = (numberss) => {
//     let result3 = []

//     for(const numberz of numberss) {
//         result3.push(numberz ** 2)
//     }
//     return result3
// }

// // console.log(squared([1,2,3,4,5,6,7]))

// const howManyLetters = () => {
//     let result4 = 0;

//     for (const index in phrase) {
//         console.log(Number(index) + 1)
//         result4 = Number(index) + 1
//     }
//     return {result4}
// }
// // const phrase = prompt('write your phrase')

// // console.log(howManyLetters())

// // const sumArray = (num) => {
// //     let result = 0;

// //     for (const number of num) {
// //         console.log(number)
// //         result += number
// //     }
// //     return {result}
// // }

// // const nums = [1,2,3,4]
// // console.log(sumArray(nums))

// // const multiArray = (num) => {
// //     let result = 3;

// //     for(const number of num) {
// //         console.log(number)
// //         result = result * number
// //     }
// //     return {result}
// // }
// // const multi = [1,2,3,4]
// // console.log(multiArray(multi))


// const max = (numbers) => {
//     let result = numbers[0];

//     //loop
//     for (const number of numbers) {
//         if (number > result)
//         result = number
//     } 
//     return {result}
// }
// // console.log(max([1,2,3,4]))

// const letterFrequency = (phrase) => {
//     console.log(phrase)
//     // make a `frequency` object {}
//     let frequency = {}
//     // loop
//     for (const letter of phrase) {
//         // check if letter exists in frequency
//         if (letter in frequency) {
//          // if it exists increment value by +1
//          frequency[letter] += 1
//               // otherwise, set the value to 1
//         } else {
//             frequency[letter] = 1
//         }
//     }
//     return frequency
// }

// // console.log(letterFrequency('kdjlsaflkjdcb,'))

// const wordFrequency = (phrase) => {
//     let frequency = {}
//     const  words = phrase.split(' ')
//     console.log(words)
//     for (const word of words ) {
//         console.log(word)
//         if (word in frequency){
//             frequency[word] += 1
//         } else{
//             frequency[word] = 1
//         }
//     }
//     return frequency
// }

// // const userInput = prompt('write your sentence')
// // console.log(wordFrequency(userInput))

// const sortNumbers = [1,8,7,5,4,3,10,5,4,3,2]

// function sorting (a,b) {
//     return a - b
// }

// console.log(sortNumbers.sort(sorting))

// const nums = [1,4,5,7,10,4,2,17,18,19,20,10,10,7,1,3,0]

// nums.sort((x,y) => {
//     return x - y

    
// })

// console.log(nums)
