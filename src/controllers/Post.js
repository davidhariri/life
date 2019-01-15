import React, { Component } from 'react';
import API from '../models/API';
import Post from '../views/Post';
import Nav from '../views/Nav';
import MetaTags from 'react-meta-tags';
import cutOffString from '../helpers/cutOffString';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: undefined
    };

    this.api = new API();
  }

  componentDidMount() {
    // Fetch posts from the API
    this.api.getPost(this.props.match.params.slug).then(posts => {
      this.setState({ post: posts[0] });
    });
  }

  getTitle() {
    const c = this.state.post.comment;
    return c ? cutOffString(c, 24) : 'A post';
  }

  getMedia() {
    if (this.state.post !== undefined && this.state.post.media.length) {
      return this.state.post.media[0].url_optimized;
    }
  }

  getMetaTags() {
    if (this.state.post === undefined) {
      return undefined;
    }

    return (
      <MetaTags>
        <title>{this.getTitle()}</title>
        <meta property="og:title" content={this.getTitle()} />
        <meta name="description" content={this.state.post.comment} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={this.getMedia()} />
      </MetaTags>
    );
  }

  render() {
    return (
      <div className="Posts">
        {this.getMetaTags()}
        <Nav />
        {this.state.post ? (
          <Post {...this.state.post} show_tweet={true} />
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default Posts;
