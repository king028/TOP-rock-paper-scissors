// adding a function the will randomly return one out of three choices
function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    let random = choices[Math.floor(choices.length * Math.random())];

    return random;
}


let playerScore = 0;
let computerScore = 0;
let draw = 0;

//this function will decide the winner between player and computer
function singleRound (playerSelection, computerSelection) {    

    if (playerSelection === computerSelection){
        draw += 1;
        return drawMatch;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
        return playerWin;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        return computerWin;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
        return playerWin;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
       computerScore += 1;
       return computerWin;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore += 1;
        return playerWin;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        return computerWin;
    };

    
}


let playerWin = 'You won';
let computerWin = 'Computer won';
let drawMatch = 'It\'s a draw';




//Here we will loop over five rounds of the games and keep the scores
function game() {


    for(let i = 0; i < 5; i++){

        const playerSelection = prompt('Enter your choice rock paper or scissors:').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(singleRound(playerSelection, computerSelection));

        
    };

    console.log('Player score is: ' + playerScore);
    console.log('Computer score is: ' + computerScore);
    console.log('Draws: ' + draw);
}

game();
