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
                "preset1": {
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
                "preset2": {
                    frequency : "C4" ,
                    detune : 0 ,
                    oscillator : {
                        type : "sine"
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
                "preset7": {},
                "preset8": {},
                "preset9": {},
                "preset21": {},
                "preset54": {},
                "preset123": {},
                "preset421": {},
                "preset90": {}
            },
            presetNames: [  "preset1",
                            "preset2",
                            "preset7",
                            "preset8",
                            "preset9",
                            "preset21",
                            "preset54",
                            "preset123",
                            "preset421",
                            "preset90",
                            "preset65",
                            "preset12222",
                            "preset24"
                        ],
            currentPitch: 3
        }
    }

    changePreset(nextPreset) {
        this.setState({currentPreset: nextPreset});
    }

    handlePresetChange = (event) => {
        // Check if user clicked on new preset
        if (event.type === "click") {
            this.changePreset(event.currentTarget.id);
        }
        // Check if user hit enter on new preset
        /*
        if (event.type === "keydown" && event.keyCode() === 13) {
            this.changePreset(event.currentTarget.id);
        }
        */
    }

    handleRandomPresetChange = () => {
        let randIndex = Math.floor(Math.random() * this.state.presetNames.length);
        this.changePreset(this.state.presetNames[randIndex]);
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
                <div className="top-panel">
                    <Oscillator />
                    <EnvelopeGenerators />
                    <Filter />
                    <Output />
                </div>
                <div className="bottom-panel">
                    <Keyboard   preset={this.state.presets[this.state.currentPreset]}
                                pitch={this.state.currentPitch} />
                    <Presets    presetNames={this.state.presetNames}
                                currentPreset={this.state.currentPreset}
                                handlePresetChange={this.handlePresetChange}
                                handleRandomPreset={this.handleRandomPresetChange} />
                </div>
            </div>
        );
    }
}