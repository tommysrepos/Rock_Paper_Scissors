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
    let sign = window.prompt("What is your choice?");
    return sign.toLowerCase();
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
function game(){
    playerScore = 0;
    computerScore = 0;
    tieCounter = 0;
    invalidCounter = 0;
    do{
        if (playRound() === 3){
            playerScore++;
        } else if(2){
            computerScore++;
        }else if(1){
            tieCounter++;
        }else {
            invalidCounter++;
        }
    }
    while (playerScore<5 && computerScore<5);
    if (playerScore == 5){
        alert("You won!");
    }else if(computerScore == 5){
        alert("You lost.");
    }
    let playAgain;
    if (confirm("Would you like to play again?") == 1){
        game();
    }else{
        console.log("Thanks for playing!");
    }
}
console.log(game())
console.log(game())
