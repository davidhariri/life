import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Note.css';

class Note extends Component {
  render() {
    return (
      <div className="Note">
        <div className="Note__content">{this.props.text}</div>
        <div className="Note__info">
          <time dateTime={`${this.props.created}`}>{this.props.created}</time> —{' '}
          <a
            href={`http://maps.apple.com/?ll=${this.props.location[0]},${
              this.props.location[1]
            }`}
          >
            {this.props.location_friendly}
          </a>
          <Link
            className="Note__info__permalink"
            to={`/notes/${this.props.id}/`}
          >
            Link
          </Link>
        </div>
      </div>
    );
  }
}

export default Note;
