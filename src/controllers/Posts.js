import React, { Component } from 'react';
import API from '../models/API';
import Post from '../views/Post';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.api = new API();
  }

  componentDidMount() {
    // Fetch posts from the API
    this.api.getPosts().then(posts => {
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="Posts">
        {this.state.posts.map(n => (
          <Post key={n.id} {...n} />
        ))}
      </div>
    );
  }
}

export default Posts;
