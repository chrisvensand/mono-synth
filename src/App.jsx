import React from 'react';
import Synthesizer from './Synthesizer.jsx';
import './index.css'

export default class App extends React.Component {
    render() {
		return (
            <div className="main-view">
                <Synthesizer />
            </div>
		);
	}
}