import React from 'react';
import Tone from 'tone';

export default class Key extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            synth: new Tone.MonoSynth(this.props.settings).toMaster(),
        }
    }

    componentDidUpdate(prevProps) {
        // Check for a change in the pressed state of the key
        if (this.props.isPressed !== prevProps.isPressed) {
            if (this.props.isPressed) {
                this.state.synth.triggerAttack(this.props.frequency);
            } else {
                this.state.synth.triggerRelease();
            }
        }
        // Check for a preset sound change
        if (this.props.settings !== prevProps.settings) {
            this.setState({synth: new Tone.MonoSynth(this.props.settings).toMaster()});
        }
    }

    render() {
        let name = this.props.isPressed ? "pressed-key" : "key"

        return (
            <button id={this.props.letter}
                    className={name}
                    onMouseDown={this.props.handleMouseDown}
                    onMouseUp={this.props.handleMouseUp}>
                {this.props.letter}
            </button>
        );
    }
}