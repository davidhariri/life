import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Note.css';

class Note extends Component {
  renderCreatedDate(ISODate) {
    const _date = moment(this.props.created);
    const humanDateFormat = _date.format('MMMM Do YYYY');

    return <time dateTime={ISODate}>{humanDateFormat}</time>;
  }

  renderMedia() {
    if (!this.props.images) {
      return undefined;
    }

    return this.props.images.map(i => (
      <img src={i.fields.file.url + '?w=800'} alt={i.fields.description} />
    ));
  }

  renderLocation() {
    if (!this.props.location) {
      return undefined;
    }

    return (
      <span>
        &nbsp;—&nbsp;
        <a
          class="Note__info__location"
          href={`http://maps.apple.com/?ll=${this.props.location[0]},${
            this.props.location[1]
          }`}
        >
          {this.props.location_friendly}
        </a>
      </span>
    );
  }

  render() {
    console.log(this.props.images);
    return (
      <div className="Note">
        <div className="Note__content">
          <p>{this.props.text}</p>
          {this.renderMedia()}
        </div>
        <div className="Note__info">
          {this.renderCreatedDate()}
          {this.renderLocation()}
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
