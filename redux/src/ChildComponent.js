import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    return <div>
      {this.props.text}
    </div>;
  }
}

export default ChildComponent;
