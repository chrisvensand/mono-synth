const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

class Key {
    constructor(letter) {
        this.oscillator = audioCtx.createOscillator();
        this.element = document.createElement("BUTTON");
    }

    createButtonElement(letter) {
        this.element.innerHTML = letter;
        this.element.setAttribute("type", "button");
        this.element.setAttribute("data-playing", "false");
        this.element.setAttribute("role", "switch");
    
        // add play and pause functionality to button
        this.element.addEventListener('click', function() {
    
            // check if context is in suspended state (autoplay policy)
            if (audioCtx.state === 'suspended') {
                audioContext.resume();
            }
    
            // play or pause track depending on state
            if (this.element.dataset.playing === 'false') {
                oscillator = resetOscillator();
                oscillator.start();
                this.element.dataset.playing = 'true';
                console.log("start button clicked");
            } else if (this.element.dataset.playing === 'true') {
                oscillator.stop();
                this.element.dataset.playing = 'false';
                console.log("stop button clicked");
            }
    
        }, false)
    }

    // reset the oscillator and connect it to the audio context destination
    resetOscillator() {
        oscillator = audioCtx.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
        oscillator.connect(audioCtx.destination);
        return oscillator;
    }
}
