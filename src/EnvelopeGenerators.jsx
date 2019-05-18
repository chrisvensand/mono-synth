import React from 'react';
import EnvelopeBox from './EnvelopeBox';
import './index.css';

export default class EnvelopeGenerators extends React.Component {
    render() {
        return(
            <div className="envelope-generators">
                <div className="panel-label-center">Envelope Generators</div>
                <div className="knob-box">
                    <EnvelopeBox type="filter-envelope-box" />
                    <EnvelopeBox type="amplitude-envelope-box" />
                </div>
            </div>
        );
    }
}