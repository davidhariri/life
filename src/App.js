import React, { Component } from 'react';
import API from './models/API';
import Note from './views/Note';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };

    this.api = new API();
  }

  componentDidMount() {
    // Fetch notes from the API
    this.api.getNotes().then(notes => {
      this.setState({ notes });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.notes.map(n => <Note key={n.id} {...n} />)}
      </div>
    );
  }
}

export default App;
