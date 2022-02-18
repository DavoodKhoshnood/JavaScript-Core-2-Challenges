let randomNumber = getRandNo()
let triesNo = 7
let isWinner = false

const printMsg = {
  0: 'Please enter a number between 1 and 100',
  1: 'Number is too high, try again!',
  2: 'Number is too low, try again!',
  3: 'Guess is correct. You win!',
  4: 'Guess a number between 1 and 100',
  5: 'Number of Tries: ',
  6: 'You Lose, the number was ',
}

const final = document.querySelector('.final-output')
const tries = document.querySelector('.Tries-output')
const inputs = document.querySelector('.inputs-Values')

function guessNumber() {
  let result = randomNumber
  //Collect input from the user
  let guess = Number(inputs.value)

  if (triesNo === randomNumber) result = printMsg[3]
  else if (triesNo == 0) result = ''
  else {
    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    if (guess > randomNumber) result = printMsg[1]

    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    if (guess < randomNumber) result = printMsg[2]

    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    if (guess == randomNumber) {
      result = printMsg[3]
      tries.innerText = `It took you ${triesNo} tries`
      isWinner = true
    }
    //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
    if (guess > 100 || guess <= 0) result = printMsg[0]

    final.innerText = result
    if (!isWinner) countTries()
  }
}
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = getRandNo()

  //Reset users input field
  inputs.value = ''

  //Reset tries, and triesTaken by the user
  triesNo = 7
  final.innerText = printMsg[4]
  tries.innerText = printMsg[5] + triesNo
}

function countTries() {
  triesNo--
  if (triesNo <= 0) {
    tries.innerText = printMsg[6] + randomNumber
    final.innerText = ''
  } else tries.innerText = printMsg[5] + triesNo
}

function getRandNo() {
  return Math.floor(Math.random() * 100 + 1)
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber()
  }
}

document.querySelector('.btnNewGame').addEventListener('click', newGame)
document.querySelector('.btnGuess').addEventListener('click', guessNumber)
document.addEventListener('keypress', keyBoardEvents)
