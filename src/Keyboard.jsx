import React from 'react';
import Key from './Key.jsx';
import './index.css';

export default class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settings: this.props.preset,
            pitch: this.props.pitch,
            isPressed: {
                'A': false,
                'S': false,
                'D': false,
                'F': false,
                'G': false,
                'H': false,
                'J': false,
                'K': false,
                'L': false,
                ';': false,
                'Q': false,
                'W': false,
                'E': false,
                'R': false,
                'T': false,
                'Y': false,
                'U': false,
                'I': false,
                'O': false,
                'P': false,
            },
            frequency: {
                'A': 261.6256,
                'S': 293.6648,
                'D': 329.6276,
                'F': 349.2282,
                'G': 391.9954,
                'H': 440.0000,
                'J': 493.8833,
                'K': 523.2511,
                'L': 587.3295,
                ';': 659.2551,
                'Q': 277.1826,
                'W': 311.1270,
                'E': 339.2863,
                'R': 369.9944,
                'T': 415.3047,
                'Y': 466.1638,
                'U': 508.3551,
                'I': 554.3653,
                'O': 622.2540,
                'P': 678.5727,
            },
        };
    }

    handleKeyDownEvent = (event) => {
        this.pressKey(event.key, true);
    }

    handleKeyUpEvent = (event) => {
        this.pressKey(event.key, false);
    }

    handleMouseDown = (event) => {
        this.pressKey(event.currentTarget.id, true);
    }

    handleMouseUp = (event) => {
        this.pressKey(event.currentTarget.id, false);
    }

    pressKey = (k, pressed) => {
        // convert all input to upper case
        let key = k.toUpperCase();

        // update state of pressed keys
        if (key in this.state.isPressed && this.state.isPressed[key] !== pressed) {
            let copy = this.state.isPressed;
            copy[key] = !copy[key];
            this.setState({isPressed: copy});
        }
    }

    handleChangePitch = (event) => {
        console.log(event);
    }

    componentDidUpdate(prevProps) {
        if (this.props.preset !== prevProps.preset) {
            this.setState({settings: prevProps.preset});
        }
        if (this.props.pitch !== prevProps.pitch) {
            console.log(this.props.pitch);
        }
    }

    render() {
        const topKeys = ['Q','W','E','R','T','Y','U','I','O','P'];
        const bottomKeys = ['A','S','D','F','G','H','J','K','L',';'];

        return (
            <div className="input-box" onKeyDown={this.handleKeyDownEvent} onKeyUp={this.handleKeyUpEvent} tabIndex="0">
                <div className="keyboard">
                    <div className="top-key-box">
                        { topKeys.map((value, index) => {
                            return <Key key={index}
                                        letter={value}
                                        settings={this.state.settings}
                                        isPressed={this.state.isPressed[value]}
                                        frequency={this.state.frequency[value]}
                                        handleMouseDown={this.handleMouseDown}
                                        handleMouseUp={this.handleMouseUp} /> 
                        })}
                    </div>
                    <div className="bottom-key-box">
                        { bottomKeys.map((value, index) => {
                            return <Key key={index}
                                        letter={value}
                                        settings={this.state.settings}
                                        isPressed={this.state.isPressed[value]}
                                        frequency={this.state.frequency[value]}
                                        handleMouseDown={this.handleMouseDown}
                                        handleMouseUp={this.handleMouseUp} /> 
                        })}
                    </div>
                </div>
            </div>
        );
    }
}