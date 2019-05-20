import React from 'react';
import PresetList from './PresetList.jsx'

export default class Presets extends React.Component {
    render() {
        return (
            <div className="presets" >
                <div className="preset-content">
                    <div className="preset-header">
                        <label className="preset-label">
                            Preset: {this.props.currentPreset}
                        </label>
                    </div>
                    <PresetList presetNames={this.props.presetNames}
                                currentPreset={this.props.currentPreset}
                                handlePresetChange={this.props.handlePresetChange} />
                </div>
            </div>
        );
    }
}