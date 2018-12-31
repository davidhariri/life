import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Posts from './controllers/Posts';
import Post from './controllers/Post';

class App extends Component {
  render() {
    return (
      <Switch>
        <div>
          <Route exact path="/" component={() => <Posts />} />
          <Route
            exact
            path="/posts/:slug"
            component={props => <Post {...props} />}
          />
        </div>
      </Switch>
    );
  }
}

export default App;
