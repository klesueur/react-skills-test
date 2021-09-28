import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page2 extends Component {
  render() {
    return <div>
      Page2<br />
      <Link to="/">Go Back</Link>
    </div>;
  }
}

export default Page2;
