
//10- Rock, Paper, Scissors Game
function rockPaperScissors(userChoice) {
    let states = ['rock', 'paper', 'scissors']
    if (!states.includes(userChoice)) return 'Invalid Input'

    let winner = ''
    const randomNumber = Math.floor(Math.random() * 3) + 1
    let computerChoice = states[randomNumber - 1]

    switch (computerChoice) {
        case 'rock': {
            if (userChoice === 'paper') winner = 'User'
            if (userChoice === 'scissors') winner = 'Computer'
            else return 'Equal'
        }
            break
        case 'paper':
            {
                if (userChoice === 'scissors') winner = 'User'
                else if (userChoice === 'rock') winner = 'Computer'
                else return 'Equal'
            }
            break
        case 'scissors':
            {
                if (userChoice === 'rock') winner = 'User'
                else if (userChoice === 'paper') winner = 'Computer'
                else return 'Equal'
            }
            break
    }
    return winner
}

console.log(rockPaperScissors('rock'));
console.log(rockPaperScissors('paper'));
console.log(rockPaperScissors('rock'));
