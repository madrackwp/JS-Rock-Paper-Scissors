const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Function to start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      console.log("Game start");
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        console.log(`Player chose ${this.textContent}`);
        //Computer's choice
        const computerNumber = Math.floor(Math.random() * 3);
        console.log(computerNumber);
        //0-rock, 1-paper, 2-scissors
        const computerChoice = computerOptions[computerNumber];
        console.log(`The computer chose ${computerChoice}`);

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 1000);
        //Call compareHands

        playerHand.style.animation = "shakePlayer 1s ease";
        computerHand.style.animation = "shakeComputer 1s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update text
    const winner = document.querySelector(".winner");
    //Check for draw
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie!";
      console.log("tie");
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins!";
        console.log("player win");
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        console.log("com win");
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player wins!";
        console.log("player win");
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        console.log("com win");
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins!";
        console.log("player win");
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        console.log("com win");
        cScore++;
        updateScore();
        return;
      }
    }
  };

  //Call inner functions here
  startGame();
  playMatch();
};

//Call the function to start the game
game();
