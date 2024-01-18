const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay  = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

//Display user choice
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay .innerHTML = userChoice
    generateComputerChoice()
    getResults()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 
    //console.log(randomNumber)

    switch(randomNumber) {
        case 1:
            computerChoice = 'rock'
          break;
        case 2:
            computerChoice = 'scissors'
          break;
        case 3:
            computerChoice = 'paper'
            break;
       
      }
      computerChoiceDisplay.innerHTML = computerChoice

}

function getResults(){
    if(computerChoice === userChoice){
        result  = 'its a draw'
    }
    else if (computerChoice ==='rock' &&  userChoice === 'paper'){
        result  = 'you win'
    }
    else if (computerChoice ==='rock' &&  userChoice === 'scissors'){
        result  = 'you lost'
    }
    else if (computerChoice ==='paper' &&  userChoice === 'scissors'){
        result  = 'you win'
    }
    else if (computerChoice ==='paper' &&  userChoice === 'rock'){
        result  = 'you lose'
    }
    else if (computerChoice ==='scissors' &&  userChoice === 'rock'){
        result  = 'you win'
    }
    else if (computerChoice ==='scissors' &&  userChoice === 'paper'){
        result  = 'you lose'
    }
    resultDisplay.innerHTML = result
}