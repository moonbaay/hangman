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

  var status = null;
  var blank = document.querySelector('.blank');
  console.log(answer);
  status = answer.split('').map(letter =>(list.indexOf(letter)>= 0 ? letter : "_")).join('');
  blank.innerHTML = status;
  return status.includes(answer);
}

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
var word = getWord();

const showLife = document.querySelector('.life');
const alertMessage = document.querySelector(".alert");
const newGame  = document.querySelector('.new-game-btn');

// ----------------
// create keyboard
//-----------------

function getLetterBtn(){
  let letterBtnHTML = "abcdefghijklmnopqrstuvwxyz".split('').map((letter)=>
  `
    <button class="letter-btn" id="`+letter+`">`+letter+`</button>
  `).join("");

  document.querySelector('.keyboard').innerHTML = letterBtnHTML;

  
}
getLetterBtn();

const inputLetter = document.querySelectorAll(".letter-btn");

// ----------------
// get user input guess character
//-----------------
function getGuess(answer, list) {

  inputLetter.forEach((item) => {

    item.addEventListener("click", function () {

      console.log(item.outerText);
      list.push(item.outerText.charAt(0));
      printWordState(answer,list);
      
      if(printWordState(answer,list)){
        displayAlert(`Congratulation you complete the word: ${word}`,`completed`)
      }
       if(!answer.includes(item.outerText)){
        displayAlert(`oops try again`, `incorrect`);
        setTimeout(() => {
            alertMessage.textContent = ""
            alertMessage.classList.remove(`alert-incorrect`);
        }, 3000);  
       
            life--;
          displayDraw(life);
        }
      showLife.textContent = `Life: ${life}`;
     
    });

    
  });

}

// ----------------
// display alert
//-----------------
function displayAlert(text,action){

    alertMessage.textContent = text;
    alertMessage.classList.add(`alert-${action}`);
    //remove alert
    // setTimeout(() => {

    //   alertMessage.textContent = ""
    //   alertMessage.classList.remove(`alert-${action}`);
      
    // }, 3000);
}


newGame.addEventListener('click',function(){
  word =getWord();
  getGuess(word,guessList)
  printWordState(word,guessList);
  life = 6;
})



 