//15. Number Guessing Game
// - The program randomly selects a number between 1 and 100.
// - The user must guess the number.
// - The program gives hints like "Too High" or "Too Low".
// - The loop continues until the user guesses correctly.

function GuessingGame() {
    const randomNumber = Math.floor((Math.random() * 100) + 1)
    let number = 0
    while (number !== randomNumber) {
        number = Number(prompt('Guess a number between 1-100'))

        if (isNaN(number)) console.log('Please enter a number!');

        else if (number > randomNumber) console.log('to high. Guess Lower!');
        else if (number < randomNumber) console.log('to Low. Guess Higher!');
    }
    console.log(`Congrates 🎁. You Guessed Right : ${randomNumber}`);
}
// GuessingGame()

