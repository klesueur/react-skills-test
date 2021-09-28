import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    text: "Default text",
    timer: null,
    counter: 0
  }

  componentDidMount() {
    console.log('CDM');
    this.setState({ 
      text: (new Date()).getMilliseconds().toString(),
      timer: window.setInterval(() => {
        this.timerTrigger();
      }, 1000)
    });
  }

  componentWillUnmount() {
    console.log('CWU');
    window.clearInterval(this.state.timer);
  }

  timerTrigger = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const { text, counter } = this.state;
    return <div>
      <div>
        {text}
      </div>
      <div>
        {counter}
      </div>
      <div>
        <Link to="/page2">Go to Page2</Link>
      </div>
    </div>;
  }
}

export default App;
