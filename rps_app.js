function getRandomInt() {
    return Math.floor(Math.random()*3);
}
function getComputerChoice(){
    let choice = getRandomInt()
    if (choice ==0){
        return "Rock";
    } else if(choice ==1){
        return "Paper";
    }else if(choice ==2){
        return "Scissors";
    }
}
console.log(getComputerChoice(getRandomInt()));
function playRound(playerSelection, computerSelection){
   if (playerSelection == "Rock" && computerSelection == "Rock"){
    return "Tie! You both chose rock.";
   }else if (playerSelection == "Rock" && computerSelection == "Paper"){
    return "You lose! Paper beats rock.";
   } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
    return "You win! Rock beats scissors.";
   }else if (playerSelection == "Paper" && computerSelection == "Rock"){
    return "You win! Paper beats rock.";
   }else if (playerSelection == "Paper" && computerSelection == "Paper"){
    return "Tie! You both chose paper.";
   }else if (playerSelection == "Paper" && computerSelection == "Scissors"){
    return "You lose. Scissors beats paper."
   }else if (playerSelection == "Scissors" && computerSelection == "Rock"){
    return "You lose. Rock beats scissors."
   }else if (playerSelection =="Scissors" && computerSelection == "Paper"){
    return "You win! Scissors beats paper."
   }else if(playerSelection == "Scissors" && computerSelection == "Scissors"){
    return "Tie! You both chose scissors."
   }else{
    return "This is not possible."
   }
   }
const playerSelection = "Paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))