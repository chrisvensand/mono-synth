import React from 'react';
import Synthesizer from './Synthesizer.jsx';
import './index.css';

export default class App extends React.Component {
    render() {
		return (
            <div className="main-view">
                <a className="github-ref" href="https://github.com/chrisvensand">
                    <img className="picture" src="./assets/Github-Mark-Light-64px.png" alt="github"></img>
                </a>
                <a className="personal-ref" href="https://chrisvensand.com">
                    <img className="picture" src="./assets/head.png" alt="Personal Portfolio"></img>
                </a>
                <Synthesizer keyPressed/>
            </div>
		);
	}
}