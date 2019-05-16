import React from 'react';
import PresetList from './PresetList.jsx'
import './index.css';

export default class Presets extends React.Component {
    render() {
        return (
            <div className="presets">
                <div className="preset-content">
                    <div className="preset-header">
                        <label className="preset-label"> Preset Sounds </label>
                        <div className="preset-random-button-container">
                            <button className="preset-random-button" > 🎲 </button>
                        </div>
                    </div>
                    <PresetList />
                </div>
            </div>
        );
    }
}