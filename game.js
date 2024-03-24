let randomNo = parseInt(Math.random() * 100 + 1);
const guessNo = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const PreviousGuess = document.querySelector(".guesses");
const RemainingGuess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let playGame = true;
let prevGuess = [];
let numGuess = 1;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(guessNo.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid no");
  } else if (guess < 1) {
    alert("Please enter a no more than 1");
  } else if (guess > 100) {
    alert("Please enter a no less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random Number was ${randomNo}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}
function displayGuess(guess) {
  guessNo.value = "";
  PreviousGuess.innerHTML += `${guess}    `;
  numGuess++;
  RemainingGuess.innerHTML = `${11 - numGuess}`;
}
function checkGuess(guess) {
  if (guess === randomNo) {
    displayMessage("You guess it right");
    endGame();
  } else if (guess < randomNo) {
    displayMessage(`No is too low `);
  } else if (guess > randomNo) {
    displayMessage(`No is too high `);
  }
}
function endGame() {
  guessNo.value = "";
  guessNo.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id= "newGame"> Start New game</h2> `;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGame = document.querySelector("#newGame");
  newGame.addEventListener("click", function (e) {
    randomNo = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    PreviousGuess.innerHTML = "";

    RemainingGuess.innerHTML = `${11 - numGuess}`;
    randomNo.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
