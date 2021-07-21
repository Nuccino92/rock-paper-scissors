
// function to generate a random selection for computer

let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound() {
    
    if (playerSelection.toLowerCase() == "rock".toLowerCase() && computerSelection == "rock") {
        return "You tied";
    }
    if (playerSelection.toLowerCase() == "rock".toLowerCase() && computerSelection == "paper") {
        computerScore++; return "You lost";
    }
    if (playerSelection.toLowerCase() == "rock".toLowerCase() && computerSelection == "scissors") {
        playerScore++; return "You won!";
    }
    if (playerSelection.toLowerCase() == "paper".toLowerCase() && computerSelection == "rock") {
        playerScore++; return "You won!";
    }
    if (playerSelection.toLowerCase() == "paper".toLowerCase() && computerSelection == "paper") {
        return "You tied";
    }
    if (playerSelection.toLowerCase() == "paper".toLowerCase() && computerSelection == "scissors") {
        computerScore++; return "You lost";
    }
    if (playerSelection.toLowerCase() == "scissors".toLowerCase() && computerSelection == "rock") {
        computerScore++; return "You lost";
    }
    if (playerSelection.toLowerCase() == "scissors".toLowerCase() && computerSelection == "paper") {
        playerScore++; return "You won!";
    }
    if (playerSelection.toLowerCase() == "scissors".toLowerCase() && computerSelection == "scissors") {
        return "You tied";
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    
    playRound()

}





console.log(playRound())
