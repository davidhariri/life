import React, { Component } from 'react';
import API from '../models/API';
import Note from '../views/Note';

class Notes extends Component {
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
      <div className="Notes">
        {this.state.notes.map(n => <Note key={n.id} {...n} />)}
      </div>
    );
  }
}

export default Notes;
