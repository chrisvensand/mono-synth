import React from 'react';
import ListItem from './ListItem.jsx';
import './index.css';

export default class PresetList extends React.Component {
    render() {
        return(
            <ol className="preset-vertical-menu">
                { this.props.presetNames.map((value, index) => {
                    return <ListItem    key={index}
                                        name={value}
                                        presetNumber={index}
                                        currentPreset={this.props.currentPreset}
                                        handlePresetChange={this.props.handlePresetChange}/>
                })}
            </ol>
        );
    }
}