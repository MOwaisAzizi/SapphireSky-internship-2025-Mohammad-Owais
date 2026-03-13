
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