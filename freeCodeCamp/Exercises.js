// // let  errorMessage = document.getElementById('error')


// // function message() {
// //     let error = 'Something went wrong, please try again'
// //     errorMessage.innerText = error
// // }


// // let num1 = 8
// // let num2 = 2

// // document.getElementById('num1-el').textContent = num1
// // document.getElementById('num2-el').textContent = num2
// // let totalSum = document.getElementById('sum-el')

// // function add() {
// //     let addTotal = num1 + num2
// //     totalSum.textContent = 'Sum:'+ ' ' + addTotal
// // }

// // function subtract() {
// //     let subTotal = num1 num2
// //     totalSum.textContent = 'Sum:'+ ' ' + subTotal
// // }

// // function divide() {
// //     let divideTotal = num1 / num2
// //     totalSum.textContent = 'Sum:'+ ' ' + divideTotal
// // }
// // function multiply() {
// //     let multiTotal = num1 * num2
// //     totalSum.textContent = 'Sum:'+ ' ' + multiTotal

// // }


// // ARRAYS ordered lists of items copostie / complex data types

// // 0 indexed

// // let featuredPosts = [
// //     "Check out my netflix clone", 
// //     "Here's my code for my project", 
// //     "I've just relaunched my portfolio"
// // ]

// // console.log(featuredPosts.length)


// // let cards = [7,4]
// // cards.push(6)

// // console.log(cards)

// // let messages = [
// //     "Hey, how's it going?",
// //     "I'm great, thank you! How about you?",
// //     "All good. Been working on my portfolio lately.",
// //     "Same Here!",
// //     "🌟"
// // ]

// // for (const message of messages) {
// //     console.log(message)
// // }



// // const numberArray = [10,20,30,40,50,60,70,80,90,100]

// // for(const number of numberArray) {
// //     console.log(number) 
// // }

// // for(let i = 10; i < 101; i += 10 ) {
// //     console.log(i)
// // }

// // let sentence = ["Hello",  "my", "name", "is", "Tommy"]

// // let greetingEl = document.getElementById('greeting-el')

// // for (const sentences of sentence){
// //     greetingEl.innerText += sentences
// // }


// let player1Time = 102 
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time){
//         return player1Time
//     } else if (player2Time < player1Time){
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()

// // console.log(fastestRace)

// function raceTime(){
//     return player1Time + player2Time
// }

// let totalRaceTime = raceTime()
// // console.log(totalRaceTime)


// function rollDice() {
//     let roll = Math.floor(Math.random() * 6) + 1
//     return roll
// }
// // console.log(rollDice())

// let hasCompletedCourse = true
// let givesCertificate = true

// function generateCertificate() {
//     console.log('Generating certificate....')
// }

// if (hasCompletedCourse === true && givesCertificate === true) {
//         // generateCertificate()
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false || hasHintsLeft === false) {
//     // showSolution()
// }

// function showSolution() {
//     console.log('Showing the Solution.......')
// }

// let likesDocumentaries = true
// let likesStartups = true

// if(likesDocumentaries === true || likesStartups === false) {
//     // recommendMovie()
// }

// function recommendMovie() {
//     console.log('Hey, check out this new flim we think you will like!')
// }

// let course = {
//     title: 'Learn CSS Grid for free',
//     lessons: 16,
//     creator: 'Per Harald Borgen',
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ['html', 'css']
// }

// // console.log(course.tags)

// let castle = {
//     free: false,
//     name: 'The Great Gatsby',
//     avaliableDays: 4,
//     hashtags: ['castle','huge','multi-family','beatiful'],
//     location: 'Central London',
//     price: 190,
//     reviews: 4.95
// }

// // console.log(castle.price)


// let person = {
//     name: 'Tommy', 
//     age: 19,
//     country: 'United States'
// }

// function logData() {
//     let message = `${person.name} is ${person.age} years old and lives in ${person.country} `
//     console.log(message)
// }

// // logData()

// // let age = 19

// // if (age < 6) {
// //     console.log('free')
// // } else if (age < 18) {
// //     console.log('child discount')
// // } else if (age < 27) {
// //     console.log('student discount')
// // } else if (age < 67){
// //     console.log('full price')
// // } else {
// //     console.log('senior citizen discount')
// // }


// // let largeCountries = ['China', 'India', 'USA', 'Indonesia', 'Pakistan']

// // console.log('The 5 Largest Countries in the World:')
// // for (const country of largeCountries) {
// //     console.log('- ' + country)
// // }

// // let country = document.getElementById('Countries')

// // let largeCountries = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco']

// // largeCountries.pop ()
// // largeCountries.push('Monaco')
// // largeCountries.shift()
// // largeCountries.unshift('China')
// // console.log(largeCountries)

// // let dayOfMonth = 13
// // let weekday = 'Friday'

// // if (dayOfMonth === 13 && weekday === 'Friday') {
// //     console.log('😱')
// // }

// // let hands = ['Rock', 'Paper', 'Scissors']

// // function rpsGame() {
// //     let randomIndex = Math.floor(Math.random() * 3) 
// //     return hands[randomIndex]
// // }
// // console.log(rpsGame())

// let fruit = ['🍎','🍊', '🍎', '🍎','🍊']
// let appleShelf = document.getElementById('apple-shelf')
// let orangeShelf = document.getElementById('orange-shelf')

// function organizeFruits () {
//     for (let i = 0; i < fruit.length; i++){
//         if(fruit[i] === '🍎') {
//             appleShelf.textContent += '🍎'
//         } else if(fruit[i] === '🍊') {
//             orangeShelf.textContent += '🍊'
//         }
//     }
// }
// organizeFruits()


// let bigBox = document.getElementById ('box')

// bigBox = addEventListener('click', function(){
//     console.log('I want to open the box!')
// })

// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = '5 - 12 days'

// shippingCost = 15
// shipping = '7 - 14 days'

// const fullPrice = basePrice - discount + shippingCost

// console.log(`Total Cost: ${fullPrice}. It will arrive in ${shippingTime}`)

const containerEl = document.getElementById('container')

containerEl.innerHTML = "<button onclick='buy()'> Buy! </button>"

function buy() {
    containerEl.innerHTML += '<p> Thank you for buying! </p>'
}
 
const recipient = 'James'

const  sender = 'Tommy Miguel'

const email = `
Hey ${recipient} !

How is it going?

Cheers ${sender}`

// console.log(email)


/*
false
true
true
false
false -
true - 
*/


// console.log( Boolean(0) )

// truthy
// falsy


const welcomeEl = document.getElementById('welcome-el')

function greetUser (greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

greetUser("How's it going", 'Dennis', '🔥')


function add(a,b) {
    return a + b
}
console.log(add(3,4))
console.log(add(9, 102))


// parameters
// arguments
// parameters
// arguments


function getFirst(arr){
    return arr[1]
}

let firstCard = getFirst(['blackjack', 'full-house', 'pair'])

console.log(firstCard)