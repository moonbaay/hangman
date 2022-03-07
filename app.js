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
  return randomWord;
}

// ----------------
// print character and blank lines
//-----------------

function printWordState(answer, list) {
  let correctLetter = 0;
  var status = null;
  var blank = document.querySelector('.blank');
  console.log(answer);
  status = answer.split('').map(letter =>(list.indexOf(letter)>= 0 ? letter : "_")).join('');
  blank.innerHTML = status;
  return answer.length == correctLetter;
}

// ----------------
// get user input guess character
//-----------------
// function getGuess(answer, list) {
//   // var guessChar = prompt("enter your character: ");
//   const guessChar = document.querySelector(".input").value;
//   list.push(guessChar.charAt(0));

//   return answer.includes(guessChar);
// }

// ----------------
// create hangman display
//-----------------

function displayDraw(life) {
  const manContainer = document.querySelector(".man-container");
  switch (life) {
    case 0:
      console.log("-------------");
      console.log("|          |");
      console.log("|          O");
      console.log("|         /|\\");
      console.log("|         / \\");
      console.log("|");
      break;
    case 1:
      console.log("-------------");
      console.log("|          |");
      console.log("|          O");
      console.log("|         /|\\");
      console.log("|         / ");
      console.log("|");
      break;

    case 2:
      console.log("-------------");
      console.log("|          |");
      console.log("|          O");
      console.log("|         /|\\");
      console.log("|         ");
      console.log("|");
      break;

    case 3:
      console.log("-------------");
      console.log("|          |");
      console.log("|          O");
      console.log("|         /|");
      console.log("|         ");
      console.log("|");
      break;
    case 4:
      console.log("-------------");
      console.log("|          |");
      console.log("|          O");
      console.log("|         /");
      console.log("|         ");
      console.log("|");
      break;

    case 5:
      console.log("-------------");
      console.log("|          |");
      console.log("|          O");
      console.log("|         ");
      console.log("|         ");
      console.log("|");
      
      // const head = document.querySelector(".head");
      // var after = head.querySelector('::after');
      // after.style.visibility = "visible";
      break;
    // case 6:
    //   console.log("-------------");
    //   console.log("|          |");
    //   console.log("|          ");
    //   console.log("|         ");
    //   console.log("|         ");
    //   console.log("|");
      
    //   break;
    default:
      break;
  }
}

let life = 6;
var guessList = [];
const word = getWord();

const showLife = document.querySelector('.life');
const submitBtn = document.querySelector(".submit");
const alertMessage = document.querySelector(".alert");
const showAnswer = document.querySelector(".answer");

function getLetterBtn(){
  let letterBtnHTML = "abcdefghiljklmnopqrstuvwxyz".split('').map((letter)=>
  `
    <button class="letter-btn" id="`+letter+`">`+letter+`</button>
  `).join("");

  document.querySelector('.keyboard').innerHTML = letterBtnHTML;

  
}


getLetterBtn();

const inputLetter = document.querySelectorAll(".letter-btn");

function getGuess(answer, list) {
  // var guessChar = prompt("enter your character: ");
  const guessChar = inputLetter.forEach((item) => {
    item.addEventListener("click", function () {
      console.log(item.outerText);
      list.push(item.outerText.charAt(0));
    });
  });
  

  return answer.includes(guessChar);
}

submitBtn.addEventListener("click", function () {
  displayDraw(life);

  printWordState(word, guessList);

  if (!getGuess(word, guessList)) {
    life--;
    showLife.textContent = life;
  }

  if (printWordState(word, guessList)) {
    alertMessage.textContent = `Congratulation you win`;
    showAnswer.textContent = word;
    // console.log("you win");
    // break;
    if (!printWordState(word, guessList)) {
      displayDraw(life);

      alertMessage.textContent = "sorry try again";
    }
  }

  if (life < 0) {
    alertMessage.textContent = "you use up all your life sorry :(";
  }
});

 