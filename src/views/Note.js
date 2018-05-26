import React, { Component } from 'react';
import './Note.css';

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
        <div className="Note__info">
          <time datetime={`${this.props.created}`}>{this.props.created}</time> —{' '}
          <a
            href={`http://maps.apple.com/?ll=${this.props.location[0]},${
              this.props.location[1]
            }`}
          >
            {this.props.location_friendly}
          </a>
          <a
            href={`/notes/${this.props.slug}/`}
            className="Note__info__permalink"
          >
            Link
          </a>
        </div>
      </div>
    );
  }
}

export default Note;
