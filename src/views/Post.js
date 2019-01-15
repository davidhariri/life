import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Base.css';
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

    return this.props.comment.split('\n').map((t, i) => {
      return <p key={i}>{t}</p>;
    });
  }

  renderMedia() {
    if (!this.props.media) {
      return undefined;
    }

    return this.props.media.map((m, i) => {
      return (
        <img
          style={{
            backgroundColor: m.avg_color,
            minHeight: Math.round(448 / m.aspect)
          }}
          key={i}
          alt=""
          src={m.url_optimized}
        />
      );
    });
  }

  renderLocation() {
    if (!this.props.location_name) {
      return undefined;
    }

    return (
      <span>
        &nbsp;—&nbsp;
        <a
          className="Post__info__location"
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
      <div className="Inline Post">
        <div className="Post__content">
          {this.renderText()}
          {this.renderMedia()}
        </div>
        <div className="Post__info">
          {this.renderCreatedDate()}
          {this.renderLocation()}
          <Link
            className="Post__info__right-link"
            to={`/posts/${this.props.slug}/`}
          >
            Link
          </Link>
          {this.props.show_tweet ? (
            <a
              className="Post__info__right-link"
              href={`https://twitter.com/davehariri/status/${
                this.props.tweet_id
              }`}
              target="_blank"
            >
              On Twitter
            </a>
          ) : (
            undefined
          )}
        </div>
      </div>
    );
  }
}

export default Post;
