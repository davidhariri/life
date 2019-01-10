import React, { Component } from 'react';
import API from '../models/API';
import Post from '../views/Post';
import Nav from '../views/Nav';

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

  render() {
    return (
      <div className="Posts">
        <Nav />
        {this.state.post ? <Post {...this.state.post} /> : undefined}
      </div>
    );
  }
}

export default Posts;
