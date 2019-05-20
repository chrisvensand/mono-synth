import React from 'react';
import Knob from './Knob.jsx';

export default class Filter extends React.Component {

    handlePresetModification = (setting, val) => {
        this.props.modifyPreset("filter", setting, val);
    }

    render() {
        return(
            <div className="filter">
                <div className="panel-label-center">Filter</div>
                <div className="knob-box">
                    <label className="frequency-label">Frequency</label>
                    <Knob   name="frequency-knob"
                            label="filter-content"
                            value={this.props.settings["frequency"]}
                            setting="frequency"
                            modifyPreset={this.handlePresetModification}
                            />
                    <label className="type-label">Type</label>
                    <Knob   name="type-knob"
                            value={this.props.settings["type"]}
                            setting="type"
                            modifyPreset={this.handlePresetModification}
                            />
                    <label className="rolloff-label">Rolloff</label>
                    <Knob   name="rolloff-knob"
                            label="filter-content"
                            value={this.props.settings["rolloff"]}
                            setting="rolloff"
                            modifyPreset={this.handlePresetModification}
                            />
                </div>
            </div>
        );
    }
}