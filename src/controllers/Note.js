import React, { Component } from 'react';
import API from '../models/API';
import Note from '../views/Note';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: undefined
    };

    this.api = new API();
  }

  componentDidMount() {
    // Fetch notes from the API
    this.api.getNote(this.props.match.params.slug).then(note => {
      this.setState({ note });
    });
  }

  render() {
    return (
      <div className="Notes">
        {this.state.note ? <Note {...this.state.note} /> : undefined}
      </div>
    );
  }
}

export default Notes;
