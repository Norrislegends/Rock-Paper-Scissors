const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")
const myMove = document.getElementById("myMove")
const opponentMove = document.getElementById("opponentMove")
const result = document.getElementById("result")
const message = document.getElementById("message")

function getHumanChoice(){

  let humanChoice;
  if(
    rockButton.addEventListener("click", ()=>{
    })
  ){
    humanChoice = "rock";
  }else if(
    paperButton.addEventListener("click", ()=>{
    })
  ){
    humanChoice = "paper";
  }else{
    humanChoice = "scissors";
  }
  while(humanChoice !== null){
    return humanChoice
  }
}

function getComputerChoice(){

}

function playRound(humanChoice, computerChoice){


}

console.log(Math.random)