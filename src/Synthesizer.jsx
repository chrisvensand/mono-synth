import React from 'react';
import Keyboard from './Keyboard.jsx';
import './index.css';

export default class Synthesizer extends React.Component {
    render() {
        return (
            <div className="synthesizer">
                <Keyboard />
            </div>
        );
    }
}