import React, { Component } from 'react';

class Note extends Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

export default Note;
