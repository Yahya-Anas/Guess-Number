window.addEventListener("load", function () {
  const message = document.querySelector("#message");
  const inputNumber = document.querySelector("#input-number");
  const checkBtn = document.querySelector("#check-btn");
  const gameResult = document.querySelector("#game-result");
  const scoreNumber = document.querySelector("#score-number");
  const startGame = document.querySelector("#start-game");

  let random = getRandomNumber();
  //gameResult.textContent = random;
  let score = 20;

  checkBtn.addEventListener("click", function () {
    const guess = inputNumber.value;
    if (guess == random) {
      message.textContent = "Correct Number!";
      gameResult.textContent = random;
    } else if (guess > random) {
      message.textContent = "To High!";
      score--;
      scoreNumber.textContent = score;
    } else if (guess < random) {
      message.textContent = "To Low!";
      score--;
      scoreNumber.textContent = score;
    }
  });
  startGame.addEventListener("click", function () {
    random = getRandomNumber();
    message.textContent = "Start Guessing...!";
    inputNumber.value = "";
    scoreNumber.textContent = "20";
    gameResult.textContent = "?";
  });

  function getRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }
});
