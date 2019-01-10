import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Base.css';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Inline Nav">
        <Link to="/">Index</Link>
      </div>
    );
  }
}

export default Nav;
