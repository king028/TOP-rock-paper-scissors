// adding a function the will randomly  return one out of three choices
function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    let random = choices[Math.floor(choices.length * Math.random())];

    return random;
}
console.log(getComputerChoice())