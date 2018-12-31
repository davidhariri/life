import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Post.css';

class Post extends Component {
  renderCreatedDate(ISODate) {
    const _date = moment(this.props.date_created);
    const humanDateFormat = _date.format('MMMM Do YYYY');

    return <time dateTime={ISODate}>{humanDateFormat}</time>;
  }

  renderText() {
    if (!this.props.comment) {
      return undefined;
    }

    return <p>{this.props.comment}</p>;
  }

  renderMedia() {
    if (!this.props.media) {
      return undefined;
    }

    return this.props.media.map(m => <img src={m} />);
  }

  renderLocation() {
    if (!this.props.location_name) {
      return undefined;
    }

    return (
      <span>
        &nbsp;—&nbsp;
        <a
          class="Post__info__location"
          href={`http://maps.apple.com/?ll=${this.props.location_lat},${
            this.props.location_lon
          }`}
        >
          {this.props.location_name}
        </a>
      </span>
    );
  }

  render() {
    return (
      <div className="Post">
        <div className="Post__content">
          {this.renderText()}
          {this.renderMedia()}
        </div>
        <div className="Post__info">
          {this.renderCreatedDate()}
          {this.renderLocation()}
          <Link
            className="Post__info__permalink"
            to={`/posts/${this.props.slug}/`}
          >
            Link
          </Link>
        </div>
      </div>
    );
  }
}

export default Post;
