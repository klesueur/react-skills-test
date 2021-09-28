import React, { Component } from 'react';

class App extends Component {
  state = {
    text: "Default text"
  }

  render() {
    const { text } = this.state;
    return <div>
      <div>
        {text}
      </div>
    </div>;
  }
}

export default App;
