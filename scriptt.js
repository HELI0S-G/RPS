const buttons = document.querySelectorAll(".choice");
const resultText = document.getElementById("result");
const details = document.getElementById("details");

const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");

const resetBtn = document.getElementById("resetBtn");

let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        const computerChoice =
            choices[Math.floor(Math.random() * choices.length)];

        playGame(playerChoice, computerChoice);
    });
});

function playGame(player, computer) {

    if (player === computer) {
        resultText.textContent = "It's a Draw!";
    }
    else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        resultText.textContent = "You Win! 🎉";
        resultText.style.color = "green";
    }
    else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        resultText.textContent = "You Lose! 😢";
        resultText.style.color = "red";
    }

    details.textContent =
        `You chose ${player} - Computer chose ${computer}`;
}

resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;

    playerScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;

    resultText.textContent = "Make your choice!";
    resultText.style.color = "black";
    details.textContent = "";
});