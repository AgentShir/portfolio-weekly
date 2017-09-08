import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/App.css';

class BaseLayout extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        Coding Outfitters
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link active" to="/home">Home <span className="sr-only">(current)</span></NavLink>
              <NavLink className="nav-item nav-link" to="/campingneeds">Camping Needs</NavLink>
              <NavLink className="nav-item nav-link" to="/hikinggear">Hiking Gear</NavLink>
              <NavLink className="nav-item nav-link" to="/fishingtackle">Fishing Tackle</NavLink>
            </div>
          </div>
      </nav>
    )
  }
}

export default BaseLayout;
