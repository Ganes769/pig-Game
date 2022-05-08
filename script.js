'use strict';
//Variables For The Score And All projects
const scoreEl1 = document.querySelector('#score--0');
const ScoreEl2 = document.getElementById('score--1')
const diceEl = document.querySelector('.dice');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
//Selecting Buttons:
const btnNew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
//Todo:Defining the Variables:
let playing, scores, activeplayer, currentScore;
const init = function() {
    currentScore = 0;
    scores = [0, 0];
    activeplayer = 0;
    playing = true;
    currentEl0.textContent = 0;
    currentEl1.textContent = 0;
    scoreEl1.textContent = 0;
    ScoreEl2.textContent = 0;
    playerEl0.classList.remove('player--winner');
    playerEl1.classList.remove('player--winner');

}
init();


//Setting Initial player Dice Contennt And Hiding Dice Initially:
scoreEl1.textContent = 0;
ScoreEl2.textContent = 0;
diceEl.classList.add('hidden'); //Hiding the dice
//? Switch the player Function:
const switchplayer = function() {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentScore = 0;
    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active');
}

//Role Dice Buton Functionality:
btnroll.addEventListener('click', function() {

    if (playing) {
        //Generating Random Dice Roll:
        let dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        //Condition For Switching The Player If Dice Occur 1:
        if (dice !== 1) {

            // scoreEl1.textContent = dice;
            currentScore = currentScore + dice;

            document.getElementById(`current--${activeplayer}`).textContent = currentScore;
            // currentEl0.textContent = currentScore;

            //TODO:Switchung The player if Dice Value is 1:

        } else {

            //Switching:
            switchplayer();



        }
    }

});
//Hold Button Functionality:
btnhold.addEventListener('click', function() {

    if (playing) {
        //Add Score of player:
        scores[activeplayer] += currentScore;
        console.log(scores[activeplayer]);
        document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];

        //Final Goal score>=100:
        if (scores[activeplayer] >= 10) {
            playing = false;
            //Finish The Game
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active ');
        } else {
            switchplayer();
        }
    }

});
//Resetting The Game;
btnNew.addEventListener('click', init);