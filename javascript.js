const playsArray = ["rock", "paper", "scissors"];
//const playerSelection = playerPlay();
//const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return playsArray[Math.floor(Math.random()*playsArray.length)];
};

function playerPlay() {
    let input = prompt("type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    return input
};



function playRound() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    if (computerSelection === playerSelection) {
        console.log("You Tied!")
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        console.log(`Computer played ${computerSelection}, you played ${playerSelection}...you lose! Computer: ${computerScore} - You: ${playerScore}`)
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++;
        console.log(`Computer played ${computerSelection}, you played ${playerSelection}...you win! Computer: ${computerScore} - You: ${playerScore}`)
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        console.log(`Computer played ${computerSelection}, you played ${playerSelection}...you lose! Computer: ${computerScore} - You: ${playerScore}`)
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++;
        console.log(`Computer played ${computerSelection}, you played ${playerSelection}...you win! Computer: ${computerScore} - You: ${playerScore}`)
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        console.log(`Computer played ${computerSelection}, you played ${playerSelection}...you lose! Computer: ${computerScore} - You: ${playerScore}`)
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++;
        console.log(`Computer played ${computerSelection}, you played ${playerSelection}...you win! Computer: ${computerScore} - You: ${playerScore}`)
    } else {
        console.log("There was an error")
    };    
};

function game() {
    playerScore = 0;
    computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        playRound();
    }
    if (playerScore >= 3) {
        console.log("You win! Reload page to play again.")
    } else if (computerScore >= 3) {
        console.log("You lost! Reload page to play again.")
    }
}

game()