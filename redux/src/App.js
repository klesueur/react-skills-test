import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class App extends Component {
  state = {
    text: "Important Text"
  }

  render() {
    return <div>
        <ChildComponent text={this.state.text} />
        <ChildComponent text={this.state.text} />
      </div>;
  }
}

export default App;
