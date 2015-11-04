////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    // Use a hash with a higher value representing priority
    var choices = {'paper':1,'scissors':2,'rock':3}

    // grabs order of each choice
    playerMove = choices[playerMove];
    computerMove = choices[computerMove];

    //Player wins if -1 from computer, loss if +1 from computer, win if +2 from computer.
    if (playerMove === computerMove)
        winner = 'tie';
    else if ((playerMove+1 === computerMove) || (playerMove-2 === computerMove))
        winner = 'computer';
    else if ((playerMove-1 === computerMove) || (playerMove+2 === computerMove))
        winner = 'player';

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
        //select for player by using randomPlay()
        switch(getWinner(getPlayerMove(randomPlay()), getComputerMove())) {
            case 'player':
                playerWins++;
                break;
            case 'computer':
                computerWins++;
                break;
        }
    }
    return [playerWins, computerWins];
}

