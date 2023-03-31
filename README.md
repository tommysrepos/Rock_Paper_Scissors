# Rock_Paper_Scissors
Rock paper scissors game made through The Odin Project

Jan 17/23: Linked external javascript page called rps_app.js to rps_game.html. Created function that chooses rock, paper or scissors at random. Will be used for the computer's choice in the game.

Jan 17/23: Created function playRound() that plays a single round of rock, paper scissors with the paramaters playerSelection and computerSelection

Jan 21/23: Merged getRandomInt and getComputerChoice into one function. Added function getPlayerChoice which prompts for user to type in their choice.

 playRound function updated so that getPlayerChoice is stored in playerSelection and getComputerChoice is stored in computerSelection within the playRound function. if..else statement now returns console.log win lose or tie and returns value 3, 2, or 1.
Added game function which repeats a loop of playRound while playerScore<5 && computerScore<5.

Known bugs are that tie counts as a loss. Will add a notice saying the player won or lost and confirm() which prompts the player to play again.

Jan 22/23: Added two methods to the app. alert box that states you won if playerScore = 5 and you lost if computerScore = 5. Added confirm method which asks would you like to play again. if true runs game function, if false returns console.log "thanks for playing".

Feb 3/23: Small fix. Added if else statement to getPlayerChoice function that will force the function to repeat if given null value.

Mar 19/23: Bug fix and optimization. Fixed getPlayerChoice function so that if..else statement repeats window.prompt instead of repeating the function. 

Fixed bug where ties were contributing to losses in the game function. Added score variable within the game function which will hold the results of playRound function instead of calling playRound multiple times in the do...while loop. Added console.log to track playerScore, computerScore, and tieCounter.

 Removed unnecessary variable playAgain.

 Marc 31/23: Created branch to work on the rock, paper, scissors game's UI. Added three buttons with id's of "rock" "paper" "scissors". Added event listeners to those buttons which listen for a click and run playRound() when clicked.

 Changed getPlayerChoice() function to an if..else statement that return "rock" "paper" or "scissors if their corresponding buttons clicked == true.

 Brought README changelog up to date. was previously updating with too much detail in the commit messages.