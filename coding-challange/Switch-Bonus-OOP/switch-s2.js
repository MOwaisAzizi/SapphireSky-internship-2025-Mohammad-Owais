////SWITCH CASE

// 9- Use switch to print the corresponding season:
// 12, 1, 2 → Winter
// 3, 4, 5 → Spring
// 6, 7, 8 → Summer
// 9, 10, 11 → Fall
function correspondingSeason(key) {
    let season;

    switch (key) {
        case 12:
        case 1:
        case 2:
            season = 'Winter';
            break;
        case 3:
        case 4:
        case 5:
            season = 'Spring';
            break;
        case 6:
        case 7:
        case 8:
            season = 'Summer';
            break;
        case 9:
        case 10:
        case 11:
            season = 'Fall';
            break;
        default:
            season = 'Invalid month';
    }
    return season;
}
console.log(correspondingSeason(5));


//10-Rock, Paper, Scissors Game
function rockPaperScissors(rock, paper, scissors) {
    if (rock.toLocaleLowerCase() !== 'rock' || paper.toLocaleLowerCase() !== 'paper' || scissors.toLocaleLowerCase() !== 'scissors') return 'Invalid Input'

    let winner = ''
    const computerChoice = Math.floor(Math.random() * 3) + 1

    switch (computerChoice) {
        case 1: winner = rock
            break
        case 2: winner = paper
            break
        case 3: winner = scissors
            break
    }
    return winner
}
console.log(rockPaperScissors('rock', 'paper', 'scissors'));
console.log(rockPaperScissors('rock', 'paper', 'scissors'));


//11-Roman Numeral Converter
// Take an integer (1-10) as input.
// Use switch to print the corresponding Roman numeral.
function romanConverter(number) {
    const romanNumbers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

    switch (number) {
        case number: return romanNumbers[number - 1]
        case number: return romanNumbers[number - 1]
        case number: return romanNumbers[number - 1]
        case number: return romanNumbers[number - 1]
        case number: return romanNumbers[number - 1]
        case number: return romanNumbers[number - 1]
        case number: return romanNumbers[number - 1]
        case number: return romanNumbers[number - 1]
        case number: return romanNumbers[number - 1]
        case number: return romanNumbers[number - 1]
        case number: return romanNumbers[number - 1]
        case number: return romanNumbers[number - 1]
        default: return 'Invalid Month!'
    }
}
console.log(romanConverter(4));



//12-Zodiac Sign Finder
// Take a birth month and day.
// Use switch to determine the person's zodiac sign.
function getZodiacSign(day, month) {
    switch (true) {
        case (month === 3 && day >= 21) || (month === 4 && day <= 19): return 'Aries'
        case (month === 4 && day >= 20) || (month === 5 && day <= 20): return 'Taurus'
        case (month === 5 && day >= 21) || (month === 6 && day <= 20): return 'Gemini'
        case (month === 6 && day >= 21) || (month === 7 && day <= 22): return 'Cancer'
        case (month === 7 && day >= 23) || (month === 8 && day <= 22): return 'Leo'
        case (month === 8 && day >= 23) || (month === 9 && day <= 22): return 'Virgo'
        case (month === 9 && day >= 23) || (month === 10 && day <= 22): return 'Libra'
        case (month === 10 && day >= 23) || (month === 11 && day <= 21): return 'Scorpio'
        case (month === 11 && day >= 22) || (month === 12 && day <= 21): return 'Sagittarius'
        case (month === 12 && day >= 22) || (month === 1 && day <= 19): return 'Capricorn'
        case (month === 1 && day >= 20) || (month === 2 && day <= 18): return 'Aquarius'
        case (month === 2 && day >= 19) || (month === 3 && day <= 20): return 'Pisces'
        default: return 'invalid date'
    }
}
console.log(getZodiacSign(4, 3));


//13-Discount System Based on Membership
// Input membership type ("Gold", "Silver", "Bronze").
// Use switch to apply different discount rates on a purchase.
function discountSystem(type, amount) {
    let discount = 0
    switch (type) {
        case 'gold': discount = 0.20
            break
        case 'silver': discount = 0.15
            break
        case 'bronze': discount = 0.1
            break
        default: discount = 0
    }
    finalAmount = amount * (1 - discount)
    return [amount, discount * 100, finalAmount]
}
console.log(discountSystem('gold', 100));



// 14-Automated Toll Booth System
// Take a vehicle type ("Car", "Truck", "Bike") as input.
// Use switch to determine the toll fee.
function tollFeeChecker(type) {
    type = type.toLowerCase()
    let tollFee = 0
    switch (type) {
        case 'car': tollFee = 10
            break
        case 'truck': tollFee = 20
            break
        case 'Bike': tollFee = 5
            break
        default: return 'Not Valid vehicle!'
    }
    return tollFee
}
console.log(tollFeeChecker('car'));



//15-Music Playlist Controller
// Take a command ("Play", "Pause", "Next", "Previous").
// Use switch to perform the correct action.

class MusicPlaylist {
    constructor(songs) {
        this.songs = songs;
        this.currentIndex = 0;
    }

    play() {
        if (this.songs.length === 0) {
            console.log("No songs in the playlist.");
            return;
        }
        console.log(`Playing: ${this.songs[this.currentIndex]}`);
    }

    pause() {
        console.log(`Paused: ${this.songs[this.currentIndex]}`);
    }

    next() {
        if (this.songs.length === 0) {
            console.log("No songs in the playlist");
            return;
        }
        this.currentIndex = (this.currentIndex + 1);
        console.log(`Next song: ${this.songs[this.currentIndex]}`);
    }

    previous() {
        if (this.songs.length === 0) {
            console.log("No songs in the playlist");
            return;
        }
        this.currentIndex = (this.currentIndex - 1);
        console.log(`Previous song: ${this.songs[this.currentIndex]}`);
    }

    executeCommand(command) {
        switch (command.toLowerCase()) {
            case 'play':
                this.play();
                break;
            case 'pause':
                this.pause();
                break;
            case 'next':
                this.next();
                break;
            case 'previous':
                this.previous();
                break;
            default:
                console.log("Invalid command. Please use 'Play', 'Pause', 'Next', or 'Previous'.");
        }
    }
}

const myPlaylist = new MusicPlaylist(["Song 1", "Song 2", "Song 3"]);
myPlaylist.executeCommand("play");
myPlaylist.executeCommand("next");
myPlaylist.executeCommand("play");
myPlaylist.executeCommand("pause");
myPlaylist.executeCommand("previous");
myPlaylist.executeCommand("play");      