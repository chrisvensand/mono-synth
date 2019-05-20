import React from 'react';
import EnvelopeBox from './EnvelopeBox';

export default class EnvelopeGenerators extends React.Component {
    render() {
        return(
            <div className="envelope-generators">
                <div className="panel-label-center">Envelope Generators</div>
                <div className="knob-box">
                    <EnvelopeBox    type="filter-envelope-box"
                                    settings={this.props.filterSettings}
                                    modifyPreset={this.props.modifyPreset}
                                    />
                    <EnvelopeBox    type="amplitude-envelope-box"
                                    settings={this.props.envelopeSettings}
                                    modifyPreset={this.props.modifyPreset}
                                    />
                </div>
            </div>
        );
    }
}