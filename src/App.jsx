import React from 'react';
import Synthesizer from './Synthesizer.jsx';
import './index.css';

export default class App extends React.Component {
    render() {
		return (
            <div className="main-view">
                <a className="github-ref" href="https://github.com/chrisvensand/mono-synth">
                    <img className="picture" src={process.env.PUBLIC_URL + "/assets/GitHub-Mark-Light-64px.png"} alt="github"></img>
                </a>

                <Synthesizer keyPressed/>
            </div>
		);
	}
}