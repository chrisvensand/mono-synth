import React from 'react';
import Key from './Key.js';

class Keyboard extends React.Component {
    render() {
        const letters = ['A','S','D','F','G','H','J','K','L',';'];
        var keys = letters.map(function(letter) {
                        return <Key key={letter} letter={letter}/>;
                    });

        return (
            <div className="Keyboard">{ keys }</div>
        );
    }
}

export default Keyboard;