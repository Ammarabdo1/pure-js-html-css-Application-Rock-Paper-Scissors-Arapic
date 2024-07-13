/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

const yourScore = document.querySelector("#score");

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice(Chose) {
  const randomIndex = Math.floor(Math.random() * Chose.length);
  return Chose[randomIndex];
}
const Chose = ["حجر", "ورقه", "مقص"];

// const userChoice = document.querySelectorAll('.rpsButton')
// console.log(userChoice)
// function getUserChoice() {
//   let Choice = 'ammar'
//   userChoice.forEach( Chose => {
//     Chose.onclick = () => {
//       Choice = Chose.value
//       // console.log(Choice)
//     }
//     console.log(Choice)
//     return Choice
//   } )
// }

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  if (
    (playerChoice == "حجر" && computerChoice == "ورقه") ||
    (playerChoice == "ورقه" && computerChoice == "مقص") ||
    (playerChoice == "مقص" && computerChoice == "حجر")
  ) {
    return -1;
  } else if (
    (playerChoice == "حجر" && computerChoice == "مقص") ||
    (playerChoice == "ورقه" && computerChoice == "حجر") ||
    (playerChoice == "مقص" && computerChoice == "ورقه")
  ) {
    return 1;
  } else if (
    (playerChoice == "حجر" && computerChoice == "حجر") ||
    (playerChoice == "ورقه" && computerChoice == "ورقه") ||
    (playerChoice == "مقص" && computerChoice == "مقص")
  ) {
    return 0;
  } else {
    return;
  }

  // All situations where human draws, set `score` to 0

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here

  // Otherwise human loses (aka set score to -1)

  // return score
}
const result = document.getElementById("result");
const player_score = document.getElementById("player_score");
const your_score = document.getElementById("your_score");
// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(UserChoice, ComputerChoice) {
  let score = getResult(UserChoice, ComputerChoice);
  player_score.innerText = Number(player_score.innerText) + score;
  yourScore.innerText = "score💯 : ";
  if (score === 1) {
    result.innerText = "You Win!";
  } else if (score === -1) {
    result.innerText = "You Lose!";
  } else if (score === 0) {
    result.innerText = "It's a Draw!";
  }
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}
// const userChoice = document.querySelectorAll('.rpsButton')
const hands = document.getElementById("hands");
// ** Calculate who won and show it on the screen **
function onClickRPS(value) {
  const ComputerChoice = getComputerChoice(Chose);
  const UserChoice = value;
  hands.innerText = `🧑 ${UserChoice} vs 🤖 ${ComputerChoice} `;
  showResult(UserChoice, ComputerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  // Add a click listener to the end game button that runs the endGame() function on click
}

// ** endGame function clears all the text on the DOM **
const endGameButton = document.getElementById("endGameButton");
function endGame() {
  endGameButton.onclick = () => {
    result.innerText = "";
    hands.innerText = "";
    player_score.innerText = "";
    yourScore.innerText = "";
  };
}
endGame();
playGame();
