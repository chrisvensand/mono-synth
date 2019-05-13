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

    render() {
        var name = "key";
        if (this.props.isPressed) {
            name = "pressedKey";
        }

        return (
            <button className={name}
                    id={this.props.letter}
                    onMouseDown={this.props.handleMouseDown}
                    onMouseUp={this.props.handleMouseUp}>
                {this.props.letter}
            </button>
        );
    }
}