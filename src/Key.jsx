import React from 'react';
import Tone from 'tone';

class Key extends React.Component {
    constructor(props) {
        super(props);
        this.letter = this.props.letter;
        this.synth = new Tone.Synth().toMaster();
        this.state = {
            isPressed: false
        }
    }

    handleClick = () => {
        if (this.state.isPressed) {
            console.log("off");
        } else {
            console.log("on");
        }

        this.setState = (state => ({
            isPressed: !state.isPressed
        }));

        //this.synth.triggerAttack('C4');
        //console.log(this.letter + ' key start sound.');
    }

    stop(e) {
        console.log(e + ' Key pressed')
        this.synth.triggerRelease();
        console.log(this.letter + ' key stop sound');
    }

    render() {
        return (
            <button className="Key"
                    type="button" 
                    id={this.letter}
                    onMouseDown={this.handleClick}
                    onMouseUp={this.handleClick}>
                {this.letter}
            </button>
        );
    }
}

export default Key;