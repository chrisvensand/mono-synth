import React from 'react';
import './index.css';

export default class Oscillator extends React.Component {
    render() {
        return(
            <div className="oscillator">
                <div className="panel-label-left">Oscillator</div>
                <div className="knob-box">
                    <label className="wave-label">Wave</label>
                    <div className="wave-knob">
                        <img src="./assets/Knob.png" alt="Knob" />
                    </div>
                    <label className="detune-label">Detune</label>
                    <div className="detune-knob">
                        <img src="./assets/Knob.png" alt="Knob" />
                    </div>
                    <label className="phase-label">Phase</label>
                    <div className="phase-knob">
                        <img src="./assets/Knob.png" alt="Knob" />
                    </div>
                </div>
            </div>
        );
    }
}