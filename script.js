//making a game of rock paper scossrs where a user of the site plays against a computer

//need to create a function where a computer is made to randomly select between rock, paper or scissors





function computerPlay() {
    compChoice = Math.floor(Math.random()*3);
    
    if (compChoice == 0) {
        return "Rock";
    }   
    else if (compChoice == 1) {
        return "Paper";
    }
    else (compChoice == 2) 
        return "Scissors";
}
  


//need to create a function to choose the winner of the 1 round

function playRound(playerSelection, computerSelection) {



    if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "You tied";
    }
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lost";
    }
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You won!";
    }
    if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You won!";
    }
    if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "You tied";
    }
    if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You lost";
    }
    if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lost";
    }
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You won!";
    }
    if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "You tied";
    }
}

    const computerSelection = computerPlay();
    const playerSelection = "Rock";
        if (playerSelection.toLocaleLowerCase() ==) 
   
    
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    

