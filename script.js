let win = 0;
let lose = 0;
let draw = 0;
let playerSelection = "";

const result_div = document.querySelector(".result > p");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");


//1 = rock, 2 = paper, 3 = scissors
function computerPlay() {
  randnum = Math.floor(Math.random() * 3 + 1);
  if (randnum == 1) return "rock";
  else if (randnum == 2) return "paper";
  else return "scissors";
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  if (playerSelection == computerSelection) {
    draw++;
    result_div.innerHTML = "It's a draw! Both users chose " + playerSelection + "!";
    return "It's a tie! Both players selected " + playerSelection;
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    lose++;
    computerScore_span.innerHTML = lose;
    result_div.innerHTML = "You Lose! The computer chose " + computerSelection + " and you chose " + playerSelection;
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  } else {
    win++;
    userScore_span.innerHTML = win;
    result_div.innerHTML = "You Win! You chose " + playerSelection + " and the computer chose " + computerSelection;
    return "You Win! " + playerSelection + " beats " + computerSelection;
  }
}


rockButton.addEventListener('click', function(){
    console.log(playRound('rock'));
});
paperButton.addEventListener('click', function(){
    console.log(playRound('paper'));
});
scissorsButton.addEventListener('click', function(){
    console.log(playRound('scissors'));
});


