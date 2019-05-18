import React from 'react';
import PresetList from './PresetList.jsx'
import './index.css';

export default class Presets extends React.Component {
    render() {
        return (
            <div className="presets" >
                <div className="preset-content">
                    <div className="preset-header">
                        <label className="preset-label">
                            Preset: {this.props.currentPreset}
                        </label>
                        <button className="preset-random-button"
                                onClick={this.props.handleRandomPresetChange}
                                tabIndex="1"> ? </button>
                    </div>
                    <PresetList presetNames={this.props.presetNames}
                                currentPreset={this.props.currentPreset}
                                handlePresetChange={this.props.handlePresetChange} />
                </div>
            </div>
        );
    }
}