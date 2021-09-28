import React, { Component } from 'react';

class App extends Component {
  state = {
    text: 'Landing Page'
  }

  componentDidUpdate() {
    //this.setState({ text: 'Component Updated' });
  }

  componentDidMount() {
    this.setState({ text: 'Landing Page 2' });
  }

  render() {
    const { text } = this.state;
    
    if (text === 'Landing Page 2')
      this.setState({ text: 'Landing Page 3' });

    return <div>
      {this.state.text}
    </div>;
  }
}

export default App;
