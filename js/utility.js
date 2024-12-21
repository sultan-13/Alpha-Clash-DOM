function hideElement(sectionId) {
  const element = document.getElementById(sectionId);
  element.classList.add("hidden");
}
function showElement(sectionId) {
  const element = document.getElementById(sectionId);
  element.classList.remove("hidden");
}

function getalphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const arrayOfAlphabets = alphabetString.split("");
  const index = Math.round(Math.random() * 25);
  const alphabet = arrayOfAlphabets[index];
  return alphabet;
}

function reGenerateAlphabet(setText, alphabet) {
  const currentAlphabet = document.getElementById(setText);
  currentAlphabet.innerText = alphabet;
}

function addHighlightColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeHighlightColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getTextValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const score = parseInt(elementText);
  return score;
}

function setTextElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
