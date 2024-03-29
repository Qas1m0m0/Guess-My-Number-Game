'use strict';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.message').textContent = 'Take your BEST GUESS');
// console.log(document.querySelector('.guess').value = 22)

let secretNumber = Math.trunc(Math.random()* 20) + 1;
let score = 20;
let highscore= 0;

document.querySelector('.check').addEventListener('click', checkAnswer);

function checkAnswer() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

function resetGame() {
    score = 20;
    secretNumber = Math.trunc(Math.random()* 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '240px';
   
}
    // When there is no input
    if(!guess) {
        document.querySelector('.message').textContent = 'NO VALUE INPUT 🚫'
    } 
    // When player wins
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number! 🎉'
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '400px';
        document.querySelector('.again').addEventListener('click', resetGame);

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } 

    //  // When gues is wrong:
     else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
     }
    }