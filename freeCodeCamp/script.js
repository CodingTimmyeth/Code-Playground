let countEl = document.getElementById('count-el')
let saveBtn = document.getElementById('save-btn')
let saveEl = document.getElementById('save-el')
let clearBtn = document.getElementById('clear-btn')

count = 0 

function increment () {
    count += 1
    countEl.innerText = count
}

function save() {
    let showSave = count + " - "
    saveEl.innerText += ' ' + showSave
    countEl.innerText = 0
    count = 0
}


let myPoints = 3


function add3Points () {
    myPoints += 3
}

function remove1Point () {
    myPoints -= 1
}


add3Points()
remove1Point()
add3Points()
remove1Point()
add3Points()

console.log(myPoints)

