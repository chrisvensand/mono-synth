import React from 'react';
import Key from './Key.jsx';
import './index.css';

export default class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        };
        this.changeState = this.changeState.bind(this);
        this.handlePress = this.handlePress.bind(this);
        this.handleRelease = this.handleRelease.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handlePress = (event) => {
        this.changeState(event.key, true);
    }

    handleRelease = (event) => {
        this.changeState(event.key, false);
    }

    handleMouseDown = (event) => {
        this.changeState(event.currentTarget.id, true);
    }

    handleMouseUp = (event) => {
        this.changeState(event.currentTarget.id, false);
    }

    changeState(k, pressed) {
        // convert all input to upper case
        let key = k.toUpperCase();

        // update state of pressed keys
        if (key in this.state.isPressed && this.state.isPressed[key] !== pressed) {
            let copy = this.state.isPressed;
            copy[key] = !copy[key];
            this.setState({isPressed: copy});
        }
    }

    render() {
        const topKeys = ['Q','W','E','R','T','Y','U','I','O','P'];
        const bottomKeys = ['A','S','D','F','G','H','J','K','L',';'];

        return (
            <div className="screen-mask" onKeyDown={this.handlePress} onKeyUp={this.handleRelease} tabIndex="0">
                <div className="keyboard">
                    <div className="top-keys">
                        { topKeys.map((value, index) => {
                            return <Key key={index}
                                        letter={value}
                                        isPressed={this.state.isPressed[value]}
                                        handleMouseDown={this.handleMouseDown}
                                        handleMouseUp={this.handleMouseUp} /> 
                        })}
                    </div>
                    <div className="bottom-keys">
                        { bottomKeys.map((value, index) => {
                            return <Key key={index}
                                        letter={value}
                                        isPressed={this.state.isPressed[value]}
                                        handleMouseDown={this.handleMouseDown}
                                        handleMouseUp={this.handleMouseUp} /> 
                        })}
                    </div>
                </div>
            </div> 
        );
    }
}