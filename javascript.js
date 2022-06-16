const playsArray = ["rock", "paper", "scissors"];
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameWinner = ""
}


// computer play function
function computerPlay() {
    return playsArray[Math.floor(Math.random()*playsArray.length)];
};

/* player play function
function playerPlay() {
    let input = prompt("type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    return input
}; */



// Add event listeners to the new buttons/run round on click/track and end game
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id;
        const computerSelection = computerPlay();
        battleWinText.textContent = (playRound(playerSelection, computerSelection));
        playerWinText.textContent = "Player Score: " + playerScore;
        computerWinText.textContent = "Computer Score: " + computerScore;
        endGame();
    })
})


// play each round and determine winner
function playRound(playerSelection, computerSelection) {
    // (not needed?) let playerSelection = playerPlay();
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

// create DOM div for results
const container = document.querySelector("#container")
const resultsDiv = document.createElement("div");
resultsDiv.style.marginTop = "20px";
container.appendChild(resultsDiv);

// create player win tracking DOM
const playerWinText = document.createElement("p");
playerWinText.style.color = "blue";
playerWinText.textContent = "Player Score:" + playerScore;
resultsDiv.appendChild(playerWinText);

// create computer win tracking DOM
const computerWinText = document.createElement("p");
computerWinText.style.color = "blue";
computerWinText.textContent = "Computer Score:" + computerScore;
resultsDiv.appendChild(computerWinText);


// create battle win text DOM
const battleWinText = document.createElement("p");
battleWinText.style.color = "black";
resultsDiv.appendChild(battleWinText)

// create game win text DOM
const gameWinText = document.createElement("p");
gameWinText.style.color = "orange";
gameWinText.textContent = "You win! Click play again to play again"
resultsDiv.appendChild(gameWintext);

// determine winner-- first to 5 points
 function endGame() {
     if (playerScore == 5) {
         gameWinner = "You win! Click play again to play again."
         gameWinText.textContent = gameWinner;

         // disable buttons
         document.getElementById("rock").disabled = true;
         document.getElementById("paper").disabled = true;
         document.getElementById("scissors").disabled = true;

        //create new DOM button to replay
        const playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again!";
        resultsDiv.appendChild(playAgainButton);

        //if clicked, reload page
        playAgainButton.addEventListener("click", () => {
            location.reload();
        });
     } else if (computerScore == 5) {
        gameWinner = "The Computer won! Play again!"
        gameWinText.textContent = gameWinner;

        // disable buttons
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;

       //create new DOM button to replay
       const playAgainButton = document.createElement("button");
       playAgainButton.textContent = "Play Again!";
       resultsDiv.appendChild(playAgainButton);

       //if clicked, reload page
       playAgainButton.addEventListener("click", () => {
           location.reload();
       });
     }
}

game();
