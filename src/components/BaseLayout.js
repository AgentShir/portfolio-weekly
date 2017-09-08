import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/App.css';

class BaseLayout extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Coding Outfitters</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/home">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/campingneeds">Camping Needs</a>
            <a className="nav-item nav-link" href="/hikinggear">Hiking Gear</a>
            <a className="nav-item nav-link" href="/fishingtackle">Fishing Tackle</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default BaseLayout;
