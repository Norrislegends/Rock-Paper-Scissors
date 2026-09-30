const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")
const myMove = document.getElementById("myMove")
const opponentMove = document.getElementById("opponentMove")
let result = document.getElementById("result")
let message = document.getElementById("message")
let myScoreElement = document.getElementById("my-score")
let opScoreElement = document.getElementById("op-score")
let myScore = 0;
let opScore = 0;


rockButton.addEventListener("click", () => {
    playRound("rock");
});

paperButton.addEventListener("click", () => {
    playRound("paper");
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors");
});

function getComputerChoice(){
  let computerChoice = Math.random()

  if(computerChoice < 0.3 ){
    computerChoice = "rock"
  }else if(
    computerChoice >0.3 && computerChoice < 0.6
  ){
    computerChoice = "paper"
   }else{
    computerChoice = "scissors"
   }
   while(computerChoice !== null){
    return computerChoice
   }
  
}

function playRound(humanChoice){

  const computerChoice = getComputerChoice();
  message.innerText = "Fight"
  if(computerChoice==="rock"){
    opponentMove.src="icons/hand.png";
  }else if(computerChoice=== "paper"){
    opponentMove.src="icons/hand-paper.png";
  }else{
    opponentMove.src="icons/scissors.png";
  }

  if(humanChoice==="rock"){
    myMove.src="icons/hand.png";
  }else if(humanChoice=== "paper"){
    myMove.src="icons/hand-paper.png";
  }else {
    myMove.src="icons/scissors.png";
  }
  


  if(humanChoice === "rock" && computerChoice === "paper"){
    opScore++;
    opScoreElement.innerText = opScore;
    result.innerText = "You Lost!"
  }
  else if(humanChoice === "rock" && computerChoice === "scissors"){
    myScore++;
    myScoreElement.innerText = myScore; 
    result.innerText = "You Won!"
  }
  else if(humanChoice === computerChoice){
    result.innerText = "Tie!"
  }
  else if(humanChoice === "paper" && computerChoice === "rock"){
    myScore++;
    myScoreElement.innerText = myScore;
    result.innerText = "You Won!"
  }
  else if(humanChoice === "paper" && computerChoice === "scissors"){
    opScore++;
    opScoreElement.innerText = opScore;
    result.innerText = "You Lost!"
  }
  else if(humanChoice === "scissors" && computerChoice === "rock"){
    opScore++;
    opScoreElement.innerText = opScore;
    result.innerText = "You Lost!"
  }
  else if(humanChoice === "scissors" && computerChoice === "paper"){
    myScore++;
    myScoreElement.innerText = myScore;
    result.innerText = "You Won!"
  } 
  if(myScore===3){
    message.innerText="Victory!"
    myScore=0;
    myScoreElement.innerText = myScore;
    opScore=0;
    opScoreElement.innerText = opScore;
  }else if(opScore===3){
    message.innerText="Defeat!"
    myScore=0;
    myScoreElement.innerText = myScore;
    opScore=0;
    opScoreElement.innerText = opScore;
  }

}

