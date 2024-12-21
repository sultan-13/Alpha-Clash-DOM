function keyBoardPress(event) {
  const pressAlphabet = event.key;
  if (pressAlphabet === "Escape") {
    gameover();
    setTextElementById("life-score", 6);
  }
  const currentAlphabet = document.getElementById("prev-alphabet").innerText;
  const currentExpectedAlphabet = currentAlphabet.toLowerCase();
  if (pressAlphabet === currentExpectedAlphabet) {
    removeHighlightColor(currentExpectedAlphabet);
    continueGame();
    const currentScore = getTextValueById("current-score");
    const newCurrentScore = currentScore + 1;
    setTextElementById("current-score", newCurrentScore);
  } else {
    const lifeScore = getTextValueById("life-score");
    const newLifeScore = lifeScore - 1;
    setTextElementById("life-score", newLifeScore);
    if (newLifeScore === 0) {
      gameover();
    }
  }
}
document.addEventListener("keyup", keyBoardPress);

function continueGame() {
  const alphabet = getalphabet();
  reGenerateAlphabet("prev-alphabet", alphabet);
  addHighlightColor(alphabet);
}

function play() {
  hideElement("home-screen");
  showElement("play-ground");
  continueGame();
}

function gameover() {
  setTextElementById("final-score", getTextValueById("current-score"));
  const prevAlphabet = document
    .getElementById("prev-alphabet")
    .innerText.toLowerCase();
  removeHighlightColor(prevAlphabet);
  setTextElementById("life-score", 5);
  setTextElementById("current-score", 0);
  hideElement("play-ground");
  showElement("score");
}

function playAgain() {
  setTextElementById("final-score", 0);
  hideElement("score");
  showElement("play-ground");
  continueGame();
}
