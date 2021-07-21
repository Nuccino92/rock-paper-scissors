
// the function to play a game of 5 rounds
function game() {

    const games = 5;
    let playerScore = 0;
    let computerScore = 0;
    
// created loop for the game    
    for (let i = 0; i < games; i++) {

// the player input promt, creates the player choice
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

// computer choices       
        const choices = ["rock", "paper", "scissors"];

// created function to generate a computer choice and give the computer selection a value    
    function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
    }
    let computerSelection = computerPlay();
    
// created results for each round using playround function and stored the score in each   
    let round = playRound (playerSelection, computerSelection);
    if(round === "You won!") {
        playerScore++;
        console.log("You won! " + "the score is " + playerScore + " to " + computerScore);
    }
    else if (round === "You lost") {
        computerScore++;
        console.log("You lost " + "the score is " + playerScore + " to " + computerScore);
    }
    else if (round === "You tied") {
        console.log("You tied " + "the score is " + playerScore + " to " + computerScore);
    }
}
    if(playerScore > computerScore) {
        console.log("You beat the computer " + playerScore + " to " + computerScore);
    }
    else if (playerScore < computerScore) {
        console.log("You lost to the computer " + playerScore + " to " + computerScore);
    }
    else console.log("You tied the game.")
}
//end of the game function


// the function that compares theselections of the player and computer and returns a value to be used in game
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() == "rock".toLowerCase() && computerSelection == "rock") {
        return "You tied";
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lost";
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You won!";
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        return "You won!";
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        return "You tied";
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
       return "You lost";
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lost";
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You won!";
    }
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "You tied";
    }
}
// end of the playround function

console.log(game())

