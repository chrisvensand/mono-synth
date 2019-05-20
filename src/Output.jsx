import React from 'react';
import Knob from './Knob.jsx';

export default class Output extends React.Component {

    handlePresetModification = (setting, val) => {
        this.props.modifyPreset("output", setting, val);
    }

    render() {
        return(
            <div className="output">
                <div className="panel-label-right">Output</div>
                <div className="knob-box">
                    <label className="volume-label">Volume</label>
                    <Knob   name="volume-knob"
                            label="volume-content" 
                            value={this.props.settings}
                            setting="volume"
                            modifyPreset={this.handlePresetModification} 
                            />
                </div>
            </div>
        );
    }
}