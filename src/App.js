import React from 'react';
import Keyboard from './Keyboard.js';

class App extends React.Component {
    render() {
		return (
			<div className="main-content">
        		<header className="main-header">
                    <site-logo>:)</site-logo>
                    <site-name> Synth </site-name>
                    <nav class="site-header__nav">
                        <nav-item>
                            <a href="/about">i</a>
                        </nav-item>
                    </nav>
				</header>
				<Keyboard />
			</div>
		);
	}
}

export default App;