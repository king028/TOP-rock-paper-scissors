const div = document.createElement('div'); // created a div to the buttons inside it
div.id = 'container';
document.body.appendChild(div);

const rock = document.createElement('button');
rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    singleRound(playerSelection, computerSelection);
    scoreTracker(playerScore, computerScore, draw);
    pickWinner(playerScore, computerScore);
});
rock.classList.add('rockBtn');
rock.textContent = 'Rock';
div.appendChild(rock);

const paper = document.createElement('button');
paper.addEventListener('click',() => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    singleRound(playerSelection, computerSelection);
    scoreTracker(playerScore, computerScore, draw);
    pickWinner(playerScore, computerScore);
});
paper.classList.add('paperBtn');
paper.textContent = 'Paper';
div.appendChild(paper);

const scissors = document.createElement('button');
scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    singleRound(playerSelection, computerSelection);
    scoreTracker(playerScore, computerScore, draw);
    pickWinner(playerScore, computerScore);
});
scissors.classList.add('scissorsBtn');
scissors.textContent = 'Scissors';
div.appendChild(scissors);


const displayDiv = document.createElement('div');
displayDiv.id = 'displayDiv';
document.body.appendChild(displayDiv);

const p = document.createElement('p');

const score = document.createElement('div');
displayDiv.appendChild(score);

const playerSc = document.createElement('span');
const computerSc = document.createElement('span');
const DrawR = document.createElement('span');

const h2 = document.createElement('h2');




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
        p.innerText = 'It\'s a draw';
        draw += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        p.innerText = 'player won rock beats scissors';
        playerScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        p.innerText = 'Computer won paper beats rock';
        computerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        p.innerText = 'player won paper beats rock';
        playerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        p.innerText = 'Computer won scissors beats paper';
        computerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        p.innerText = 'player won scissors beats paper';
        playerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        p.innerText = 'Computer won rock beats scissors';
        computerScore += 1;
    };
    displayDiv.appendChild(p);
}

const pickWinner = (playerScore, computerScore) => { //decides winner once they hit 5 points and shows the results with a text
if(playerScore === 5){
    h2.classList.add('player-won');
    h2.innerText = `Congratulations, You Won! ${playerScore} to ${computerScore}`;
    displayDiv.appendChild(h2);
} else if(computerScore === 5){
    h2.classList.add('computer-won');
    h2.innerText = `Too bad you lost ${playerScore} to ${computerScore}`;
    displayDiv.appendChild(h2);
}

}

const scoreTracker = (playerScore, computerScore, draw) => { // keeping track of the scores and showing it in the webpage
    playerSc.classList.add('pScore');
    playerSc.innerText = `Player score: ${playerScore}`;
    score.appendChild(playerSc);

    computerSc.classList.add('cScore');
    computerSc.innerText = ` Computer score: ${computerScore}`;
    score.appendChild(computerSc);

    DrawR.classList.add('pScore');
    DrawR.innerText = ` Draws: ${draw}`;
    score.appendChild(DrawR);
}
