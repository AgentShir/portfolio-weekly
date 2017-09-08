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
              <img className="card-img-top" src="http://lorempixel.com/200/200/food" alt="sweet snack1" />
                <div className="card-body">
                  <h4 className="card-title">Sweet Snack 1</h4>
                    <h6 className="card-subtitle mb-2 text-muted">$4.00</h6>
                      <p className="card-text">Gummy candies. Non-alcoholic.</p>
                </div>
            </div>
            <div className="card">
                  <img className="card-img-top" src="http://lorempixel.com/200/200/cats" alt="sweet snack2" />
                    <div className="card-body">
                      <h4 className="card-title">Sweet Snack 2</h4>
                        <h6 className="card-subtitle mb-2 text-muted">$5.00</h6>
                          <p className="card-text">Alcoholic gummy candies.</p>
                    </div>
            </div>
            <div className="card">
                    <img className="card-img-top" src="http://lorempixel.com/200/200/city" alt="sweet snack3" />
                  <div className="card-body">
                <h4 className="card-title">Sweet Snack 3</h4>
                <h6 className="card-subtitle mb-2 text-muted">$Free.99</h6>
                  <p className="card-text">Fruit flavored Chupa Chups. Good luck, I don't usually share them.</p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Sweet;
