import React from 'react';
import Keyboard from './Keyboard.jsx';
import './index.css'

export default class App extends React.Component {
    render() {
		return (
            <div    id="main-content"
                    className="synthesizer-application">
                <Keyboard />
            </div>
		);
	}
}