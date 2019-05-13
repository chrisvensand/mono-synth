import React from 'react';
import Tone from 'tone';

export default class Key extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            synth: new Tone.Synth().toMaster(),
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isPressed !== prevProps.isPressed) {
            if (this.props.isPressed) {
                this.state.synth.triggerAttack('C4');
            } else {
                this.state.synth.triggerRelease();
            }
        }
    }

    handleKeyPress = () => {
        console.log("on");
        this.state.synth.triggerAttack('C4');
        this.changePressedState();
    }

    handleKeyRelease= () => {
        console.log("off");
        this.state.synth.triggerRelease();
        this.changePressedState();
    }

    render() {
        return (
            <button className="key"
                    id={this.props.letter}>
                {this.props.letter}
            </button>
        );
    }
}