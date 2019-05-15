import React from 'react';
import Oscillator from './Oscillator.jsx';
import EnvelopeGenerators from './EnvelopeGenerators.jsx';
import Filter from './Filter.jsx';
import Output from './Output.jsx';
import Presets from './Presets.jsx';
import Keyboard from './Keyboard.jsx';
import './index.css';

export default class Synthesizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPreset: "preset2",
            presets: {
                "preset1": {},
                "preset2": {
                    frequency : "C4" ,
                    detune : 0 ,
                    oscillator : {
                        type : "square"
                        },
                    filter : {
                        Q : 6 ,
                        type : "lowpass" ,
                        rolloff : -24
                    },
                    envelope : {
                        attack : 0.005 ,
                        decay : 0.1 ,
                        sustain : 0.9 ,
                        release : 1
                    },
                    filterEnvelope : {
                        attack : 0.06 ,
                        decay : 0.2 ,
                        sustain : 0.5 ,
                        release : 2 ,
                        baseFrequency : 200 ,
                        octaves : 7 ,
                        exponent : 2
                    }
                },
            },
            currentPitch: 3,
        }
    }

    handlePresetChange = (event) => {
        let nextPreset = event.currentTarget.id;
        this.setState({currentPreset: nextPreset});
    }

    handlePitchChange = (event) => {
        if (event.currentTarget.id === "up" && this.state.currentPitch < 5) {
            this.setState(state => ({
                currentPitch: state.currentPitch + 1
            }));
        }
        if (event.currentTarget.id === "down" && this.state.currentPitch > 1) {
            this.setState(state => ({
                currentPitch: state.currentPitch - 1
            }));
        }
    }

    render() {

        return (
            <div className="synthesizer">
                <img className="wood-background" src="./assets/light_wood_panel.jpg" alt="wood_panel" />
                <label>{this.state.currentPitch}</label>
                <div className="top-panel">
                    <Oscillator />
                    <EnvelopeGenerators />
                    <Filter />
                    <Output />
                </div>
                <div className="bottom-panel">
                    <Presets handlePresetChange={this.handlePresetChange} />
                    <Keyboard preset={this.state.presets[this.state.currentPreset]} pitch={this.state.currentPitch} />
                </div>
            </div>
        );
    }
}