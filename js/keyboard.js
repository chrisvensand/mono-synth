// Comments
class Keyboard {
    constructor(name) {
        this.letters = ['A','S','D','F','G','H','J','K','L',';'];
        this.keyboard = document.getElementById(name);
        this.keys = [];

        for (var i=0; i < this.letters.length; ++i) {
            this.keys[i] = new Key(this.letters[i]);
            this.keys[i].createButtonElement(this.letters[i]);
            this.keyboard.appendChild(this.keys[i]);
        }
    }

}
