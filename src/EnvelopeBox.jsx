import React from 'react';
import './index.css';

export default class EnvelopeBox extends React.Component {
    render() {
        return(
            <div className={this.props.type}>
                <div className="attack-knob">
                        <img src="./assets/Knob.png" alt="Knob" />
                    </div>
                    <div className="decay-knob">
                        <img src="./assets/Knob.png" alt="Knob" />
                    </div>
                    <div className="sustain-knob">
                        <img src="./assets/Knob.png" alt="Knob" />
                    </div>
                    <div className="release-knob">
                        <img src="./assets/Knob.png" alt="Knob" />
                </div>
            </div>
        );
    }
}