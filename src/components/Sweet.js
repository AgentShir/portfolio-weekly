import React, { Component } from 'react';

import '../styles/App.css';

class Sweet extends Component {
  render() {
    return(
      <div className="wrapper">
        <div className="jumbotron">
          <h1 className="display-5">Sweet Snacks</h1>
            <p className="lead">Snacks for those with a sweet disposition.</p>
          </div>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="http://lorempixel.com/200/200/food" alt="sweet snack1" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Snack 1</p>
                </div>
            </div>
            <div className="card">
                  <img className="card-img-top" src="http://lorempixel.com/200/200/cats" alt="sweet snack2" alt="Card image cap" />
                    <div className="card-body">
                      <p className="card-text">Snack 2</p>
                    </div>
            </div>
            <div className="card">
                    <img className="card-img-top" src="http://lorempixel.com/200/200/city" alt="sweet snack3" alt="Card image cap" />
                  <div className="card-body">
                <p className="card-text">Snack 3</p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Sweet;
