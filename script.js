'use strict';

// Selecting elements
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

score0El.textContent = '0';
score1El.textContent = '0';

diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality

btnRoll.addEventListener('click', function () {
  //.1 Generate Randome Number
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //.2 Display Dice
  diceEl.classList.remove('hidden');

  diceEl.src = `dice-${dice}.png`;
  //.3 Check for rolled one
  if (dice !== 1) {
    //Add dice to current score
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
