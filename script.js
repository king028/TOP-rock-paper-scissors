// adding a function the will randomly return one out of three choices
function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    let random = choices[Math.floor(choices.length * Math.random())];

    return random;
}
//console.log(getComputerChoice())

function singleRound (playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return'You Win! Rock beats Scissors';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Its a tie! both got Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return'You Win! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'Its a tie! both got Paper';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return'You Lose! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return'You Win! Scissors beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'Its a tie! both got Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return'You Lose! Rock beats Scissors';
    }
}
let playerChoice = prompt('Enter your choice rock paper or scissors: ')
console.log(singleRound(playerChoice, getComputerChoice()));