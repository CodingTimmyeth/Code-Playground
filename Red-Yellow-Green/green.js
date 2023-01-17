let redSquare = document.getElementById('square');
let yellowSquare = document.querySelector('.yellow');
let greenSquare = document.querySelector('.green');
const resetBtn = document.getElementById('reset-btn');

let score = 0

redSquare.addEventListener('click', function(){
    console.log('clicked')
    score++;
    redSquare.innerText = score;
})

let scorer = 0;
yellowSquare.addEventListener('click', function(){
    console.log('clicked2')
    scorer++;
    yellowSquare.innerText = scorer
})

let points = 0;

greenSquare.addEventListener('click', function(){
    console.log('clicked3')
    points++;
    greenSquare.innerText = points
})

function restart() {
    greenSquare = 0;
    redSquare = 0;
    yellowSquare = 0;
}

resetBtn.addEventListener('click', function(){
    restart()
})