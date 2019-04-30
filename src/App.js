import React from 'react';
import Keyboard from './Keyboard.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Synthesizer
        </header>
        <Keyboard />
      </div>
    );
  }
}

export default App;
