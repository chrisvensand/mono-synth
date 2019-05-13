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
        this.switchKey = this.switchKey.bind(this);
    }

    switchKey(event, pressed) {
        // handle convert all input to upper case
        let key = event.key.toUpperCase();

        // update isPressed state
        if (key in this.state.isPressed && this.state.isPressed[key] !== pressed) {
            let copy = this.state.isPressed;
            copy[key] = !copy[key];
            this.setState({isPressed: copy});
        }
    }

    handlePress = (event) => {
        this.switchKey(event, true);
    }

    handleRelease = (event) => {
        this.switchKey(event, false);
    }

    render() {
        const topKeys = ['Q','W','E','R','T','Y','U','I','O','P'];
        const bottomKeys = ['A','S','D','F','G','H','J','K','L',';'];

        return (
            <div className="screen-mask" onKeyDown={this.handlePress} onKeyUp={this.handleRelease} tabIndex="0">
                <div className="keyboard">
                    <label>hello</label>
                    <div className="top-keys">
                        { topKeys.map((value, index) => {
                            return <Key key={index} letter={value} isPressed={this.state.isPressed[value]} /> 
                        })}
                    </div>
                    <div className="bottom-keys">
                        { bottomKeys.map((value, index) => {
                            return <Key key={index} letter={value} isPressed={this.state.isPressed[value]} /> 
                        })}
                    </div>
                </div>
            </div> 
        );
    }
}