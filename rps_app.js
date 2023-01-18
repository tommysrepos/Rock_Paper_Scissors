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