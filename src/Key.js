import React from 'react';
import Tone from 'tone';

class Key extends React.Component {
    constructor(props) {
        super(props);
        this.letter = this.props.letter;
        this.synth = new Tone.Synth().toMaster();
    }

    handleButtonPress = event => {
        if (event.key === 'Enter') {
            console.log(event.Key + ' Key pressed')    
            this.handlePlaySynth();
        }
    };

    handlePlaySynth = () => {
        this.synth.triggerAttack('C4');
        console.log(this.letter + ' key start sound.');
    }

    stop(e) {
        console.log(e + ' Key pressed')
        this.synth.triggerRelease();
        console.log(this.letter + ' key stop sound');
    }

    render() {
        return (
            <div>
                <input type="name" onKeyPress={this.handlePlaySynth} />
                <button className="Key"
                        type="button" 
                        id={this.letter}
                        onClick={(e) => this.play(e)}
                        onKeyPress={(e) => this.stop(e)}>
                    {this.letter}
                </button>
            </div>
        );
    }
}

export default Key;