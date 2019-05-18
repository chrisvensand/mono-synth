import React from 'react';
import './index.css';

export default class Output extends React.Component {
    render() {
        return(
            <div className="output">
                <div className="panel-label-right">Output</div>
                <div className="knob-box">
                    <div className="volume-knob">
                        <img src="./assets/Knob.png" alt="Knob" />
                    </div>
                </div>
            </div>
        );
    }
}