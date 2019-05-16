import React from 'react';
import './index.css';

export default class PresetList extends React.Component {
    render() {
        return(
            <ol className="preset-vertical-menu">
                <li>kick</li>
                <li>kick</li>
                <li>drums</li>
                <li>snare</li>
            </ol>
        );
    }
}