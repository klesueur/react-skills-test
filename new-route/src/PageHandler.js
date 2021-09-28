import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageHandler extends Component {
  render() {
    return <div>
      Page #<br /><br />
      <Link to="/">Go home</Link>
    </div>;
  }
}

export default PageHandler;
