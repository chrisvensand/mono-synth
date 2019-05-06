import React from 'react';
import Key from './Key.js';

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.bottomLetters = ['A','S','D','F','G','H','J','K','L',';'];
        this.topLetters = ['W','E','T','Y','U','O','P'];
        this.bottomKeys = this.bottomLetters.map(function(letter) {
                            return <Key key={letter} letter={letter} />;
                        });
        this.topKeys = this.topLetters.map(function(letter) {
                            return <Key key={letter} letter={letter} />;
                        });
    }

    render() {
        return (
            <div className="Keyboard">
                { this.bottomKeys }
                { this.topKeys }
            </div>
        );
    }
}

export default Keyboard;