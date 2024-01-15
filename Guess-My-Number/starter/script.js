'use strict';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.message').textContent = 'Take your BEST GUESS');
// console.log(document.querySelector('.guess').value = 22)

let secretNumber = Math.trunc(Math.random()* 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', checkAnswer);

function checkAnswer() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    // When there is no input
    if(!guess) {
        document.querySelector('.message').textContent = 'NO VALUE INPUT 🚫'
    } 
    // When player wins
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number! 🎉'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '400px';
    } 
    // When guess is too high
    else if(guess > secretNumber) {
        if(score > 1){
        document.querySelector('.message').textContent = 'Too High!'
        score--;
        document.querySelector('.score').textContent = score;
        } else document.querySelector('.message').textContent = 'You Lost The Game!';
        document.querySelector('.score').textContent = 0
    } 
       // When gues is too low
        else if(guess < secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = 'Too Low!'
            score--;
            document.querySelector('.score').textContent = score;
            } else document.querySelector('.message').textContent = 'You Lost The Game!';
        document.querySelector('.score').textContent = 0;
    }
}