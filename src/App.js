import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Notes from './controllers/Notes';
import Note from './controllers/Note';

class App extends Component {
  render() {
    return (
      <Switch>
        <div>
          <Route exact path="/" component={() => <Notes />} />
          <Route
            exact
            path="/notes/:slug"
            component={props => <Note {...props} />}
          />
        </div>
      </Switch>
    );
  }
}

export default App;
