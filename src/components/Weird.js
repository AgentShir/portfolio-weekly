import React, { Component } from 'react';

import '../styles/App.css';

class Weird extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="jumbotron">
          <h1 className="display-5">Weird Snacks</h1>
            <p className="lead">Because the worm in the tequila is meant to be eaten.</p>
          </div>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="http://lorempixel.com/200/200/food" alt="sweet snack1" />
                <div className="card-body">
                  <p className="card-text">Weird Snack 1</p>
                </div>
            </div>
            <div className="card">
                  <img className="card-img-top" src="http://lorempixel.com/200/200/cats" alt="sweet snack2" />
                    <div className="card-body">
                      <p className="card-text">Weird Snack 2</p>
                    </div>
            </div>
            <div className="card">
                    <img className="card-img-top" src="http://lorempixel.com/200/200/city" alt="sweet snack3" />
                  <div className="card-body">
                <p className="card-text">Weird Snack 3</p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Weird;
