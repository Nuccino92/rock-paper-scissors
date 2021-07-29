
const scoreBoard_div = document.querySelector(".score-board");
const computerScore_span = document.getElementById("computer-score");
const playerScore_span = document.getElementById("player-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("img-r");
const paper_div = document.getElementById("img-p");
const scissors_div = document.getElementById("img-s");
const actionMessage_div = document.getElementById("action-message");
const reset_span = document.getElementById("reset")

let playerScore = 0;
let computerScore = 0;


    function reset() {
        reset_span.addEventListener('click', function() {
            playerScore_span.textContent = 0;
            computerScore_span.textContent = 0;
            playerScore = 0;
            computerScore = 0;
        })
    }
    reset();
    
    function main() {
        rock_div.addEventListener('click', function(){
            playRound("Rock");
        })
        paper_div.addEventListener('click', function(){
            playRound("Paper");
        })
        scissors_div.addEventListener('click', function(){
            playRound("Scissors");
        })
    }
    main();

    function computerPlay() {
        const choices = ["Rock", "Paper", "Scissors"];
        const randomNumber = (Math.floor(Math.random()*3));
        return choices[randomNumber];
    }

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection == "Rock" && computerSelection == "Rock") {
        tied(playerSelection, computerSelection);
    }
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        lose(playerSelection, computerSelection);
    }
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        win(playerSelection, computerSelection);
    }
    if (playerSelection == "Paper" && computerSelection == "Rock") {
        win(playerSelection, computerSelection);
    }
    if (playerSelection == "Paper" && computerSelection == "Paper") {
        tied(playerSelection, computerSelection);
    }
    if (playerSelection == "Paper" && computerSelection == "Scissors") {
        lose(playerSelection, computerSelection);
    }
    if (playerSelection == "Scissors" && computerSelection == "Rock") {
        lose(playerSelection, computerSelection);
    }
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        win(playerSelection, computerSelection);
    }
    if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        tied(playerSelection, computerSelection);
    }
}
function win(playerSelection, computerSelection) {
    playerScore++;
    playerScore_span.textContent = playerScore;
    result_p.textContent = "The computer picked " + computerSelection + ": You Won!"; 
    scoreBoard_div.classList.add('win-color');  //colors scoreboard
    setTimeout(function(){scoreBoard_div.classList.remove('win-color')}, 300);
}
function tied(playerSelection, computerSelection) {
    result_p.textContent = "You both selected " + playerSelection;
    scoreBoard_div.classList.add('tie-color');  //colors scoreboard
    setTimeout(function(){scoreBoard_div.classList.remove('tie-color')}, 300);
}
function lose(playerSelection, computerSelection) {
    computerScore++;
    computerScore_span.textContent = computerScore;
    result_p.textContent = "The computer picked " + computerSelection + " :(";
    scoreBoard_div.classList.add('lose-color');  //colors scoreboard
    setTimeout(function(){scoreBoard_div.classList.remove('lose-color')}, 300);
}

