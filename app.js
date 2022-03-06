


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
  console.log(answer);
  for (let i = 0; i < answer.length; i++) {
    if (list.includes(answer.charAt(i))) {
      console.log(answer.charAt(i));
      correctLetter++;
    } else {
      console.log("_ ");
    }
  }

  return answer.length == correctLetter;
}


// ----------------
// get user input guess character
//-----------------
function getGuess(answer, list) {
  // var guessChar = prompt("enter your character: ");

  list.push(guessChar.charAt(0));

  return answer.includes(guessChar);
}

// ----------------
// create hangman display
//-----------------

function displayDraw(life) {
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
      break;
    case 6:
      console.log("-------------");
      console.log("|          |");
      console.log("|          ");
      console.log("|         ");
      console.log("|         ");
      console.log("|");
      break;
    default:
        break;
  }
}

let life = 6;
var guessList = [];
const word = getWord();
while(true){

    displayDraw(life);

    printWordState(word,guessList);


    if(!getGuess(word,guessList)){
        life--;
    }

    if(printWordState(word,guessList)){
        
       
        console.log("you win");
        break;
       
    }else{
        displayDraw(life);
        console.log('sorry try again');
        
    }
}

var input = document.querySelector(".input");
const submitBtn = document.querySelector(".submit");