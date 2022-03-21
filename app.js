const showLife = document.querySelector(".life");
var alertMessage = document.querySelector(".alert");
const newGame = document.querySelector(".new-game-btn");
var keyboards = document.querySelector('.keyboard');
var blank = document.querySelector(".blank");
var currentWord = null;
let life = 6;
var guessList = [];
var word = "";

// ----------------
// get random word
//-----------------
function getWord() {
  var words = [
    "spider",
    "basketball",
    "football",
    "reward",
    "chicken",
    "comet",
    "galaxy",
    "television",
    "herb",
    "peppermint",
    "lavender",
    "waterfall",
    "skydiving",
    "cucumber",
  ];

  let randomIndex = Math.floor(Math.random() * words.length);
  var randomWord = words[randomIndex];
  word = randomWord;
}

// ----------------
// create keyboard
//-----------------

function getLetterBtn() {
  let letterBtnHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
      `
       <button class="letter-btn" id="` +letter +`" onClick="chosenLetter('`+letter+`')">` +letter +`</button>
      `
    )
    .join("");

  keyboards.innerHTML = letterBtnHTML;
}

// ----------------
// print character and blank lines
//-----------------

function printWordState() {
  
  console.log(word);
  currentWord = word
    .split("")
    .map((letter) => (guessList.indexOf(letter) >= 0 ? letter : "_"))
    .join("");
  blank.innerHTML = currentWord;
  
}

// ----------------
// get guess
//-----------------
function chosenLetter(guess) {
  guessList.indexOf(guess) === -1 ? guessList.push(guess) : null;
  document.getElementById(guess).setAttribute("disabled", true);
  document.getElementById(guess).setAttribute("style", "color:lightgrey;");

  if (word.indexOf(guess) >= 0) {
    printWordState();
    ifGameWon();
  } else if (word.indexOf(guess) === -1) {
    life--;
    updateLife();
    ifGameLost();
    displayDraw(life);
  }
}

// ----------------
// check if won
//-----------------
function ifGameWon() {
  if ((currentWord === word)) {

    // alertMessage.textContent = `You Won !!! the answer is : ${word}`
    displayAlert('you won','completed');
  }
}

// ----------------
// check if lost
//-----------------
function ifGameLost(){
  if(life === 0){
    blank.textContent = `Answer is: ${word}`
    displayAlert('you lose','incorrect');
  }
}

// ----------------
// update life
//-----------------
function updateLife(){
  showLife.textContent = `Life: ${life}`;
}
// ----------------
// create hangman display
//-----------------
var leftLeg = document.querySelector(".left-leg");
var rightLeg = document.querySelector(".right-leg");
var rightArm = document.querySelector('.right-arm');
var leftArm = document.querySelector(".left-arm")
var centerBody = document.querySelector('.center-body')
var head = document.querySelector(".head");
function displayDraw(life) {
  
  switch (life) {
    case 0:
      leftLeg.style.visibility = 'visible';
      break;
    case 1:
      rightLeg.style.visibility='visible';
      break;
    case 2:
      leftArm.style.visibility = "visible";
      break;
    case 3:
      rightArm.style.visibility = 'visible';
      break;
    case 4:
      centerBody.style.visibility= 'visible'
      break;
    case 5:
      head.style.visibility = "visible";
      break;
    default:
      break;
  }
}

// ----------------
// display alert
//-----------------
function displayAlert(text, action) {
  alertMessage.textContent = text;
  alertMessage.classList.add(`alert-${action}`);
}

const inputLetter = document.querySelectorAll(".letter-btn");

function reset() {
  getWord();
  guessList = [];
  printWordState();
  getLetterBtn();  
  updateLife();
  life = 6;
  showLife.textContent = `Life: ${life}`;
  alertMessage.textContent = "";
  displayDraw(life);
  leftLeg.style.visibility = 'hidden';
  rightLeg.style.visibility = "hidden";
  leftArm.style.visibility = "hidden";
  rightArm.style.visibility = "hidden";
  centerBody.style.visibility = "hidden";
  head.style.visibility = "hidden";
}
newGame.addEventListener('click',reset);
getWord();
getLetterBtn();
printWordState();



