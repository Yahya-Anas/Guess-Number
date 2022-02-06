window.addEventListener("load", function () {
  const message = document.querySelector("#message");
  const inputNumber = document.querySelector("#input-number");
  const checkBtn = document.querySelector("#check-btn");
  const gameResult = document.querySelector("#game-result");
  const scoreNumber = document.querySelector("#score-number");
  const startGame = document.querySelector("#start-game");
  const highScore = document.querySelector("#high-score-number");
  const btnEasy = document.querySelector("#btn-easy");
  const btnMedium = document.querySelector("#btn-medium");
  const btnHard = document.querySelector("#btn-hard");

  btnEasy.addEventListener("click", function () {
    modal.style.display = "none";
  });

  btnMedium.addEventListener("click", function () {
    modal.style.display = "none";
    score = 10;
    level = 10;
    scoreNumber.textContent = score;
  });

  btnHard.addEventListener("click", function () {
    modal.style.display = "none";
    score = 5;
    level = 5;
    scoreNumber.textContent = score;
  });

  let random = getRandomNumber();
  //gameResult.textContent = random;
  let score = 20;
  let level = 20;
  let highScoreNumber = 0;

  checkBtn.addEventListener("click", function () {
    const guess = inputNumber.value;
    if (!guess) {
      message.textContent = "No number !";
    } else if (guess == random) {
      message.textContent = "Correct Number!";
      gameResult.textContent = random;

      if (score > highScoreNumber) {
        highScoreNumber = score;
        highScore.textContent = highScoreNumber;
      }
    } else if (guess > random) {
      message.textContent = "To High!";
      score--;
      scoreNumber.textContent = score;
    } else if (guess < random) {
      message.textContent = "To Low!";
      score--;
      scoreNumber.textContent = score;
    }
    if (score === 0) {
      message.textContent = "You lost the Game !";
    }
  });
  startGame.addEventListener("click", function () {
    score = level;
    random = getRandomNumber();
    message.textContent = "Start Guessing...!";
    inputNumber.value = "";
    scoreNumber.textContent = score;
    gameResult.textContent = "?";
  });

  function getRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  document.addEventListener("keypress", function (event) {
    let keycode = event.keycode;
    if (keycode > 48 && keycode < 57) {
      return true;
    }
    return false;
  });
});
