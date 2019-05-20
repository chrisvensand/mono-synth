import React from 'react';
import Knob from './Knob.jsx';

export default class Oscillator extends React.Component {
    
    handlePresetModification = (setting, val) => {
        this.props.modifyPreset("oscillator", setting, val);
    }

    render() {
        return(
            <div className="oscillator" onClick={this.handleClick} tabIndex="0">
                <div className="panel-label-left">Oscillator</div>
                <div className="knob-box">
                    <label className="wave-label">Wave</label>
                    <Knob   setting="type"
                            name="wave-knob"
                            value={this.props.settings["type"]}
                            modifyPreset={this.handlePresetModification}
                            />
                    <label className="detune-label">Detune</label>
                    <Knob   setting="detune"
                            label="oscillator-content"
                            name="detune-knob"
                            value={this.props.settings["detune"]}
                            modifyPreset={this.handlePresetModification}
                            />
                    <label className="phase-label">Phase</label>
                    <Knob   setting="phase"
                            label="oscillator-content"
                            name="phase-knob"
                            value={this.props.settings["phase"]}
                            modifyPreset={this.handlePresetModification}
                            />
                </div>
            </div>
        );
    }
}