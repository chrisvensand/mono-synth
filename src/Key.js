import React from 'react';

class Key extends React.Component {
    constructor(props) {
        super(props);
        this.letter = this.props.letter;
        this.state = {
            isPressed: false,
        };
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        if (!this.state.isPressed) {
            // Create oscillator and start sound
            console.log(this.letter + ' key start sound.')
        } else {
            // Stop oscillator sound
            console.log(this.letter + ' key stop sound')
        }

        this.setState(state => ({
            isPressed: !state.isPressed
        }));
    }

    render() {
        return (
            <button className="key" id={this.letter} onClick={this.handlePress} type="button">
                {this.letter}
            </button>
        );
    }
}

export default Key;