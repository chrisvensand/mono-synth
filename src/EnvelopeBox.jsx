import React from 'react';
import Knob from './Knob.jsx';

export default class EnvelopeBox extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePresetModification = (setting, val) => {
        if (this.props.type === "filter-envelope-box") {
            this.props.modifyPreset("filterEnvelope", setting, val);
        } else {
            this.props.modifyPreset("envelope", setting, val);
        }
    }

    render() {
        let type = (this.props.type === "filter-envelope-box") ? "F" : "A";

        return(
            <div className={this.props.type}>
                <label className="envelope-label">{type}</label>
                <label className="attack-label">Attack</label>
                <Knob   name="attack-knob"
                        label="envelope-content"
                        parent="envelope"
                        value={this.props.settings["attack"]}
                        setting="attack"
                        modifyPreset={this.handlePresetModification}
                        />
                <label className="decay-label">Decay</label>
                <Knob   name="decay-knob"
                        label="envelope-content"
                        parent="envelope"
                        value={this.props.settings["decay"]}
                        setting="decay"
                        modifyPreset={this.handlePresetModification}
                        />
                <label className="sustain-label">Sustain</label>
                <Knob   name="sustain-knob"
                        label="envelope-content"
                        parent="envelope"
                        value={this.props.settings["sustain"]}
                        setting="sustain"
                        modifyPreset={this.handlePresetModification}
                        />
                <label className="release-label">Release</label>
                <Knob   name="release-knob"
                        label="envelope-content"
                        parent="envelope"
                        value={this.props.settings["release"]}
                        setting="release"
                        modifyPreset={this.handlePresetModification}
                        />
            </div>
        );
    }
}