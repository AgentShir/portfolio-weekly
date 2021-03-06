import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/App.css';

class BaseLayout extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <p className="text-lg-left">Study Snacks</p>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-item nav-link active" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-item nav-link" to="/savory">Savory Snacks</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-item nav-link" to="/weird">Weird Snacks</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-item nav-link" to="/sweet">Sweet Snacks</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout;
