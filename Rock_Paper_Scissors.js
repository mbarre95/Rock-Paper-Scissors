let playerScore = 0;
let computerScore = 0;

const tools = document.querySelectorAll('#tools > button');
tools.forEach(tool => {
    tool.addEventListener('click', playGame);
});

function playGame() {
    const result = playRound(this.className, computerPlay());
    updateScore(result);

    let finalResult = document.querySelector('.final-result'); 
    if (playerScore == 5 && playerScore > computerScore) {
        finalResult.textContent = "You Won the Game!"
    } else if (playerScore < computerScore && computerScore == 5) {
        finalResult.textContent = "You Lost the Game"
    } else if (playerScore == 5 && computerScore == 5) {
        finalResult.textContent = "Tie Game"
    }

    if (playerScore == 5 || computerScore == 5) {
        endGame();
    }
}

function endGame() {
    tools.forEach(tool => {
        tool.removeEventListener('click', playGame);
    });

    const playAgainBtn = document.querySelector('.end > button');
    playAgainBtn.addEventListener('click', location.reload.bind(location));
}
function updateScore(result) {
    if (result.slice(0, 7) === "You Win") {
        playerScore++;
    } else if (result.slice(0, 8) === "You Lose") {
        computerScore++;
    }

    let displayPlayerScore = document.querySelector('.player .score');
    displayPlayerScore.textContent = playerScore.toString();
    let displayComputerScore = document.querySelector('.computer .score');
    displayComputerScore.textContent = computerScore.toString();

    let displayResult = document.querySelector('.result .message');
    displayResult.textContent = result;
}

function computerPlay() {
    let outcome = ["Rock", "Paper", "Scissors"];
    return outcome[Math.floor(Math.random() * outcome.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (playerSelection === computerSelection) {
        return "Tie! Try again"
    }
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock"
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper"
    }
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors"
    }
    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper"
    }
    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors"
    }
}