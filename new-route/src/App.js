import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return <div>
      <div>
        Landing Page<br /><br />
        <Link to="/page/1">Go to Page 1</Link><br />
        <Link to="/page/2">Go to Page 2</Link><br />
        <Link to="/page/3">Go to Page 3</Link>
      </div>
    </div>;
  }
}

export default App;
