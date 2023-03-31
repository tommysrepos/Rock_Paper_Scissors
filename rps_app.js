const optionRock = document.querySelector('#rock');
optionRock.addEventListener('click', function (e){
  playRound();
});

const optionPaper = document.querySelector('#paper');
optionPaper.addEventListener('click', function (e){
  playRound();
  
});

const optionScissors = document.querySelector('#scissors');
optionScissors.addEventListener('click', function (e){
  playRound();
  
});

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

function getPlayerChoice(){
    if(document.querySelector('#rock').clicked == true){
      return "rock";
    }else if(document.querySelector('#paper').clicked == true){
      return "paper";
    }else{
      return "scissors";
    }
  }

function playRound(playerSelection, computerSelection){
    playerSelection = getPlayerChoice();
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
/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    let tieCounter = 0;
     do{
        var score = playRound();
        if (score === 3){
            playerScore++;
        } else if(score === 2){
            computerScore++;
        }else if(score === 1){
            tieCounter++;
        }
        console.log("playerScore " + playerScore);
        console.log("computerScore " + computerScore);
        console.log("tieCounter " + tieCounter);
    }
    while (playerScore<5 && computerScore<5);
    if (playerScore === 5){
        alert("You won!");
    }else if(computerScore === 5){
        alert("You lost.");
    }
    if (confirm("Would you like to play again?") == 1){
        game();
    }else{
        console.log("Thanks for playing!");
    }
}
console.log(game()); */