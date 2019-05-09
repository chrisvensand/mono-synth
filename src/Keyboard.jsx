import React from 'react';
import Key from './Key.jsx';
import './index.css';
import { type } from 'os';

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.topLetters = ['W','E','T','Y','U','O','P'];
        this.bottomLetters = ['A','S','D','F','G','H','J','K','L',';'];
        this.topKeys = this.topLetters.map(function(letter) {
                            return <Key key={letter} letter={letter} />;
                        });
        this.bottomKeys = this.bottomLetters.map(function(letter) {
                            return <Key key={letter} letter={letter} />;
                        });
    }

    printKey = event => {
        console.log(event);
        console.log(event.key.toUpperCase());
    }

    triggerKey = event => {
        
    }    
    render() {
        return (
            <div id="Keyboard" className="Keyboard" onKeyDown={this.triggerKey} tabIndex="0">
                <div className="TopKeys">
                    { this.topKeys }
                </div>
                <div className="BottomKeys">
                    { this.bottomKeys }
                </div>
            </div>
        );
    }
}

export default Keyboard;