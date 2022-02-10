// Computer's rock paper scissor
const computerPlay = function () {
  const items = ["rock", "paper", "scissor"];
  const randomItem = items[Math.floor(Math.random() * 3)];
  return randomItem;
};

// Computer and player's initial score
let computerScore = 0;
let playerScore = 0;

const playRound = function (playerSelection, computerSelection) {
  // Rock vs Paper
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log("You lose! Paper beats rock.");
    console.log(
      `your score: ${playerScore}   |  computer's score: ${computerScore}`
    );

    // Rock vs Scissor
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    playerScore++;
    console.log("You win! Rock beats scissor.");
    console.log(
      `your score: ${playerScore}   |  computer's score: ${computerScore}`
    );

    // Paper vs Rock
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("You win! Paper beats rock.");
    console.log(
      `your score: ${playerScore}   |  computer's score: ${computerScore}`
    );

    // Paper vs Scissor
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    computerScore++;
    console.log("You lose! Scissor beats paper.");
    console.log(
      `your score: ${playerScore}   |  computer's score: ${computerScore}`
    );

    // Scissor vs Rock
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    computerScore++;
    console.log("You lose! Rock beats scissor .");
    console.log(
      `your score: ${playerScore}   |  computer's score: ${computerScore}`
    );

    // Scissor vs Paper
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    playerScore++;
    console.log("You win! Scissor beats paper.");
    console.log(
      `your score: ${playerScore}   |  computer's score: ${computerScore}`
    );

    // Tie
  } else if (playerSelection === computerSelection) {
    console.log(`It's a tie.`);

    // Wrong input
  } else {
    console.log(`Wrong input. Choose either "rock", "paper", or "scissor".`);
  }
};

// The game
const game = function () {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      `Choose between "rock", "paper", or "scissor."`
    )
      .toLowerCase()
      .trim();
    console.log(`You chose ${playerSelection}`);
    const computerSelection = computerPlay();
    console.log(`The computer chose ${computerSelection}`);
    playRound(playerSelection, computerSelection);
  }
  if (computerScore > playerScore) {
    console.log(
      `You lost. The computer's score was ${computerScore}, and yours was ${playerScore}.`
    );
  } else if (playerScore > computerScore) {
    console.log(
      `You won! Your score was ${playerScore}, and the computer's score was ${computerScore}.`
    );
  }
};

game();
