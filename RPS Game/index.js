const startBtn = document.getElementById('start-btn');
const containDiv = document.querySelector('.container')
const player = document.getElementById('player');
const compPlayer = document.getElementById('computer');
const scoreKeeper = document.getElementById('score-keeper');

let arrRps = ['Rock', 'Paper', 'Scissors'];

startBtn.addEventListener('click', function(){
    containDiv.style.display = "none";
    game()
});

function game() {
    scoreKeeper.textContent = 'Score : 0' ;
    player.textContent = 'Player : '
    compPlayer.textContent = 'Computer :'
}

function computerChoice() {
    const randomChoice = Math.floor(Math.random() * arrRps.length)
    const finalChoice = arrRps[randomChoice]
    console.log(finalChoice)
}

function rpsGame() {
    const playerSelection = console.log(prompt('Rock, Paper, or Scissors?'));
    const computerSelection = computerChoice();
  
    let score = 0;
  
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
      console.log('Player Wins!');
      score++;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
      console.log('Player Wins!');
      score++;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
      console.log('Player Wins!');
      score++;
    } else if (playerSelection === computerSelection) {
      console.log('Draw!');
    } else {
      console.log('Computer Wins!');
    }
}
  
  rpsGame();
  
