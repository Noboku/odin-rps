// Putting HTML classes and ID's into variables for easy access
const btnID = document.getElementById("btn");
const btnID2 = document.getElementById("btn2");
const btnID3 = document.getElementById("btn3");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const player = document.querySelector(".player");
const pc = document.querySelector(".pc");
const statement = document.querySelector(".statement");

// Computer's rock paper scissor
const computerPlay = function () {
  const items = ["rock", "paper", "scissor"];
  const randomItem = items[Math.floor(Math.random() * 3)];
  return randomItem;
};

// Computer and player's initial score
let computerScore = 0;
let playerScore = 0;

// Computer and player's score on the page
// Player's choice selection
rock.addEventListener("click", function () {
  const computerSelection = computerPlay();
  const btnClass = btnID.className.split(" ");
  const rock = btnClass[0];
  return playRound(rock, computerSelection);
});

paper.addEventListener("click", function () {
  const computerSelection = computerPlay();
  const btnClass = btnID2.className.split(" ");
  const paper = btnClass[0];
  return playRound(paper, computerSelection);
});

scissor.addEventListener("click", function () {
  const computerSelection = computerPlay();
  const btnClass = btnID3.className.split(" ");
  const scissor = btnClass[0];
  return playRound(scissor, computerSelection);
});

const playRound = function (playerSelection, computerSelection) {
  if (playerScore < 5 && computerScore < 5) {
    // Rock vs Paper
    if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      pc.textContent = computerScore;
      statement.textContent = "You lose! Paper beats rock.";
      console.log(
        `your score: ${playerScore}   |  computer's score: ${computerScore}`
      );

      // Rock vs Scissor
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
      playerScore++;
      player.textContent = playerScore;
      statement.textContent = "You win! Rock beats scissor.";
      console.log(
        `your score: ${playerScore}   |  computer's score: ${computerScore}`
      );

      // Paper vs Rock
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      player.textContent = playerScore;
      statement.textContent = "You win! Paper beats rock.";
      console.log(
        `your score: ${playerScore}   |  computer's score: ${computerScore}`
      );

      // Paper vs Scissor
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
      computerScore++;
      pc.textContent = computerScore;
      statement.textContent = "You lose! Scissor beats paper.";
      console.log(
        `your score: ${playerScore}   |  computer's score: ${computerScore}`
      );

      // Scissor vs Rock
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
      computerScore++;
      pc.textContent = computerScore;
      statement.textContent = "You lose! Rock beats scissor .";
      console.log(
        `your score: ${playerScore}   |  computer's score: ${computerScore}`
      );

      // Scissor vs Paper
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
      playerScore++;
      player.textContent = playerScore;
      statement.textContent = "You win! Scissor beats paper.";
      console.log(
        `your score: ${playerScore}   |  computer's score: ${computerScore}`
      );

      // Tie
    } else if (playerSelection === computerSelection) {
      statement.textContent = `It's a tie.`;

      // Wrong input
    } else {
      console.log(`Wrong input. Choose either "rock", "paper", or "scissor".`);
    }
  } else if (playerScore === 5) {
    statement.textContent = "Congratulations! You've won!";
    // rock.classList.remove("hover");
    // paper.classList.remove("hover");
    // scissor.classList.remove("hover");
    playerScore = 0;
    computerScore = 0;
    player.textContent = playerScore;
    pc.textContent = computerScore;
  } else if (computerScore === 5) {
    statement.textContent = "Oh no! You've lost the match! :(";
    // rock.classList.remove("hover");
    // paper.classList.remove("hover");
    // scissor.classList.remove("hover");
    playerScore = 0;
    computerScore = 0;
    player.textContent = playerScore;
    pc.textContent = computerScore;
  }
};
