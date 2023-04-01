var getPlayerChoice = ""
var playerScore = 0;
var computerScore = 0;
const optionRock = document.querySelector('#rock');
optionRock.addEventListener('click', function (e){
    score = playRound();
  getPlayerChoice = "rock"
  if(score == 3){
    playerScore++;
    roundTracker.textContent = "You won that round. Your score is " + `${playerScore}` + " and the computer's score is " + `${computerScore}`;
  }else if(score == 2){
    computerScore++;
    roundTracker.textContent = "You lost that round. Your score is " + `${playerScore}` + " and the computer's score is " + `${computerScore}`;
  }else if(score == 1){
    roundTracker.textContent = "you tied that round. Your score is " + `${playerScore}` + " and the computer's score is " + `${computerScore}`;
  }
  game();
});

const optionPaper = document.querySelector('#paper');
optionPaper.addEventListener('click', function (e){
  score = playRound();
  getPlayerChoice = "paper"
  if(score == 3){
    playerScore++;
    roundTracker.textContent = "You won that round. Your score is " + `${playerScore}` + " and the computer's score is " + `${computerScore}`;
  }else if(score == 2){
    computerScore++;
    roundTracker.textContent = "You lost that round. Your score is " + `${playerScore}` + " and the computer's score is " + `${computerScore}`;
  }else if(score == 1){
    roundTracker.textContent = "you tied that round. Your score is " + `${playerScore}` + " and the computer's score is " + `${computerScore}`;
  }
  game();
});

const optionScissors = document.querySelector('#scissors');
optionScissors.addEventListener('click', function (e){
  score = playRound();
  getPlayerChoice = "scissors"
  if(score == 3){
    playerScore++;
    roundTracker.textContent = "You won that round. Your score is " + `${playerScore}` + " and the computer's score is " + `${computerScore}`;
  }else if(score == 2){
    computerScore++;
    roundTracker.textContent = "You lost that round. Your score is " + `${playerScore}` + " and the computer's score is " + `${computerScore}`;
  }else if(score == 1){
    roundTracker.textContent = "you tied that round. Your score is " + `${playerScore}` + " and the computer's score is " + `${computerScore}`;
  }
  game();
});

const container = document.querySelector('#container');
const gameVisualizer = document.createElement('div');
const roundTracker = document.createElement('p');
roundTracker.textContent = "";

gameVisualizer.appendChild(roundTracker);

container.appendChild(gameVisualizer);

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice ==0){
        return "rock";
    } else if(choice ==1){
        return "paper";
    }else if(choice ==2){
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = getPlayerChoice;
    computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("win"); 
        return 3;
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("win"); 
        return 3;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("win"); 
        return 3;
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("lose"); 
        return 2;
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log("lose");
        return 2;
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log("lose"); 
        return 2;
    }else if (playerSelection == "rock" && computerSelection == "rock"){
        console.log("tie");
        return 1;
    }else if (playerSelection == "paper" && computerSelection == "paper"){
        console.log("tie");
        return 1;
    }else if(playerSelection == "scissors" && computerSelection == "scissors"){
        console.log("tie");
        return 1;
    }else{
        console.log("invalid choice");
    }
}
function game(){
    if(playerScore == 5){
        roundTracker.textContent = "You won! click on a choice to play another game."
        playerScore = 0;
        computerScore = 0;
    }else if(computerScore == 5){
        roundTracker.textContent = "You lost. click on a choice to play another game."
        playerScore = 0;
        computerScore = 0;
    }
};