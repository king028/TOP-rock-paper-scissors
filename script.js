// adding a function the will randomly return one out of three choices
function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    let random = choices[Math.floor(choices.length * Math.random())];

    return random;
}


let playerScore = 0;
//let oldPlayerScore = playerScore;

let computerScore = 0;
//let oldComputerScore = computerScore;

let draw = 0;
//let oldDraw = draw;

//this function will decide the winner between player and computer
function singleRound (playerSelection, computerSelection) {    

    if (playerSelection === computerSelection){
        return drawMatch;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return playerWin;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return computerWin;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return playerWin;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
       return computerWin;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return playerWin;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return computerWin;
    };

    
}


let playerWin = 'player won';
let computerWin = 'Computer won';
let drawMatch = 'It\'s a draw';




//Here we will loop over five rounds of the games and keep the scores
function game() {


    for(let i = 0; i < 5; i++){

        const playerSelection = prompt('Enter your choice rock paper or scissors:').toLowerCase();
        const computerSelection = getComputerChoice();
        let winner = singleRound(playerSelection, computerSelection);
        console.log(winner);

        if(winner == playerWin){
            playerScore += 1;
            alert('player wins this round');
        }else if (winner == computerWin){
            computerScore += 1;
            alert('Computer wins this round');
        }else if(winner == drawMatch){
            draw += 1;
            alert('This round is a draw');
        }
    };

    alert('Player score is: ' + playerScore);
    alert('Computer score is: ' + computerScore);
    alert('Draws: ' + draw);
}

game();
