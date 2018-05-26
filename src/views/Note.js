import React, { Component } from 'react';

class Note extends Component {
  createMarkup() {
    return { __html: this.props.html };
  }

  render() {
    return (
      <div className="Note">
        <div
          className="Note__content"
          dangerouslySetInnerHTML={this.createMarkup()}
        />
      </div>
    );
  }
}

export default Note;
