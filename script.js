let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);
// console.log(generateTarget());

const absoluteDifference = (a, b) => b - a > 0 ? b - a : a - b;
const compareGuesses = (humanGuess, computerGuess, secretTarget) => humanGuess < 0 || humanGuess > 9 ? alert('Your number is out of range!') : 
absoluteDifference(computerGuess, secretTarget) >= absoluteDifference(humanGuess, secretTarget) ? true : false;
// console.log(compareGuesses(7, 6, 5));
function updateScore(player) {
    switch (player) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
    }
}
const advanceRound = () => currentRoundNumber += 1;