'use strict';

// Selecting the Elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality

//1. Generating random dice roll
function roll() {
    const dice = Math.trunc(Math.random() * 6 ) + 1;
    console.log(dice)

// Display the dice
    diceEl.classList.remove('hidden')
//Select the src element and we can use template literal to dynamically manipulate which image we want to select
    diceEl.src = `dice-${dice}.png`

//Check for rolled 1
    if(dice !== 1){
        //Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        //Switch to next player
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active')
    }
}

btnRoll.addEventListener('click', roll)